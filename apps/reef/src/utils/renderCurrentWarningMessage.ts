import { Warning } from "~types/warning";

const renderCurrentWarningMessage = (warning: Warning) => {
	const checkResult = warning.check();
	if (typeof warning.message === "function" && typeof checkResult === "string") {
		return warning.message(checkResult);
	}
	return warning.message;
};

export default renderCurrentWarningMessage;
