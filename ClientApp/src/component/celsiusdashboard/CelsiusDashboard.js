import * as React from 'react';
import { Wallet } from "../wallet/Wallet";
import { FiatCurrencySelector } from "../fiatcurrencyselector/FiatCurrencySelector";
import * as Constants from "../../Constants";
import * as CookiesUtil from "../../cookies-utli";
const UsdFiatCurrencySymbol = "USD";
;
export class CelsiusDashboard extends React.Component {
    constructor(props) {
        super(props);
        const currencyToDisplayFromCookie = CookiesUtil.getCookie(Constants.currencyToDisplayCookieName) || UsdFiatCurrencySymbol;
        this.state = { selectedFiatCurrency: currencyToDisplayFromCookie };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }
    handleSelectedCurrencyChanged(e) {
        this.setState({ selectedFiatCurrency: e });
    }
    render() {
        return React.createElement("div", null,
            React.createElement(FiatCurrencySelector, { onSelectedCurrencyChange: this.handleSelectedCurrencyChanged, selectedCurrency: this.state.selectedFiatCurrency }),
            React.createElement(Wallet, { selectedFiatCurrency: this.state.selectedFiatCurrency || UsdFiatCurrencySymbol }));
    }
    ;
}
//# sourceMappingURL=CelsiusDashboard.js.map