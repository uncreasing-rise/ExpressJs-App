import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Specifies that you're using CommonJS modules
      globals: { ...globals.node, ...globals.browser }, // Include both Node.js and browser globals
    },
    plugins: {
      "eslint-plugin-js": pluginJs,
    },
    rules: {
      // Add custom rules here
    },
  },
  pluginJs.configs.recommended,
];
