// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:styled-components-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'jsx-a11y',
        'styled-components-a11y',
        'prettier',
        'simple-import-sort',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-require-imports': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        node: true,
    },
};
