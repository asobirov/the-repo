/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    "@tr/eslint-config/base",
    "@tr/eslint-config/nextjs",
    "@tr/eslint-config/react",
  ],
};

module.exports = config;
