"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelsiusDashboard = void 0;
const React = require("react");
const Wallet_1 = require("../wallet/Wallet");
const FiatCurrencySelector_1 = require("../fiatcurrencyselector/FiatCurrencySelector");
const universal_cookie_1 = require("universal-cookie");
const Constants = require("../../Constants");
const UsdFiatCurrencySymbol = "USD";
;
class CelsiusDashboard extends React.Component {
    constructor(props) {
        super(props);
        const cookies = new universal_cookie_1.default();
        const currencyToDisplayFromCookie = cookies.get(Constants.currencyToDisplayCookieName) || UsdFiatCurrencySymbol;
        this.state = { selectedFiatCurrency: currencyToDisplayFromCookie };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }
    handleSelectedCurrencyChanged(e) {
        console.log(e);
        this.setState({ selectedFiatCurrency: e });
    }
    render() {
        console.log("render dashboard");
        return React.createElement("div", null,
            React.createElement(FiatCurrencySelector_1.FiatCurrencySelector, { onSelectedCurrencyChange: this.handleSelectedCurrencyChanged, selectedCurrency: this.state.selectedFiatCurrency }),
            React.createElement(Wallet_1.Wallet, { selectedFiatCurrency: this.state.selectedFiatCurrency || UsdFiatCurrencySymbol }));
    }
    ;
}
exports.CelsiusDashboard = CelsiusDashboard;
//# sourceMappingURL=CelsiusDashboard.js.map