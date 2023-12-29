import { useState } from "preact/hooks";
import "@styles/app.css";
import IssueTracker from "@components/Issues/IssueTracker";

export function App() {
	return (
		<>
			<div class="mx-auto max-w-7xl bg-violet-50 py-4">
				<IssueTracker />
			</div>
		</>
	);
}
