module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-prettier"],
    plugins: ["stylelint-order"],
    rules: {
        "declaration-property-value-disallowed-list": {
            // Avoid setting scroll as it sets scrollbars on Linux and
            // Windows even if there is nothing to scroll.
            overflow: "scroll",
        },
        // Enforce breakpoints. These values are taken from Bootstrap 5.
        "media-feature-name-value-allowed-list": {
            "min-width": ["576px", "768px", "992px", "1200px"],
            "max-width": ["575px", "767px", "991px", "1199px"],
        },
        "no-descending-specificity": null,
        "property-no-unknown": [
            true,
            {
                ignoreProperties: ["composes"],
            },
        ],
        "selector-class-pattern": [
            "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$",
            {
                message: "Expected class selector to be camelCase",
            },
        ],
        "value-keyword-case": [
            "lower",
            {
                ignoreProperties: "composes",
                camelCaseSvgKeywords: true,
            },
        ],
        "value-no-vendor-prefix": [
            true,
            {
                ignoreValues: "box",
            },
        ],
        "property-disallowed-list": [
            // Ensure margins only go in one way. This avoids incompatibilities
            // between components
            "margin-bottom",
            "margin-left",
        ],
        // Distance should use `rem` as they allow accessibility features
        "unit-disallowed-list": [
            ["em", "px", "cm"],
            {
                ignoreMediaFeatureNames: {
                    px: ["min-width", "max-width"],
                },
            },
        ],
        "declaration-no-important": true,
        // Ensure no id is used as a selector
        "selector-max-id": 0,
        // Ensure custom properties come first
        "order/order": ["custom-properties", "declarations"],
    },
};
