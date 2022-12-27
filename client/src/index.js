import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Panel from "./Panel";
import { GlobalStyle } from "./styles/Styles.style";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Panel/>
    </BrowserRouter>
)