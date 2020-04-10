module.exports = {
  extends: ['airbnb/base', 'plugin:jest/recommended', 'plugin:react/recommended',],
  root: true,
  rules: {
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true }
    }],
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 'warn',
    'no-confusing-arrow': 0,
    'no-unused-expressions': 'warn',
    'prefer-destructuring': ['warn', {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: false,
        object: false
      }
    }],
    'prefer-promise-reject-errors': 'warn',
    'class-methods-use-this': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/first': 'warn',
    'import/no-unresolved': 'warn',
    'import/extensions': 'warn',
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: false,
        ClassDeclaration: false,
        ArrowFunctionExpression: false,
        FunctionExpression: false
      }
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
    browser: true
  },
  plugins: [
    'jest',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect'
    },
  },
};
