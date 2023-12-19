const camelCase = (str: string): string => {
	return str
		.split(" ")
		.map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()))
		.join("");
};

export default camelCase;
