import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import App from "./App";
import { Provider } from "react-redux";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
<Provider store={store}>
<App />
</Provider>);
