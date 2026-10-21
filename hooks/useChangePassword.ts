import { useRef, useState } from "react";
import { useSession } from "../ctx";
import { updatePassword } from "../services/passwordService";

export const useChangePassword = () => {
  const { user } = useSession();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [edit, setEdit] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgress = useRef(false);

  const toEdit = () => {
    if (edit) {
      setPassword(user?.password || "");
    } else {
      setEdit(false);
    }
  };

  const changePassword = async () => {
    if (submissionInProgress.current) return;
    submissionInProgress.current = true;
    setIsSubmitting(true);
    try {
      const passwords = {
        currentPassword: password,
        newPassword,
      };
      await updatePassword(passwords);
      setEdit(true);
      setPassword("");
      setNewPassword("");
      setShowSuccessModal(true);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
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
    showPassword,
    setShowPassword,
    showNewPassword,
    setShowNewPassword,
    isSubmitting,
  };
};
