"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
var React = require("react");
var CurrencyDisplay_1 = require("../currencydisplay/CurrencyDisplay");
var CoinIcons_1 = require("../coinIcons/CoinIcons");
;
var Balance = /** @class */ (function (_super) {
    __extends(Balance, _super);
    function Balance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Balance.prototype.render = function () {
        return React.createElement("div", { className: "col-md-3" },
            React.createElement("div", { className: "row no-gutters BalanceItem" },
                React.createElement("div", { className: "col-3" },
                    React.createElement(CoinIcons_1.CoinIcon, { currency: this.props.currency })),
                React.createElement("div", { className: "col-9 BalanceCurrency" },
                    React.createElement("span", null, this.props.currency),
                    React.createElement("span", null, this.props.amount)),
                React.createElement(CurrencyDisplay_1.CurrencyDisplay, { amount: this.props.valueInCurrencyToDisplay, currency: this.props.fiatCurrencyToDisplay })));
    };
    return Balance;
}(React.Component));
exports.Balance = Balance;
//# sourceMappingURL=Balance.js.map