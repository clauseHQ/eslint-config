A set of reuseable linting rules for Clause Node.js repositories

## Usage

Install this package and it's peer dependencies
```
yarn add -D @clausehq/eslint-config
yarn add -D eslint eslint-config-airbnb eslint-config-loopback eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react
```

Create a file in the root of your repo called `.eslintrc` with the contents
```
{
  "extends": ["@clausehq/eslint-config"]
}
```

Optionally add a file called `.eslintignore`, here are some suggested contents
```
coverage
node_modules
```
