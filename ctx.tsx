import { use, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "./hooks/useStorageState";
import { loginUser } from "./services/loginService";
import { SignInValues } from "./types/signInValuesType";

type User = {
  id: string;
  name: string;
  email: string;
};

const AuthContext = createContext<{
  session: string | null;
  isLoading: boolean;
  signIn: (values: SignInValues) => Promise<void>;
  signOut: () => void;
  user: User | null;
} | null>(null);

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoadingSession, session], setSession] = useStorageState("session");
  const [[isLoadingUser, storedUser], setStoredUser] = useStorageState("user");

  const user = storedUser ? (JSON.parse(storedUser) as User) : null;

  const isLoading = isLoadingSession || isLoadingUser;

  return (
    <AuthContext.Provider
      value={{
        signIn: async (values: SignInValues) => {
          try {
            const response = await loginUser(values);
            const { id, email, name, token } = response.user;
            setSession(token);
            setStoredUser(JSON.stringify({ id, email, name }));
          } catch (error) {
            console.error("Error signIn:", error);
            throw error;
          }
        },
        signOut: () => {
          setSession(null);
          setStoredUser(null);
        },
        session,
        isLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
