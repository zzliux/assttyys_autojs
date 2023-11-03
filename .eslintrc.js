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
        'no-var': 'error',
        'spaced-comment': ['error', 'always'], // 注释符号后要有一个空格
        'arrow-spacing': "error", // 箭头函数的箭头前后必须要有空格
        'comma-spacing': ["error", { "before": false, "after": true }], // 逗号前不能有空格，逗号后必须有空格
        'func-call-spacing': ["error", "never"], // 调用函数时的函数名和左括号中不能有间隔
        'implicit-arrow-linebreak': ["error", "beside"], // 箭头函数右的括号不能护行
        indent: ['error', 'tab'], // 缩进使用tab符号
        'key-spacing': ['error', {
            beforeColon: false, // 冒号前不能有空格
            afterColon: true, // 冒号有1个空格
        }],
        'keyword-spacing': 'error', // if else if 之类的关键字前后必须有空格
        'no-trailing-spaces': 'error', // 行尾不能有空格
        'object-curly-spacing': ["error", "always"], // 大括号内侧必须有空格
        'semi-spacing': ["error", { "before": false, "after": true }], // 分号前不能有空格，分号后如果有内容必须有空格
        'space-before-blocks': 'error', // 块前后空格

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