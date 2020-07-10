import * as React from 'react';
import { Wallet } from "../wallet/Wallet";
import * as logo from "./logo.png";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: String(logo), className: "App-logo", alt: "celsius network" }),
            React.createElement("h1", { className: "pt-2" }, "my celsius network dashboard")),
        React.createElement("div", { className: "App-body" },
            React.createElement(Wallet, { apiKey: process.env.REACT_APP_CELSIUS_USER_API_KEY }))));
}
export default App;
//# sourceMappingURL=App.js.map