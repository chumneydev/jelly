import { FrameworkUrl } from "~types/framework";

const createJsFile = (file: FrameworkUrl) => {
	const script = document.createElement("script");
	script.src = file.url;
	document.body.appendChild(script);

	return script;
};

export default createJsFile;
