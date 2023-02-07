module.exports = {
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-recommended-scss",
        "stylelint-config-html/svelte",
        "stylelint-config-clean-order",
        "stylelint-config-prettier"
    ],
    "rules": {
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["global"]
            }
        ]
    }
}
