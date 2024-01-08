import useUIStore from "@stores/uiStore";
import useWarningStore from "@stores/warningStore";
import { Warning } from "~types/warning";

interface CurrentWarningProps {
	warning: Warning;
}

const CurrentWarning = ({ warning }: CurrentWarningProps) => {
	const { selectWarning } = useWarningStore();
	const { toggleDrawer } = useUIStore();

	const handleToggleDrawer = () => {
		toggleDrawer();
		selectWarning(warning);
	};

	return (
		<button className="rounded-lg border-2 border-black bg-rose-300 px-3 py-2 text-sm" onClick={() => handleToggleDrawer()}>
			{warning.summary}
		</button>
	);
};
export default CurrentWarning;
