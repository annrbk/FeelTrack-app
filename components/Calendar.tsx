import React from "react";
import { Pressable, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "../styles/Calendar.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { CalendarProps } from "../types/dateOfBirthType";
import { useCalendar } from "../hooks/useCalendar";

export default function Calendar({
  onDateChange,
  initialDate,
  disabled,
}: CalendarProps) {
  const { date, show, onChange, showDatepicker, formatDate } = useCalendar({
    initialDate,
    onDateChange,
    disabled,
  });

  return (
    <>
      <Pressable
        onPress={showDatepicker}
        disabled={disabled}
        style={disabled ? styles.disabled : styles.active}
      >
        <View style={styles.calendarInput}>
          <TextInput
            style={styles.input}
            placeholder="Select date"
            value={formatDate()}
            editable={false}
            pointerEvents="none"
          />
          <Ionicons
            style={styles.calendarInputIcon}
            name="calendar"
            size={24}
            color="#2e86de"
          />
        </View>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode="date"
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
    </>
  );
}
