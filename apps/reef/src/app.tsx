import { useEffect } from "preact/hooks";
import "@styles/app.css";

export function App() {
	useEffect(() => {
		console.log("Hello");
	}, []);

	return (
		<>
			<p>Hello</p>
		</>
	);
}
