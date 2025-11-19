import { useState } from "react";
import { useSession } from "../ctx";
import { updateAccount } from "../services/accountService";

export const useAccount = () => {
  const { user, updateUser } = useSession();
  const [name, setName] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [number, setNumber] = useState<string>(user?.number || "");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(
    user?.dateOfBirth ? new Date(user.dateOfBirth) : null
  );
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const toEdit = () => {
    if (edit) {
      setName(user?.name || "");
      setEmail(user?.email || "");
      setNumber(user?.number || "");
      setDateOfBirth(user?.dateOfBirth ? new Date(user.dateOfBirth) : null);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const addChanges = async () => {
    try {
      const editedData = {
        name,
        email,
        number,
        dateOfBirth: dateOfBirth?.toISOString() || null,
      };
      setLoading(true);
      await updateAccount(editedData);
      updateUser(editedData);
      setEdit(false);
      setShowSuccessModal(true);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onCloseModal = () => {
    setShowSuccessModal(false);
  };

  return {
    name,
    email,
    number,
    dateOfBirth,
    edit,
    loading,
    showSuccessModal,
    setName,
    setEmail,
    setNumber,
    setDateOfBirth,
    toEdit,
    addChanges,
    onCloseModal,
  };
};
