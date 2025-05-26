// eslint.config.js
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';

/** @type  */
export default [
  js.configs.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'playwright': eslintPluginPlaywright,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...eslintPluginPlaywright.configs.recommended.rules,
    },
  },
];
