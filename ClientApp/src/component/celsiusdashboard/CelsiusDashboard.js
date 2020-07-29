import * as React from 'react';
import { Wallet } from "../wallet/Wallet";
import { WalletHeader } from "../walletheader/WalletHeader";
import * as Constants from "../../Constants";
import * as CookiesUtil from "../../cookies-utli";
import { LoadingIndicator } from "../loadingindicator/LoadingIndicator";
const UsdFiatCurrencySymbol = "USD";
;
export class CelsiusDashboard extends React.Component {
    constructor(props) {
        super(props);
        const currencyToDisplayFromCookie = CookiesUtil.getCookie(Constants.currencyToDisplayCookieName) || UsdFiatCurrencySymbol;
        this.state = { selectedFiatCurrency: currencyToDisplayFromCookie, totalBalance: 0, isLoading: false };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
        this.handleTotalBalanceChanged = this.handleTotalBalanceChanged.bind(this);
        this.setLoadingState = this.setLoadingState.bind(this);
    }
    handleSelectedCurrencyChanged(e) {
        this.setState({ selectedFiatCurrency: e });
    }
    handleTotalBalanceChanged(e) {
        this.setLoadingState(false);
        this.setState({ totalBalance: e });
    }
    setLoadingState(isLoading) {
        console.log(isLoading);
        this.setState({ isLoading: isLoading });
    }
    render() {
        return React.createElement("div", null, this.state.isLoading ? React.createElement(LoadingIndicator, null) : React.createElement("div", null,
            this.state.totalBalance > 0 &&
                React.createElement(WalletHeader, { totalBalance: this.state.totalBalance, onSelectedCurrencyChange: this.handleSelectedCurrencyChanged, selectedFiatCurrency: this.state.selectedFiatCurrency }),
            React.createElement(Wallet, { selectedFiatCurrency: this.state.selectedFiatCurrency || UsdFiatCurrencySymbol, onTotalBalanceChanged: this.handleTotalBalanceChanged, setLoadingState: this.setLoadingState })));
    }
}
//# sourceMappingURL=CelsiusDashboard.js.map