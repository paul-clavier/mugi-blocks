import styles from "../../App.module.css";
import { BulbIcon, CalendarIcon } from "../../icons";
import Button from "./Button";

export { default as Button, type ButtonProps } from "./Button";
export const ButtonDemo = () => {
    return (
        <>
            <h1>Button</h1>
            <section className={styles.section}>
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
        </>
    );
};
