import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState(null);
  const value = {
    open: (options) => {
      setModalOptions(options);
    },
    close: () => {
      setModalOptions(null);
    },
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal
          content={modalOptions.content}
          handleClickModalDelete={modalOptions.handleClickModalDelete}
        />
      )}
    </ModalContext.Provider>
  );
}
