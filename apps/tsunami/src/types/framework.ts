export type FrameworkCategory = "ui" | "reef" | "components" | "pages";

export type ExtensionType = "css" | "js";

export interface FrameworkUrl {
	name: string;
	type: ExtensionType;
	url: string;
}

export interface Framework {
	name: string;
	category: FrameworkCategory;
	urls: FrameworkUrl[];
}
