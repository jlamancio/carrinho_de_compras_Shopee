// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // Configura variáveis globais do ambiente Node.js
        // Se você usar APIs de navegador em algum arquivo, pode descomentar a linha abaixo:
        // ...globals.browser,
      },
    },
    plugins: {
      js, // Habilita o plugin JavaScript do ESLint
    },
    extends: [
      js.configs.recommended, // Usa as regras recomendadas do ESLint para JavaScript
    ],
    rules: {
      "semi": ["error", "always"], // Exige ponto e vírgula
      "indent": ["error", 4, { "SwitchCase": 1 }], // Indentação de 4 espaços
      // "quotes": ["error", "single"], // Exemplo: exige aspas simples
      // "no-console": "warn", // Exemplo: avisa sobre console.log
    },
  },
]);