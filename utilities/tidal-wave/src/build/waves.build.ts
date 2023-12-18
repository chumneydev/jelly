import components from "~build/waves.config";
import buildComponents from "~lib/tasks/buildComponents";

const commands: { [key: string]: () => any } = {
	"--components": () => buildComponents(components),
};

const args = process.argv.slice(2);
const command = commands[args[0]];

if (command) {
	command();
} else {
	console.log("No command specified");
}
