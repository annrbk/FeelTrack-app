import { useState } from "react";
import { useSession } from "../ctx";
import { updatePassword } from "../services/passwordService";

export const useChangePassword = () => {
  const { user } = useSession();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [edit, setEdit] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const toEdit = () => {
    if (edit) {
      setPassword(user?.password || "");
    } else {
      setEdit(false);
    }
  };

  const changePassword = async () => {
    try {
      const passwords = {
        currentPassword: password,
        newPassword,
      };
      await updatePassword(passwords);
      setEdit(false);
      setPassword("");
      setNewPassword("");
      setShowSuccessModal(true);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onCloseModal = () => {
    setShowSuccessModal(false);
  };

  return {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    edit,
    setEdit,
    showSuccessModal,
    setShowSuccessModal,
    toEdit,
    changePassword,
    onCloseModal,
  };
};
