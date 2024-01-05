import { useEffect } from "preact/hooks";
import "@styles/app.css";

import useWarningStore from "@stores/warningStore";

import Toolbar from "@components/Toolbar";
import WarningDrawer from "@components/Warnings/WarningDrawer";

export function App() {
	const { checkWarnings, foundWarnings } = useWarningStore();
	useEffect(() => {
		checkWarnings();
	}, []);

	return (
		<>
			<WarningDrawer currentWarning={foundWarnings[0]} />
			<Toolbar></Toolbar>
		</>
	);
}
