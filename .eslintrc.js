module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
    // 'plugin:react/recommended',
  ],
  globals: {
    React: 'writable',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [ 'react' ],
  rules: {
    'react/jsx-uses-react': [1],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 1,
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'no-unused-vars': 1,
    'max-len': 1,
    // 'quotes': [1, 'single', {"avoidEscape": true}],
    'quotes': [1, 'single', {allowTemplateLiterals: true}],

    // セミコロン省略
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  }
}
