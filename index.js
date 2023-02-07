module.exports = {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-html/svelte",
    "stylelint-config-clean-order",
    "stylelint-config-prettier-scss"
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
