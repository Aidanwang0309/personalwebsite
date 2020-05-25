module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings:{
    'import/resolver': {
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', 'src/'],
        },
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 0,
    'import/extensions': 'off',
  },
  
  env: {
    jest: true,
    browser: true,
    node: true,
  },
}
