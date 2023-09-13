import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { HelmetProvider } from "react-helmet-async";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { RecoilRoot } from "recoil";

// persist 적용
const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
      </PersistGate>
    </Provider>
  </HelmetProvider>,
);
