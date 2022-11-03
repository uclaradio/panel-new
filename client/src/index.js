import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Panel from "./Panel";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Panel />
    </BrowserRouter>
)