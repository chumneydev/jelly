import { FrameworkUrl } from "~types/framework";

const createCssFile = (file: FrameworkUrl) => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = file.url;
	document.head.appendChild(link);

	return link;
};

export default createCssFile;
