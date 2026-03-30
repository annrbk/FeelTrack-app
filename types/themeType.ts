export type SwitchThemeProps = {
  value: "light" | "dark";
  onValueChange: (theme: "light" | "dark") => void;
};
