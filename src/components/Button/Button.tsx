import classnames from "classnames";
import { MouseEvent, ReactElement, ReactNode } from "react";
import styles from "./Button.module.css";

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

const Button = ({
    className,
    type = "primary",
    disabled = false,
    loading = false,
    onClick = () => {
        /* no-op */
    },
    submit = false,
    tabIndex = undefined,
    ariaLabel = undefined,
    ariaCurrent,
    icon = null,
    children,
}: ButtonProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) return;
        if (!submit) event.preventDefault();
        onClick();
    };

    return (
        <button
            type={submit ? "submit" : "button"}
            disabled={disabled || loading}
            onClick={handleClick}
            className={classnames(className, styles[type], styles.button, {
                [styles.iconOnly]: icon && !children,
            })}
            tabIndex={tabIndex}
            aria-label={ariaLabel}
            aria-current={ariaCurrent}
        >
            {icon}
            {children}
        </button>
    );
};

export default Button;
