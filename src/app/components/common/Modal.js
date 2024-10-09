import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const disableBodyScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = "";
    };

    if (isOpen) {
      disableBodyScroll();
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed max-h-screen overflow-clip inset-0 z-50  bg-black w-full m-auto h-full  bg-opacity-90 flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative   rounded-lg shadow-lg p-4"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
