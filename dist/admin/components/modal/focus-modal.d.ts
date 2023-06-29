/// <reference types="react" />
export type ReactFCWithChildren<T> = React.FC<React.PropsWithChildren<T>>;
type FocusModalElementProps = {
    className?: string;
    children?: React.ReactNode;
};
type IFocusModal = ReactFCWithChildren<FocusModalElementProps> & {
    Header: ReactFCWithChildren<FocusModalElementProps>;
    Main: ReactFCWithChildren<FocusModalElementProps>;
    BasicFocusModal: ReactFCWithChildren<BasicFocusModalProps>;
};
type BasicFocusModalProps = {
    handleClose: (e: any) => void;
    onSubmit: (e: any) => void;
    cancelText?: string;
    submitText?: string;
    children?: React.ReactNode;
};
declare const FocusModal: IFocusModal;
export default FocusModal;
