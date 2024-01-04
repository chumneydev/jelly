import { useEffect } from "preact/hooks";
import "@styles/app.css";
import useWarningStore from "@stores/warningStore";

export function App() {
	const { checkWarnings } = useWarningStore();
	useEffect(() => {
		checkWarnings();
	}, []);

	return (
		<div class="fixed bottom-10 right-10 flex flex-col-reverse items-end gap-4">
			<p>Hello</p>
		</div>
	);
}
