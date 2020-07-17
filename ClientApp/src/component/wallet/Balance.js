"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
const React = require("react");
const CurrencyDisplay_1 = require("../currencydisplay/CurrencyDisplay");
const CoinIcons_1 = require("../coinIcons/CoinIcons");
;
class Balance extends React.Component {
    render() {
        return React.createElement("div", { className: "col-md-3" },
            React.createElement("div", { className: "row no-gutters BalanceItem" },
                React.createElement("div", { className: "col-3" },
                    React.createElement(CoinIcons_1.CoinIcon, { currency: this.props.currency })),
                React.createElement("div", { className: "col-9 BalanceCurrency" },
                    React.createElement("span", null, this.props.currency),
                    React.createElement("span", null, this.props.amount)),
                React.createElement(CurrencyDisplay_1.CurrencyDisplay, { amount: this.props.valueInCurrencyToDisplay, currency: this.props.fiatCurrencyToDisplay })));
    }
}
exports.Balance = Balance;
//# sourceMappingURL=Balance.js.map