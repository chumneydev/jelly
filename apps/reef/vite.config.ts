import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const isProductionMode = mode === "production";
	const baseUrl = isProductionMode ? "" : "/";

	return {
		base: baseUrl,
		resolve: {
			alias: {
				"@assets": path.resolve(__dirname, "./src/assets"),
				"@components": path.resolve(__dirname, "./src/components"),
				"@defaults": path.resolve(__dirname, "./src/defaults"),
				"@stores": path.resolve(__dirname, "./src/stores"),
				"@styles": path.resolve(__dirname, "./src/styles"),
				"@context": path.resolve(__dirname, "./src/context"),
				"~types": path.resolve(__dirname, "./src/types"),
				"~hooks": path.resolve(__dirname, "./src/hooks"),
				"~utils": path.resolve(__dirname, "./src/utils"),
			},
		},
		plugins: [preact()],
	};
});
