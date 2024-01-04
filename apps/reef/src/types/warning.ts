export interface Warning {
	id: string;
	check: () => boolean;
	message: string;
	solution: string;
}
