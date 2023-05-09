import classnames from "classnames";
import { useState } from "react";
import styles from "./App.module.css";
import { BadgeDemo } from "./components/Badge";
import { ButtonDemo } from "./components/Button";
import { TagDemo } from "./components/Tag";
import "./styles/constants.css";
import "./styles/global.css";

const components = ["button", "tag", "badge"] as const;
type Component = typeof components[number];

interface ComponentChoice {
    value: Component;
    label: string;
}

const componentChoices: ComponentChoice[] = [
    {
        value: "button",
        label: "Button",
    },
    {
        value: "tag",
        label: "Tag",
    },
    {
        value: "badge",
        label: "Badge",
    },
];

const ComponentDemo = ({ component }: { component: Component | null }) => {
    if (!component) return null;
    switch (component) {
        case "button":
            return <ButtonDemo />;
        case "tag":
            return <TagDemo />;
        case "badge":
            return <BadgeDemo />;
    }
};

const App = () => {
    const [component, setComponent] = useState<Component | null>(null);
    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                <h2>Components</h2>
                <ul className={styles.componentList}>
                    {componentChoices.map((componentChoice) => (
                        <li
                            key={componentChoice.value}
                            className={styles.componentElement}
                            onClick={() => {
                                setComponent(componentChoice.value);
                            }}
                        >
                            <button
                                className={classnames(styles.componentButton, {
                                    [styles.selected]:
                                        componentChoice.value === component,
                                })}
                            >
                                {componentChoice.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.demoArea}>
                <ComponentDemo component={component} />
            </div>
        </div>
    );
};

export default App;
