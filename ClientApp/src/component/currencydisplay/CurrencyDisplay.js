"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyDisplay = void 0;
var React = require("react");
;
exports.CurrencyDisplay = function (props) {
    var numberFormatOptions = {
        style: 'currency',
        currency: props.currency || 'USD'
    };
    return React.createElement("span", { className: "ValueInCurrency mt-2" }, new Intl.NumberFormat('de-ch', numberFormatOptions).format(props.amount));
};
//# sourceMappingURL=CurrencyDisplay.js.map