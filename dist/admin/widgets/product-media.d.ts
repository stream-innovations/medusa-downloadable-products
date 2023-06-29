import { WidgetConfig, WidgetProps } from "@medusajs/admin";
import { Product } from "@medusajs/medusa";
type InjectedProps = WidgetProps & {
    product: Product;
};
declare const ProductMediaEditor: (props: InjectedProps) => import("react/jsx-runtime").JSX.Element;
export declare const config: WidgetConfig;
export default ProductMediaEditor;
