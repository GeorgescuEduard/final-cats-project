import ReactDOM from "react-dom/client";
import { App } from "./App";
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css"

const rootDiv = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(<><App /></>);