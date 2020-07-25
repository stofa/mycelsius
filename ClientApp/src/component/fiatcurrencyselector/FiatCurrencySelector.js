import * as React from "react";
import * as CookiesUtil from "../../cookies-utli";
import * as Constants from "../../Constants";
;
;
export class FiatCurrencySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { availableCurrencies: [] };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }
    componentDidMount() {
        fetch("exchangerate/GetAvailableCurrencies")
            .then(response => response.json())
            .then(data => {
            this.setState({ availableCurrencies: data });
        });
    }
    handleSelectedCurrencyChanged(e) {
        this.props.onSelectedCurrencyChange(e.target.value);
        CookiesUtil.setCookie(Constants.currencyToDisplayCookieName, e.target.value);
    }
    render() {
        return this.getAvailableCurrencies();
    }
    getAvailableCurrencies() {
        if (this.state.availableCurrencies !== undefined && this.state.availableCurrencies.length > 0) {
            return (React.createElement("div", { className: "dropdown" },
                React.createElement("select", { id: "fiatCurrencyDisplay", defaultValue: this.props.selectedCurrency, onChange: this.handleSelectedCurrencyChanged }, this.state.availableCurrencies.map(function (d) {
                    return (React.createElement("option", { key: d, value: d }, d));
                }))));
        }
        else {
            return (React.createElement("div", null));
        }
    }
}
//# sourceMappingURL=FiatCurrencySelector.js.map