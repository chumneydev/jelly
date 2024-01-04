import { Warning } from "~types/warning";

import CurrentWarning from "@components/Warnings/CurrentWarning";

interface WarningListProps {
	warnings: Warning[];
}

const WarningList = ({ warnings }: WarningListProps) => {
	return (
		<>
			{warnings.map((warning) => (
				<CurrentWarning warning={warning} />
			))}
		</>
	);
};
export default WarningList;
