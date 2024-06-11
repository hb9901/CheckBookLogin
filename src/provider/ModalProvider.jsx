import { useState } from "react";
import Modal from "../components/Modal";
import { ModalContext } from "../context/modal.context";

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
