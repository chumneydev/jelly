import guides from "~build/tidal.config";
import buildGuides from "~lib/tasks/buildGuides";

const commands: { [key: string]: () => any } = {
	"--guides": () => buildGuides(guides),
};

const args = process.argv.slice(2);
const command = commands[args[0]];

if (command) {
	command();
} else {
	console.log("No command specified");
}
