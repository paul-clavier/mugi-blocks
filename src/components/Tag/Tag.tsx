import classnames from "classnames";
import { ReactElement, ReactNode } from "react";
import styles from "./Tag.module.css";

interface TagProps {
    className?: string;
    type?: "square" | "round";
    icon?: ReactElement | null;
    children: ReactNode;
}

const Tag = ({ className, type = "square", icon, children }: TagProps) => {
    return (
        <div
            className={classnames(className, styles[type], styles.tag, {
                [styles.iconOnly]: icon && !children,
            })}
        >
            {icon}
            {children ? <small>{children}</small> : null}
        </div>
    );
};

export default Tag;
