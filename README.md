A set of reuseable linting rules for Clause Node.js repositories

## Usage

Install this package and it's peer dependencies
```
yarn add -D @clausehq/eslint-config
yarn add -D eslint eslint-config-airbnb eslint-config-loopback eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-promise
```

Create a file in the root of your repo called `.eslintrc` with the contents
```
{
  "extends": ["@clausehq/eslint-config"]
}
```

Although for serverless functions, where logs are aggregated directly from CloudWatch, you may want this config:
```
{
  "extends": ["@clausehq/eslint-config"],
  "rules": {
    "no-console": "off"
  }
}
```

Loopback 3 projects may want to add this rule for remote method declaration which by convention breaks this rule:
```
    "no-param-reassign": 0 
```


Optionally add a file called `.eslintignore`, here are some suggested contents
```
coverage
node_modules
```
