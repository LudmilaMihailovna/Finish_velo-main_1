import { useEffect } from "react";
import css from "./modal.module.scss";
export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          X
        </button>
        <div className={css.modalContent}>{children}</div>
      </div>
    </div>
  );
};
