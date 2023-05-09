import styles from "../../Demo.module.css";
import { BulbIcon } from "../../icons";
import { Button } from "../Button";
import { Tag } from "../Tag";
import Badge from "./Badge";

export { default as Badge, type BadgeProps } from "./Badge";

export const BadgeDemo = () => (
    <>
        <h1>Badge</h1>
        <section className={styles.columnSection}>
            <section className={styles.section}>
                <h2>Standalone</h2>
                <Badge number={8} />
                <Badge number={100} />
                <Badge number={100} maxNumber={101} />
                <Badge type="secondary" number={8} />
                <Badge type="secondary" number={100} />
                <Badge type="danger" number={8} />
                <Badge type="danger" number={100} />
            </section>
            <section className={styles.section}>
                <h2>On object</h2>
                <Badge type="primary" number={10}>
                    <Tag>Drafts</Tag>
                </Badge>
                <Badge type="danger" number={10}>
                    <Button icon={<BulbIcon />} />
                </Badge>
                <Badge type="danger" number={10}>
                    <span className={styles.spanWrapper}>Messages</span>
                </Badge>
            </section>
        </section>
    </>
);
