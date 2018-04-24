module.exports = {
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'env': {
    'es6': true,
  },
  'plugins': [
    'react',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true,
    },
  },
  'rules': {
    'no-invalid-this': 0,
    'max-len': 0,
    'new-cap': 0,
    'require-jsdoc': 0,
    'comma-dangle': 0,
    'react/jsx-uses-vars': 1,
    'react/display-name': 1,
    'react/prop-types': 0,
    'no-console': 1,
    'no-unexpected-multiline': 'warn'
  },
};
