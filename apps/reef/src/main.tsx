import { render } from "preact";
import { App } from "./app.tsx";
import "@styles/index.css";

const reefContainer = document.createElement("div");
reefContainer.id = "reef";

document.body.appendChild(reefContainer);

render(<App />, reefContainer);
