import { useEffect } from "preact/hooks";
import "@styles/app.css";

import useWarningStore from "@stores/warningStore";

import Toolbar from "@components/Toolbar";
import WarningDrawer from "@components/Warnings/WarningDrawer";
import VisibilityButton from "@components/Toolbar/Buttons/VisibilityButton";
import Divider from "@components/Common/Divider";
import PeekingJelly from "@components/Common/PeekingJelly";
import WarningInformation from "@components/Warnings/WarningInformation";
import CurrentWarning from "@components/Toolbar/CurrentWarning";

export function App() {
	const { checkWarnings, foundWarnings, selectedWarning } = useWarningStore();
	useEffect(() => {
		checkWarnings();
	}, []);

	return (
		<>
			<WarningDrawer currentWarning={selectedWarning} />
			<PeekingJelly />
			<Toolbar>
				<Divider orientation="horizontal" flow="absolute" position="top" className="-top-1 bg-black" />
				<div>
					<WarningInformation />
				</div>
				<div className="flex justify-center gap-8">
					{foundWarnings.map((warning) => (
						<CurrentWarning key={warning.id} warning={warning} />
					))}
				</div>
				<div className="flex gap-4">
					<VisibilityButton />
				</div>
			</Toolbar>
		</>
	);
}
