export type CalendarProps = {
  onDateChange: (date: Date | null) => void;
  initialDate?: Date | null;
  disabled: boolean;
};
