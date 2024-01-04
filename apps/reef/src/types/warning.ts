type CheckFunction = (() => boolean) | (() => string | false);

export interface Warning {
	id: string;
	check: CheckFunction;
	message: string | ((invalidClass: string) => string);
	solution: string;
}
