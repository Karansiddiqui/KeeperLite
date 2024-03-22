import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import DataProvider from "./context/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <DataProvider>
        <App />
    </DataProvider>
   
);
