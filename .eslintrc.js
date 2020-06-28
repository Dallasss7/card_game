module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {}
};
