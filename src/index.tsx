import * as ReactDOM from "react-dom";
import * as React from "react";
import { Route, Router } from "react-router";
import createHashHistory from "history/createHashHistory";
import {App} from "./components/App";


const history = createHashHistory();

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);