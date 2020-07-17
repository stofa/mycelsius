"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const CelsiusDashboard_1 = require("../celsiusdashboard/CelsiusDashboard");
const logo = require("./logo.png");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: String(logo), className: "App-logo", alt: "celsius network" }),
            React.createElement("h1", { className: "pt-2" }, "my celsius network dashboard")),
        React.createElement("div", { className: "App-body" },
            React.createElement(CelsiusDashboard_1.CelsiusDashboard, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map