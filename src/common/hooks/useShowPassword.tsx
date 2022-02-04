import { useState } from 'react';

export const usePasswordVisibility = () => {
  const [isPasswordShown, setShowPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!isPasswordShown);

  return { handlePasswordShow, isPasswordShown };
};
