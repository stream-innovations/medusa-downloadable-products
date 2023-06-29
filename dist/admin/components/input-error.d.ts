type InputErrorProps = {
    errors?: {
        [x: string]: unknown;
    };
    name?: string;
    className?: string;
};
declare const InputError: ({ errors, name, className }: InputErrorProps) => import("react/jsx-runtime").JSX.Element;
export default InputError;
