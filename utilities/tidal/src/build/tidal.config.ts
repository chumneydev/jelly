import fs from "fs";
import path from "path";

const guidesDir = path.resolve(__dirname, "../guides");
const guideFiles = fs.readdirSync(guidesDir);

const guides = guideFiles.map((file) => {
	const guide = require(path.join(guidesDir, file));
	return guide.default;
});

export default guides;
