module.exports = {

  "extends": ["loopback", "airbnb/base"],
  "root": true,
  "rules": {
    "consistent-return": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "prefer-destructuring": 0,
    "prefer-promise-reject-errors": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/first": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/no-unescaped-entities": 0,
    "react/no-array-index-key": 0,
    "react/forbid-prop-types": 0,
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/label-has-for": 0
  },
  "env": {
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "plugins": [
    "jest"
  ]

};