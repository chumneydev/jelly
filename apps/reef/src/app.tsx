import { useEffect } from "preact/hooks";
import "@styles/app.css";
import useWarningStore from "@stores/warningStore";
import WarningButton from "@components/Warnings/WarningButton";
import ListDrawer from "@components/ListDrawer";
import Toolbar from "@components/Toolbar";

export function App() {
	const { checkWarnings } = useWarningStore();
	useEffect(() => {
		checkWarnings();
	}, []);

	return (
		<>
			<Toolbar></Toolbar>
		</>
	);
}
