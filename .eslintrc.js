module.exports = {
  root: true,
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    camelcase: 'off',
    'default-case': 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'eol-last': 'off',
    'arrow-body-style': 'off',
    'prettier/prettier': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'warn',
    // 'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/no-array-index-key': 'off',
    'react/self-closing-comp': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-plusplus': 'off',
    'no-alert': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.tsx'] }],
    'react/jsx-pascal-case': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
