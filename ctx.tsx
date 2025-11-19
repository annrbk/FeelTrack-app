import { use, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "./hooks/useStorageState";
import { loginUser } from "./services/loginService";
import { SignInValues } from "./types/signInValuesType";
import type { User } from "./types/userType";

const AuthContext = createContext<{
  session: string | null;
  isLoading: boolean;
  signIn: (values: SignInValues) => Promise<void>;
  signOut: () => void;
  updateUser: (updatedData: Partial<User>) => void;
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
            const { id, email, name, number, dateOfBirth } = response.user;
            const token = response.token;
            setSession(token);
            setStoredUser(
              JSON.stringify({ id, email, name, number, dateOfBirth })
            );
          } catch (error) {
            console.error("Error signIn:", error);
            throw error;
          }
        },
        signOut: () => {
          setSession(null);
          setStoredUser(null);
        },
        updateUser: (updatedData) => {
          if (!user) return;
          const updatedUser = {
            ...user,
            ...updatedData,
          };
          setStoredUser(JSON.stringify(updatedUser));
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
