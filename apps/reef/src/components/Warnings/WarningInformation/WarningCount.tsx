import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import useWarningStore from "@stores/warningStore";

interface WarningCountProps {}

const WarningCount = ({}: WarningCountProps) => {
	const warningCount = useWarningStore((state) => state.foundWarnings.length);
	return (
		<>
			<ExclamationTriangleIcon className="h-6 w-6" />
			{warningCount} Warning{warningCount > 1 ? "s" : ""}
		</>
	);
};
export default WarningCount;
