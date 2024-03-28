import { createContext, useContext, useState } from "react";

export type DialogContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Components must be used within a <Dialog/>");
  }
  return context;
};


export default function useDialog () {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    open,
    close
  }
}
