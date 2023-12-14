import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: ["node_modules"],
			},
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
				preflight: path.resolve(__dirname, "src/scss/jelly-preflight.scss"),
				components: path.resolve(__dirname, "src/scss/jelly-components.scss"),
				utilities: path.resolve(__dirname, "src/scss/jelly-utilities.scss"),
			},
			output: {
				entryFileNames: "js/[name].js",
				chunkFileNames: "js/[name].js",
				assetFileNames: (assetInfo) => {
					if (assetInfo.name?.endsWith(".css")) {
						return "css/[name].css";
					}

					// If it ends with .js, it's a chunk and dont build it
					if (assetInfo.name?.endsWith(".js")) {
						return "";
					}

					return "[name][extname]";
				},
			},
		},
	},
});
