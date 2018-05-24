import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { AppContainer } from "react-hot-loader";
import createHistory from "history/createBrowserHistory";
import createNewStore from "./redux/createNewStore";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();
const store = createNewStore(history);
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}

registerServiceWorker();
