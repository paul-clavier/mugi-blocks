import classnames from "classnames";
import { ReactElement, ReactNode, useRef } from "react";
import { CloseIcon } from "../../icons";
import styles from "./Tag.module.css";

export interface TagProps {
    className?: string;
    type?: "square" | "round";
    color?: "primary" | "success" | "warning" | "danger";
    deletable?: boolean;
    icon?: ReactElement | null;
    children?: ReactNode;
}

const Tag = ({
    className,
    type = "square",
    color = "primary",
    deletable = false,
    icon,
    children,
}: TagProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    return (
        <div
            ref={ref}
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
            {deletable ? (
                <CloseIcon
                    onClick={() => {
                        ref.current?.remove();
                    }}
                />
            ) : null}
        </div>
    );
};

export default Tag;
