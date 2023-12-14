import prefixer from "postcss-prefix-selector";

export default {
	plugins: [
		prefixer({
			prefix: "#jelly",
			transform(prefix, selector, prefixedSelector, filePath, rule) {
				if (filePath.match(/node_modules/)) {
					return selector;
				}

				if (selector.match(/^:(root|where|is)/)) {
					return selector;
				}

				if (selector.startsWith(".")) {
					return `${prefix} ${selector}`;
				}

				return prefixedSelector;
			},
		}),
	],
};
