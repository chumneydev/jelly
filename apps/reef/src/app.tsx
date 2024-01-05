import { useEffect } from "preact/hooks";
import "@styles/app.css";

import useWarningStore from "@stores/warningStore";

import Toolbar from "@components/Toolbar";
import WarningDrawer from "@components/Warnings/WarningDrawer";
import VisibilityButton from "@components/Toolbar/Buttons/VisibilityButton";
import Divider from "@components/Common/Divider";

export function App() {
	const { checkWarnings, foundWarnings } = useWarningStore();
	useEffect(() => {
		checkWarnings();
	}, []);

	return (
		<>
			<WarningDrawer currentWarning={foundWarnings[0]} />
			<Toolbar>
				<Divider orientation="horizontal" flow="absolute" position="top" className="-top-1 bg-black" />
				<div></div>
				<div>
					{foundWarnings.map((warning) => (
						<div>{warning.message}</div>
					))}
				</div>
				<div className="flex gap-4">
					<VisibilityButton />
				</div>
			</Toolbar>
		</>
	);
}
