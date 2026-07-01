export type SwitchThemeProps = {
  value: "light" | "dark";
  onValueChange: (theme: "light" | "dark") => void;
};
export interface AppThemeColors {
  backgroundColorPrimary: string;
  surfacePrimary: string;
  textPrimary: string;
  textSecondary: string;
  borderPrimary: string;
  dividerPrimary: string;
  btnPrimary: string;
  btnActive: string;
  btnInactive: string;
  btnWarning: string;
  btnSuccess: string;
  white?: string;
  btnControl: string;

  bgCalm?: string;
  bgEnergize?: string;
  bgSleep?: string;
  bgBalance?: string;
  bgFocus?: string;
}
