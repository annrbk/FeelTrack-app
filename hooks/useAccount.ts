import { useState } from "react";
import { useSession } from "../ctx";
import { deleteAccount, updateAccount } from "../services/accountService";

export const useAccount = () => {
  const { user, updateUser, signOut } = useSession();
  const [name, setName] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [isDeleteAccountModalVisible, setDeleteAccountModalVisible] =
    useState(false);

  const toEdit = () => {
    if (edit) {
      setName(user?.name || "");
      setEmail(user?.email || "");
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

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
      signOut();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    name,
    email,
    edit,
    loading,
    showSuccessModal,
    setName,
    setEmail,
    toEdit,
    addChanges,
    onCloseModal,
    handleDeleteAccount,
    isDeleteAccountModalVisible,
    setDeleteAccountModalVisible,
  };
};
