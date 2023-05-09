import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Badge.module.css";

export interface BadgeProps {
    className?: string;
    children?: ReactNode;
    type?: "primary" | "secondary" | "danger";
    number: number;
    maxNumber?: number;
}

const Badge = ({
    className,
    children,
    type = "primary",
    number,
    maxNumber = 99,
}: BadgeProps) => {
    let displayedNumber = number.toString();
    if (number > maxNumber) {
        displayedNumber = `${maxNumber}+`;
    }
    return (
        <div className={styles.root}>
            <span className={classnames(className, styles.badge, styles[type])}>
                {displayedNumber}
            </span>
            {children}
        </div>
    );
};

export default Badge;
