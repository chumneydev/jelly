type CheckFunction = (() => boolean) | (() => string | false);

// Adding summary to the warning object. Summary is just a friendly name for the warning.
export interface Warning {
	id: string;
	summary: string;
	check: CheckFunction;
	message: string | ((invalidClass: string) => string);
	solution: string;
}
