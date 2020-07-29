import * as React from 'react';
import { CelsiusDashboard } from "../celsiusdashboard/CelsiusDashboard";
import * as logo from "./logo.png";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: String(logo), className: "App-logo", alt: "celsius network" }),
            React.createElement("h1", { className: "pt-2" }, "my celsius network dashboard")),
        React.createElement("div", { className: "disclaimer mb-0" },
            "This dashboard is made with \u2665 by ",
            React.createElement("a", { href: "https://t.me/fabu1", target: "_blank" }, "F\u00E4 bu"),
            " and has nothing todo with the celsius.network company"),
        React.createElement("div", { className: "App-body" },
            React.createElement(CelsiusDashboard, null))));
}
export default App;
//# sourceMappingURL=App.js.map