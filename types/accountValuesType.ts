import { showModalProps } from "./modalType";

export type updateUserData = {
  name: string;
  email: string;
  number: string;
  dateOfBirth: string | null;
};

export type Passwords = {
  currentPassword: string;
  newPassword: string;
};

export type DeleteAccountModalProps = showModalProps & {
  onConfirm: () => void;
};
