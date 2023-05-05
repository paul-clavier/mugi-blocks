import styles from "../../App.module.css";
import { BulbIcon, CalendarIcon } from "../../icons";
import Tag from "./Tag";

export { default as Tag, type TagProps } from "./Tag";
export const TagDemo = () => (
    <>
        <h1>Tag</h1>
        <section className={styles.columnSection}>
            <section className={styles.section}>
                <h2>Squared</h2>
                <Tag>Property</Tag>
                <Tag icon={<BulbIcon />}>Option</Tag>
                <Tag icon={<CalendarIcon />} />
                <h4>Colors</h4>
                <Tag color="success">Success</Tag>
                <Tag color="success" icon={<BulbIcon />}>
                    Success
                </Tag>
                <Tag color="warning">Warning</Tag>
                <Tag color="warning" icon={<BulbIcon />}>
                    Warning
                </Tag>
                <Tag color="danger">Danger</Tag>
                <Tag color="danger" icon={<BulbIcon />}>
                    Danger
                </Tag>
            </section>
            <section className={styles.section}>
                <h2>Rounded</h2>
                <Tag type="round">Property</Tag>
                <Tag type="round" icon={<BulbIcon />}>
                    Option
                </Tag>
                <Tag type="round" icon={<CalendarIcon />} />
                <h4>Colors</h4>
                <Tag type="round" color="success">
                    Success
                </Tag>
                <Tag type="round" color="success" icon={<BulbIcon />}>
                    Success
                </Tag>
                <Tag type="round" color="warning">
                    Warning
                </Tag>
                <Tag type="round" color="warning" icon={<BulbIcon />}>
                    Warning
                </Tag>
                <Tag type="round" color="danger">
                    Danger
                </Tag>
                <Tag type="round" color="danger" icon={<BulbIcon />}>
                    Danger
                </Tag>
            </section>
        </section>
    </>
);
