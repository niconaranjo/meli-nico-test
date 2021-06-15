module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': [1, { code: 80 }, { ignoreUrls: true }],
    'react/destructuring-assignment': ['off'],
    'react/forbid-prop-types': ['off'],
  },
};
