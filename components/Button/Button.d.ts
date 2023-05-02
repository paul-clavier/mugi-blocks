import { ReactElement, ReactNode } from "react";
export interface ButtonProps {
    className?: string;
    type?: "primary" | "secondary" | "tertiary";
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    submit?: boolean;
    tabIndex?: number;
    ariaLabel?: string | undefined;
    ariaCurrent?: boolean;
    icon?: ReactElement | null;
    children?: ReactNode;
}
declare const Button: ({ className, type, disabled, loading, onClick, submit, tabIndex, ariaLabel, ariaCurrent, icon, children, }: ButtonProps) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map