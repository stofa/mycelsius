"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyDisplay = void 0;
const React = require("react");
;
exports.CurrencyDisplay = (props) => {
    console.log(props);
    var numberFormatOptions = {
        style: 'currency',
        currency: props.currency || 'USD'
    };
    console.log(numberFormatOptions);
    return React.createElement("span", { className: "ValueInCurrency mt-2" }, new Intl.NumberFormat('de-ch', numberFormatOptions).format(props.amount));
};
//# sourceMappingURL=CurrencyDisplay.js.map