// --
// Copyright (C) 2001-2019 OTRS AG, https://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (GPL). If you
// did not receive this file, see https://www.gnu.org/licenses/gpl-3.0.txt.
// --

// nofilter(TidyAll::Plugin::OTRS::JavaScript::ESLint)

/*
 * NOTE: In order for linting to work, you will need following globally installed NPM modules:
 *
 *   npm install -g eslint eslint-plugin-import eslint-config-airbnb-base eslint-plugin-vue babel-eslint eslint-plugin-jest
 *
 */

module.exports = {

    extends: [
        'airbnb-base',
    ],

    rules: {

        /*
         * AirBnB JS rule overriddes.
         */

        // Enforce consistent indentation.
        'indent': [ 'error', 4, { 'SwitchCase': 1 } ],

        // Allow unnecessarily quoted properties.
        'quote-props': 'off',

        // Allow dangling underscores to indicate private methods (like _internalMethod()).
        'no-underscore-dangle': 'off',

        // Enforce a maximum line length.
        'max-len': [ 'error', { 'code': 120 } ],

        // Don't try to resolve the dependencies.
        'import/no-unresolved': 'off',

        // Allow for missing file extensions in import statements.
        'import/extensions': 'off',

        // Require a space before function parenthesis.
        'space-before-function-paren': [ 'error', 'always' ],

        // Require "Stroustrup" brace style.
        'brace-style': [ 'error', 'stroustrup' ],

        // Enforce spaces inside of brackets.
        'array-bracket-spacing': [ 'error', 'always' ],

        // Do not enforce that class methods utilize this.
        'class-methods-use-this': 'off',

        // Allow the unary operators ++ and --.
        'no-plusplus': 'off',

        // Allow Reassignment of Function Parameters.
        'no-param-reassign': 'off',

        // Allow strict mode directives.
        'strict': 'off',

        // Allow the use of dev dependencies.
        'import/no-extraneous-dependencies': [ 'error', { 'devDependencies': true } ],

        // Allow callbacks of array's methods without returns.
        'array-callback-return': 'off',

        // Require braces in arrow function body.
        'arrow-body-style': [ 'error', 'always' ],

        // Allow require() anywhere in the code.
        'global-require': 'off',

        // Allow the use of console.
        'no-console': 'off',

        // Do not require destructuring from arrays and objects.
        'prefer-destructuring': [ 'error', { 'array': false, 'object': false } ],

        // Enforce consistent line breaks inside function parentheses.
        'function-paren-newline': [ 'error', 'consistent' ],

        // Required (functions: never) since preprocessors are not handled by babel.
        //  See also: https://eslint.org/docs/rules/comma-dangle
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }],
    },
};
