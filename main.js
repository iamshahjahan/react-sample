import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

if(document.getElementById("app")) {
	render(
	  <Provider store={store}>
	  	<App />
	  </Provider>,
	  document.getElementById('app')
	)
}
