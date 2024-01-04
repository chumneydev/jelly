import { twMerge } from "tw-merge";
import { clsx, ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export default cn;
