export default [
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'no-unused-vars': 'warn',
            'no-console': 'warn',
        },
        ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**']
    }
];
