import * as React from "react";
import { CurrencyDisplay } from "../currencydisplay/CurrencyDisplay";
import { FiatCurrencySelector } from "../fiatcurrencyselector/FiatCurrencySelector";
;
export class WalletHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }
    handleSelectedCurrencyChanged(e) {
        this.props.onSelectedCurrencyChange(e);
    }
    render() {
        return React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "mt-3 WalletHeader p-3" },
                React.createElement("div", { className: "row no-gutters" },
                    React.createElement("div", { className: "col-4" },
                        React.createElement(CurrencyDisplay, { amount: this.props.totalBalance, currency: this.props.selectedFiatCurrency })),
                    React.createElement("div", { className: "offset-6 col-2" },
                        React.createElement(FiatCurrencySelector, { onSelectedCurrencyChange: this.handleSelectedCurrencyChanged, selectedCurrency: this.props.selectedFiatCurrency })))));
    }
}
//# sourceMappingURL=WalletHeader.js.map