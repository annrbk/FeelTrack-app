import { useState, useEffect } from "react";
import type { CalendarProps } from "../types/dateOfBirthType";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export const useCalendar = ({
  initialDate,
  onDateChange,
  disabled,
}: CalendarProps) => {
  const [date, setDate] = useState<Date | null>(initialDate || null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setDate(initialDate || null);
  }, [initialDate]);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ): void => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate);
    }
  };

  const showDatepicker = () => {
    if (!disabled) setShow(true);
  };

  const formatDate = () => {
    if (!date) {
      return "";
    } else {
      return date.toLocaleDateString();
    }
  };
  return { date, show, onChange, showDatepicker, formatDate };
};
