const isInDevelopment = () => {
	const environment = window.location.href;
	return environment.includes("localhost") || environment.includes("file://");
};

export default isInDevelopment;
