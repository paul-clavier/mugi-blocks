import classnames from "classnames";
import styles from "./${NAME}.module.css";

interface ${NAME}Props {
    className?: string;
}

const $NAME = ({ className }: ${NAME}Props) => {
    return (
        <div className={classnames(className, styles.root)}>
            Component
        </div>
    );
};

export default $NAME;
