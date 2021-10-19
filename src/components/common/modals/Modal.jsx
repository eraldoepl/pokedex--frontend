import { Fragment } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const Modal = ({ children: modalChildren, onHideDetails }) => {
  const Backdrop = () => {
    return <div className="modal__backdrop" onClick={onHideDetails}></div>;
  };

  const ModalOverlay = ({ children }) => {
    return (
      <div className="modal__modalOverlay">
        <div>{children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {createPortal(<Backdrop onHideDetails={onHideDetails} />, portalElement)}
      {createPortal(
        <ModalOverlay>{modalChildren}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
