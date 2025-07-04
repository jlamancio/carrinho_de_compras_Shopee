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
        ...globals.node,
        // ...globals.browser, // Descomente se seu código também rodar no navegador
      },
    },
    plugins: {
      js,
    },
    extends: [
      js.configs.recommended,
    ],
    rules: {
      // INÍCIO DAS LINHAS ADICIONADAS/REAPROVEITADAS
      "semi": ["error", "always"],                 // Exige ponto e vírgula no final das declarações.
      "indent": ["error", 4, { "SwitchCase": 1 }], // Exige indentação de 4 espaços, com tratamento para SwitchCase.
     
    },
  },
]);