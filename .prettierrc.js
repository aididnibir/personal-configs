module.exports = {
    printWidth: 100,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    arrowParens: "always",
    overrides: [
        {
            files: '*.{js,jsx,tsx,ts,scss,json,html}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
