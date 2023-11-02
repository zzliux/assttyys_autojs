module.exports = {
    // "root": true,
    // "extends": [
    //     "eslint:recommended",
    // "plugin:@typescript-eslint/recommended"
    // ],
    // "parser": "@typescript-eslint/parser",
    // "parserOptions": { "project": ["./tsconfig.json"] },
    // "plugins": [
    //     // "@typescript-eslint"
    // ],
    // "rules": {
    //     "@typescript-eslint/strict-boolean-expressions": [
    //         2,
    //         {
    //             "allowString" : false,
    //             "allowNumber" : false
    //         }
    //     ]
    // },
    // "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
    // parser: '@babel/eslint-parser',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // 添加TypeScript推荐规则
    ],
    parserOptions: {
        project: './tsconfig.json', // 指定tsconfig.json文件
    },
    rules: {
        quotes: ['error', 'single'], // 必须使用单引号
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 忽略名为"_"开头的变量
        '@typescript-eslint/no-explicit-any': 'off', // 允许定义any
        '@typescript-eslint/ban-types': ['error', {
            types: {
                Function: false // 允许使用Function类型
            }
        }],
        '@typescript-eslint/no-this-alias': ['error', {
            allowDestructuring: true, // 允许解构
            allowedNames: ['self'] // 允许名为"self"的别名
        }],
    }
}