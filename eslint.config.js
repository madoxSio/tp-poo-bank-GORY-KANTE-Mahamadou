
export default [
  {
    ...eslint.configs.recommended, // Utilise la configuration recommandée d'ESLint
    ...eslint.plugins.react.configs.recommended, // Utilise la configuration recommandée pour React
    rules: {
      "no-unused-vars": "warn", // Ta règle personnalisée
    }
  }
];
