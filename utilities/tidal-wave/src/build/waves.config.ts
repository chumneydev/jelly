import fs from "fs";
import path from "path";

const componentsDir = path.resolve(__dirname, "../components");
const componentFiles = fs.readdirSync(componentsDir);

const components = componentFiles
	.filter((file) => file.endsWith(".ts") || file.endsWith(".js"))
	.map((file) => {
		const component = require(path.join(componentsDir, file));
		return component.default;
	});

export default components;
