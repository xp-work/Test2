module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react", "prettier"],
	extends: [
		"plugin:react/jsx-runtime",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	rules: {
		"@typescript-eslint/no-unused-vars": ["warn"],
		"@typescript-eslint/no-var-requires": [0],
		"react/display-name": [0],
		"no-console": ["warn"],
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		semi: ["error", "always"],
		quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{ "ts-expect-error": "allow-with-description" },
		],
		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "off",
	},
	settings: {
		react: {
			version: "detect", // React version. "detect" automatically picks the version you have installed.
		},
	},
	ignorePatterns: [
		"**/*.js",
		"**/*.json",
		"node_modules",
		"public",
		"styles",
		".next",
		"coverage",
		"dist",
		"mock",
		".turbo",
	],
};
