import { Warning } from "~types/warning";

import Divider from "@components/Common/Divider";
import SolutionMessage from "@components/Warnings/CurrentWarning/SolutionMessage";
import WarningMessage from "@components/Warnings/CurrentWarning/WarningMessage";

interface CurrentWarningProps {
	warning: Warning;
}

const renderCurrentWarningMessage = (warning: Warning) => {
	const checkResult = warning.check();
	if (typeof warning.message === "function" && typeof checkResult === "string") {
		return warning.message(checkResult);
	}
	return warning.message;
};

const CurrentWarning = ({ warning }: CurrentWarningProps) => {
	const message = renderCurrentWarningMessage(warning);

	return (
		<div class="relative flex w-full *:rounded-md">
			<div class="z-10 flex h-full w-full -translate-x-1 -translate-y-1 flex-col items-start gap-4 border-2  border-black bg-rose-500 px-4 py-4">
				<WarningMessage message={message} />
				<Divider height="sm" width="full" color="rose" orientation="vertical" />
				<SolutionMessage solution={warning.solution} />
			</div>
			<div class="absolute inset-0 bg-black"></div>
		</div>
	);
};
export default CurrentWarning;
