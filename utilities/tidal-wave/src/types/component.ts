export interface Component {
	className: string;
	base: Record<string, string>;
	hover?: Record<string, string>;
}

export interface ComponentGroup {
	name: string;
	description: string;
	components: Component[];
}
