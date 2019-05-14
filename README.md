A set of reuseable eslint linting rules used by Clause.io. Feel free to use these for your own projects.

## Usage

Install this package and it's peer dependencies
```
yarn add -D @clausehq/eslint-config
yarn add -D eslint eslint-config-airbnb eslint-config-loopback eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks
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

For React apps, use the following config:
```
{
  "extends": ["@clausehq/eslint-config"],
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "detect"
    }
  }
}
```

Optionally add a file called `.eslintignore`, here are some suggested contents
```
coverage
node_modules
```
