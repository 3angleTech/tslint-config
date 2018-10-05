const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('codelyzer')), './'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(path.dirname(require.resolve('tslint-sonarts')), 'lib/rules'),
  ],
  rules: {
    "arrow-return-shorthand": true,
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "deprecation": {
      "severity": "warn"
    },
    "eofline": true,
    "forin": true,
    "import-blacklist": [
      true,
      "rxjs/Rx"
    ],
    "import-spacing": true,
    "indent": [
      true,
      "spaces"
    ],
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [
      true,
      {
        "limit": 140,
        "ignore-pattern": "^import { .+ }|^export { .+ }"
      }
    ],
    "member-access": true,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": false,
    "no-misused-new": true,
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "ordered-imports": [
      true,
      {
        "grouped-imports": false, // TODO: Enable once VSCode has proper support for fixing this.
        "import-sources-order": "case-insensitive",
        "module-source-path": "full",
        "named-imports-order": "case-insensitive"
      }
    ],
    "prefer-const": true,
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    // TODO: Decide if arrow functions and variable declaration should have the same requirements.
    "typedef": [
      true,
      "call-signature",
      "member-variable-declaration",
      "parameter",
      "property-declaration"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "unified-signatures": true,
    "variable-name": false,
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    "no-output-on-prefix": true,
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
    /**
     * Rules from tslint-microsoft-contrib
     *
     * Common Bugs and Correctness. The following rules should be turned on because they find
     * common bug patterns in the code or enforce type safety.
     */
    "no-constant-condition": true,
    "no-control-regex": true,
    "no-invalid-regexp": true,
    "no-jquery-raw-elements": true,
    "no-regex-spaces": true,
    "no-sparse-arrays": true,
    "no-unnecessary-bind": true,
    "no-unnecessary-override": true,
    "no-with-statement": true,
    "promise-must-complete": true,
    "react-this-binding-issue": true,
    "react-unused-props-and-state": true,
    "use-named-parameter": true,
    "no-duplicate-switch-case": true,
    "no-implicit-dependencies": [
      true,
      // Allow imports from path aliases defined in "tsconfig.json".
      [
        "app-shared",
        "app-shell"
      ]
    ],
    "no-invalid-template-strings": true,
    "no-object-literal-type-assertion": true,
    "no-parameter-reassignment": true,
    "no-reference-import": true,
    // TODO: Review rule and enable or remove once the project grows in size.
    // "no-submodule-imports": true,
    "no-unnecessary-callback-wrapper": true,
    /**
     * Rules from tslint-microsoft-contrib
     *
     * Code Clarity. The following rules should be turned on because they make the code
     * generally more clear to the reader.
     */
    "max-func-body-length": [
      true,
      30,
      {
        "ignore-parameters-to-function-regex": "describe"
      }
    ],
    "chai-prefer-contains-to-index-of": true,
    "chai-vague-errors": true,
    "function-name": [
      true,
      {
        "method-regex": "^[a-z][\\w\\d]+$",
        "private-method-regex": "^[a-z][\\w\\d]+$",
        "protected-method-regex": "^[a-z][\\w\\d]+$",
        "static-method-regex": "^([A-Z_\\d]+|forRoot|forChild)$",
        "function-regex": "^_?[a-z][\\w\\d]+$"
      }
    ],
    "import-name": true,
    "mocha-unneeded-done": true,
    "no-for-in": true,
    "no-function-expression": true,
    "no-multiline-string": true,
    "no-typeof-undefined": true,
    "no-unnecessary-field-initialization": true,
    "no-unnecessary-local-variable": true,
    "no-unsupported-browser-code": true,
    "underscore-consistent-invocation": true,
    "arrow-parens": false,
    "no-duplicate-imports": true,
    "no-redundant-jsdoc": true,
    "no-return-await": true,
    "no-this-assignment": true,
    "no-useless-files": true,
    "number-literal-format": true,
    "prefer-object-spread": true,
    "prefer-template": true,
    "type-literal-delimiter": true,
    /**
     * Rules from tslint-sonarts
     */
    "parameters-max-number": [
      true,
      3
    ],
    "no-commented-code": true,
    "no-dead-store": true,
    "no-duplicate-string": true,
    "no-gratuitous-expressions": true,
    "no-identical-conditions": true,
    "no-identical-functions": [
      true,
      7
    ],
    "no-inconsistent-return": true,
    "no-redundant-parentheses": true,
    "no-return-type-any": true,
    "no-self-assignment": true,
    "no-useless-cast": true,
    "no-variable-usage-before-declaration": true,
    "prefer-immediate-return": true,
    "prefer-promise-shorthand": true,
    "use-primitive-type": true,
    "use-type-alias": true
  },
};