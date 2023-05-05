import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Tag } from "./components/Tag";
import { BulbIcon, CalendarIcon } from "./icons";
import "./styles/constants.css";
import "./styles/global.css";

const App = () => {
    return (
        <div className={styles.root}>
            <section className={styles.section}>
                <h2>Button</h2>
                <section className={styles.section}>
                    <h4>Primary button</h4>
                    <Button>Click me</Button>
                    <Button icon={<BulbIcon />}>Click me</Button>
                    <Button icon={<CalendarIcon />} />
                    <Button disabled>Try clicking</Button>
                </section>
                <section className={styles.section}>
                    <h4>Secondary button</h4>
                    <Button type="secondary">Click me</Button>
                </section>
                <section className={styles.section}>
                    <h4>Tertiary button</h4>
                    <Button type="tertiary">Click me</Button>
                </section>
            </section>
            <section className={styles.section}>
                <h2>Tag</h2>
                <section className={styles.section}>
                    <h4>Squared</h4>
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
                    <h4>Rounded</h4>
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
        </div>
    );
};

export default App;
