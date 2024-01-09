import chalk from "chalk";

const getColor = (color: string) => {
	switch (color) {
		case "red":
			return chalk.red;
		case "green":
			return chalk.green;
		case "magenta":
			return chalk.magenta;
		case "yellow":
			return chalk.yellow;
		case "blue":
			return chalk.blue;
		default:
			return chalk.white;
	}
};

export default getColor;
