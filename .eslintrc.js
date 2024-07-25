module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    // Other rules can be added here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
