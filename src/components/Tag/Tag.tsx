import classnames from "classnames";
import { ReactElement, ReactNode } from "react";
import styles from "./Tag.module.css";

export interface TagProps {
    className?: string;
    type?: "square" | "round";
    color?: "primary" | "success" | "warning" | "danger";
    icon?: ReactElement | null;
    children?: ReactNode;
}

const Tag = ({
    className,
    type = "square",
    color = "primary",
    icon,
    children,
}: TagProps) => {
    return (
        <div
            className={classnames(
                className,
                styles[type],
                styles[color],
                styles.tag,
                {
                    [styles.iconOnly]: icon && !children,
                },
            )}
        >
            {icon}
            {children ? <small>{children}</small> : null}
        </div>
    );
};

export default Tag;
