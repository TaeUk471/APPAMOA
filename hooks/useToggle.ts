import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  return { isOpen, toggle, close, open };
};

export default useToggle;
