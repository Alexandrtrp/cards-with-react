import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

const modalRoot: HTMLElement | null = document.getElementById("modal");

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = (props: ModalProps): ReactElement => {
  const { children } = props;
  return ReactDOM.createPortal(<>{children}</>, modalRoot!);
};
