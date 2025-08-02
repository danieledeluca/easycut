/** @type {import('prettier').Config} */
export default {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    overrides: [
        {
            files: ["*.json", "*.md"],
            options: {
                printWidth: 80,
                singleQuote: false,
                tabWidth: 2,
                trailingComma: "none",
            },
        },
    ],
    plugins: ["prettier-plugin-packagejson"],
};
