import React from "react";
type ModalState = {
    portalRef: any;
    isLargeModal?: boolean;
};
export declare const ModalContext: React.Context<ModalState>;
export type ModalProps = {
    isLargeModal?: boolean;
    handleClose: () => void;
    open?: boolean;
    children?: React.ReactNode;
};
type ModalChildProps = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};
type ModalHeaderProps = {
    handleClose: () => void;
    children?: React.ReactNode;
};
type ModalType = React.FC<ModalProps> & {
    Body: React.FC<ModalChildProps>;
    Header: React.FC<ModalHeaderProps>;
    Footer: React.FC<ModalChildProps>;
    Content: React.FC<ModalChildProps>;
};
declare const Modal: ModalType;
export default Modal;
