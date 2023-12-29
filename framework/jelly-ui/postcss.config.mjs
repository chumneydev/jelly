import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import prefixer from "postcss-prefix-selector";

export default {
	plugins: [
		autoprefixer,
		cssnano,
		prefixer({
			prefix: "#jelly",
			transform(prefix, selector, prefixedSelector, filePath, rule) {
				if (filePath.match(/node_modules/)) {
					return selector; // Do not prefix styles imported from node_modules
				}

				const annotation = rule.prev();
				if (annotation?.type === "comment" && annotation.text.trim() === "no-prefix") {
					return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
				}

				// If the selector is :where() or :is(), do not prefix it
				if (selector.match(/^:(root|where|is)/)) {
					return selector;
				}

				return prefixedSelector;
			},
		}),
	],
};
