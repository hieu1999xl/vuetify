module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                printWidth: 200,
                tabWidth: 4,
                useTabs: false,
                semi: false,
                singleQuote: true,
                quoteProps: 'as-needed',
                jsxSingleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true,
                arrowParens: 'avoid',
                proseWrap: 'preserve',
                htmlWhitespaceSensitivity: 'strict',
                vueIndentScriptAndStyle: true,
                endOfLine: 'lf',
            },
        ],
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
        {
            files: ['**.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
}
