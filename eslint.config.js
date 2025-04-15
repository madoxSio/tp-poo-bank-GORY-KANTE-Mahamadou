// eslint.config.js
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
      
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      node: true,
      es2020: true,
    },
  };
  