import { useState } from "react";

export const useShowWarning = () => {
  const [showWarning, setShowWarning] = useState(true);

  const handleStart = () => {
    setShowWarning(false);
  };

  return { showWarning, handleStart };
};
