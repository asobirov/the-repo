/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    "@the-repo/eslint-config/base",
    "@the-repo/eslint-config/nextjs",
    "@the-repo/eslint-config/react",
  ],
};

module.exports = config;
