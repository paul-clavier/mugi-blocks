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
                </section>
            </section>
        </div>
    );
};

export default App;
