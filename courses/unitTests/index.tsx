import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router-dom";
import {App} from "./src/App";
import "./index.css"
// import 'jest-fetch-mock'

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)