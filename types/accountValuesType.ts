import { showModalProps } from "./modalType";

export type updateUserData = {
  name: string;
  email: string;
};

export type Passwords = {
  currentPassword: string;
  newPassword: string;
};

export type DeleteAccountModalProps = showModalProps & {
  onConfirm: () => void;
};
