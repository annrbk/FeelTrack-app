import { use, createContext, type PropsWithChildren, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const ThemeContext = createContext<{
  theme: "light" | "dark";
  switchTheme: (theme: "light" | "dark") => Promise<void>;
} | null>(null);

export function useTheme() {
  const value = use(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be wrapped in a <ThemeProvider />");
  }
  return value;
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        if (storedTheme === "light" || storedTheme === "dark") {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme: async (theme) => {
          try {
            await AsyncStorage.setItem("theme", theme);
            setTheme(theme);
          } catch (error) {
            console.error("Error switching theme:", error);
          }
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
