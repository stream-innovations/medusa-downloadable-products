import { PropsWithChildren } from "react";
type SideModalProps = PropsWithChildren<{
    close: () => void;
    isVisible: boolean;
}>;
/**
 * Side modal displayed as right drawer on open.
 */
declare function SideModal(props: SideModalProps): import("react/jsx-runtime").JSX.Element;
export default SideModal;
