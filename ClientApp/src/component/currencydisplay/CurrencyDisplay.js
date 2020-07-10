"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyDisplay = void 0;
var React = require("react");
;
exports.CurrencyDisplay = function (props) {
    return React.createElement("span", { className: "ValueInCurrency mt-2" }, new Intl.NumberFormat('de-ch', { style: 'currency', currency: 'USD' }).format(props.amount));
};
//# sourceMappingURL=CurrencyDisplay.js.map