/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
  extends: ["@commitlint/config-conventional"],
  // add your own scope here if needed
  // "scope-enum": [2, "always", ["components", "pages", "utils"]],
  "scope-case": [2, "always", "kebab-case"],
};

module.exports = CommitLintConfiguration;
