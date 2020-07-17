"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiatCurrencySelector = void 0;
const React = require("react");
const universal_cookie_1 = require("universal-cookie");
const Constants = require("../../Constants");
;
;
class FiatCurrencySelector extends React.Component {
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
        const cookies = new universal_cookie_1.default();
        cookies.set(Constants.currencyToDisplayCookieName, e.target.value, { secure: true });
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
exports.FiatCurrencySelector = FiatCurrencySelector;
//# sourceMappingURL=FiatCurrencySelector.js.map