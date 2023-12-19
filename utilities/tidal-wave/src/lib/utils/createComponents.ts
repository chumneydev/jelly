import { Component } from "~types/component";

// const createComponents = (
// 	classes: Record<string, string>,
// 	baseComponent: Component,
// 	classNamePrefix: string,
// 	classNameTransform: (className: string) => string,
// 	propertyGenerator: (className: string, originalClassName?: string) => { base: Record<string, string>; hover?: Record<string, string> },
// ): Component[] => {
// 	return Object.keys(classes).map((classKey) => {
// 		const className = classNameTransform(classKey);

// 		const properties = propertyGenerator(className);

// 		return {
// 			className: `${classNamePrefix}${className}`,
// 			base: {
// 				...baseComponent.base,
// 				...properties.base,
// 			},
// 			hover: properties.hover,
// 		};
// 	});
// };

const createComponents = (
	classes: Record<string, string>,
	baseComponent: Component,
	classNamePrefix: string,
	classNameTransform: (className: string) => string,
	propertyGenerator: (className: string, originalClassName?: string) => { base: Record<string, string>; hover?: Record<string, string> },
): Component[] => {
	return Object.keys(classes).map((classKey) => {
		const className = classNameTransform(classKey);

		const properties = propertyGenerator(className, classKey);

		return {
			className: `${classNamePrefix}${className}`,
			base: {
				...baseComponent.base,
				...properties.base,
			},
			hover: properties.hover,
		};
	});
};

export default createComponents;
