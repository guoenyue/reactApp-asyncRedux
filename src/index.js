import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {reduces} from "./redux/reduces/";
import App from "./App";

let store=createStore(reduces);

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>)
    ,
    document.getElementById("root")
);