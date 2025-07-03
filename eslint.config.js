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
      // Exigir ponto e vírgula:
      "semi": ["error", "always"],
      // Para exigir aspas simples:
      // "quotes": ["error", "single"],
      // Para avisar sobre console.log:
      // "no-console": "warn",
      // Para corrigir o erro de 'console.logg' que vimos (que é uma variável não definida):
      'no-undef': 'error', 
    },
  },
]);