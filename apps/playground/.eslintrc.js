/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@angular-eslint/eslint-plugin",
        "eslint-plugin-import",
        "@angular-eslint/eslint-plugin-template",
        "eslint-plugin-react",
        "@typescript-eslint"
    ],
    "root": true,
    "rules": {
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": "app",
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/contextual-lifecycle": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": "app",
                "style": "camelCase"
            }
        ],
        "@angular-eslint/no-host-metadata-property": "off",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/use-component-view-encapsulation": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@babel/object-curly-spacing": "off",
        "@babel/semi": "off",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/block-spacing": "off",
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/func-call-spacing": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/key-spacing": "off",
        "@typescript-eslint/keyword-spacing": "off",
        "@typescript-eslint/lines-around-comment": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": [
            "off",
            null
        ],
        "@typescript-eslint/space-before-blocks": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/space-infix-ops": "off",
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "off",
        "array-bracket-newline": "off",
        "array-bracket-spacing": "off",
        "array-element-newline": "off",
        "arrow-body-style": "error",
        "arrow-parens": [
            "off",
            "always"
        ],
        "arrow-spacing": "off",
        "babel/object-curly-spacing": "off",
        "babel/quotes": "off",
        "babel/semi": "off",
        "block-spacing": "off",
        "brace-style": [
            "off",
            "off"
        ],
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "computed-property-spacing": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-location": "off",
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "flowtype/boolean-style": "off",
        "flowtype/delimiter-dangle": "off",
        "flowtype/generic-spacing": "off",
        "flowtype/object-type-curly-spacing": "off",
        "flowtype/object-type-delimiter": "off",
        "flowtype/quotes": "off",
        "flowtype/semi": "off",
        "flowtype/space-after-type-colon": "off",
        "flowtype/space-before-generic-bracket": "off",
        "flowtype/space-before-type-colon": "off",
        "flowtype/union-intersection-spacing": "off",
        "func-call-spacing": "off",
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star": "off",
        "generator-star-spacing": "off",
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-match": "off",
        "implicit-arrow-linebreak": "off",
        "import/no-deprecated": "warn",
        "import/order": [
            "error",
            {
                "alphabetize": {
                    "caseInsensitive": true,
                    "order": "asc"
                },
                "newlines-between": "always",
                "groups": [
                    [
                        "builtin",
                        "external",
                        "internal",
                        "unknown",
                        "object",
                        "type"
                    ],
                    "parent",
                    [
                        "sibling",
                        "index"
                    ]
                ],
                "distinctGroup": false,
                "pathGroupsExcludedImportTypes": [],
                "pathGroups": [
                    {
                        "pattern": "./",
                        "patternOptions": {
                            "nocomment": true,
                            "dot": true
                        },
                        "group": "sibling",
                        "position": "before"
                    },
                    {
                        "pattern": ".",
                        "patternOptions": {
                            "nocomment": true,
                            "dot": true
                        },
                        "group": "sibling",
                        "position": "before"
                    },
                    {
                        "pattern": "..",
                        "patternOptions": {
                            "nocomment": true,
                            "dot": true
                        },
                        "group": "parent",
                        "position": "before"
                    },
                    {
                        "pattern": "../",
                        "patternOptions": {
                            "nocomment": true,
                            "dot": true
                        },
                        "group": "parent",
                        "position": "before"
                    }
                ]
            }
        ],
        "indent": "off",
        "indent-legacy": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": "off",
        "max-statements-per-line": "off",
        "multiline-ternary": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-arrow-condition": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-comma-dangle": "off",
        "no-confusing-arrow": "off",
        "no-debugger": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-irregular-whitespace": "off",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-spaces": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "error",
        "no-reserved-keys": "off",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-shadow": "off",
        "no-space-before-semi": "off",
        "no-spaced-func": "off",
        "no-tabs": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "off",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-var": "error",
        "no-whitespace-before-property": "off",
        "no-wrap-func": "off",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "one-var-declaration-per-line": "off",
        "operator-linebreak": "off",
        "padded-blocks": [
            "off",
            {
                "blocks": "never"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],
        "prefer-const": "error",
        "quote-props": "off",
        "quotes": "off",
        "radix": "error",
        "react/jsx-child-element-spacing": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-curly-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-first-prop-new-line": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-newline": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-multi-spaces": "off",
        "react/jsx-space-before-closing": "off",
        "react/jsx-tag-spacing": [
            "off",
            {
                "afterOpening": "allow",
                "closingSlash": "allow"
            }
        ],
        "react/jsx-wrap-multilines": "off",
        "rest-spread-spacing": "off",
        "semi": "off",
        "semi-spacing": "off",
        "semi-style": "off",
        "space-after-function-name": "off",
        "space-after-keywords": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-before-function-parentheses": "off",
        "space-before-keywords": "off",
        "space-in-brackets": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "space-infix-ops": "off",
        "space-return-throw-case": "off",
        "space-unary-ops": "off",
        "space-unary-word-ops": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "standard/array-bracket-even-spacing": "off",
        "standard/computed-property-even-spacing": "off",
        "standard/object-curly-even-spacing": "off",
        "switch-colon-spacing": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicorn/empty-brace-spaces": "off",
        "unicorn/no-nested-ternary": "off",
        "unicorn/number-literal-case": "off",
        "unicorn/template-indent": "off",
        "vue/array-bracket-newline": "off",
        "vue/array-bracket-spacing": "off",
        "vue/array-element-newline": "off",
        "vue/arrow-spacing": "off",
        "vue/block-spacing": "off",
        "vue/block-tag-newline": "off",
        "vue/brace-style": "off",
        "vue/comma-dangle": "off",
        "vue/comma-spacing": "off",
        "vue/comma-style": "off",
        "vue/dot-location": "off",
        "vue/func-call-spacing": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/html-closing-bracket-spacing": "off",
        "vue/html-end-tags": "off",
        "vue/html-indent": "off",
        "vue/html-quotes": "off",
        "vue/html-self-closing": "off",
        "vue/key-spacing": "off",
        "vue/keyword-spacing": "off",
        "vue/max-attributes-per-line": "off",
        "vue/max-len": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/multiline-ternary": "off",
        "vue/mustache-interpolation-spacing": "off",
        "vue/no-extra-parens": "off",
        "vue/no-multi-spaces": "off",
        "vue/no-spaces-around-equal-signs-in-attribute": "off",
        "vue/object-curly-newline": "off",
        "vue/object-curly-spacing": "off",
        "vue/object-property-newline": "off",
        "vue/operator-linebreak": "off",
        "vue/quote-props": "off",
        "vue/script-indent": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/space-in-parens": "off",
        "vue/space-infix-ops": "off",
        "vue/space-unary-ops": "off",
        "vue/template-curly-spacing": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off"
    }
};
