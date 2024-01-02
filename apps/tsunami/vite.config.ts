import { defineConfig } from "vite";
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
				"@defaults": path.resolve(__dirname, "./src/defaults"),
				"@stores": path.resolve(__dirname, "./src/stores"),
				"@styles": path.resolve(__dirname, "./src/styles"),
				"~types": path.resolve(__dirname, "./src/types"),
				"~utils": path.resolve(__dirname, "./src/utils"),
			},
		},
		plugins: [],
	};
});
