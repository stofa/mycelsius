"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const React = require("react");
const Balance_1 = require("../wallet/Balance");
const CurrencyDisplay_1 = require("../currencydisplay/CurrencyDisplay");
const universal_cookie_1 = require("universal-cookie");
const cookieApiKeyName = 'apiKeyCookie';
class Wallet extends React.Component {
    constructor(props) {
        super(props);
        const cookies = new universal_cookie_1.default();
        const apiKeyFromCookie = cookies.get(cookieApiKeyName) || '';
        this.state = { apiKey: props.apiKey || apiKeyFromCookie, totalBalance: 0, rememberMe: true };
        this.handlApiKeyChange = this.handlApiKeyChange.bind(this);
        this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        if (this.state.apiKey !== "") {
            this.fetchWalletData();
        }
    }
    handlApiKeyChange(e) {
        this.setState({ apiKey: e.target.value });
    }
    handleRememberMeChange(e) {
        this.setState({ rememberMe: !this.state.rememberMe });
    }
    loadData(e) {
        e.preventDefault();
        const cookies = new universal_cookie_1.default();
        if (this.state.rememberMe) {
            cookies.set(cookieApiKeyName, this.state.apiKey, { secure: true });
        }
        else {
            cookies.remove(cookieApiKeyName, { secure: true });
        }
        this.fetchWalletData();
    }
    ;
    fetchWalletData() {
        if (this.state.apiKey !== "" && this.state.apiKey !== undefined) {
            fetch('wallet?apiKey=' + this.state.apiKey
                + '&fiatCurrencyToDisplayValues=' + this.props.selectedFiatCurrency)
                .then(response => response.json())
                .then(data => {
                this.setState({ balances: data.balances, totalBalance: data.totalValueInCurrencyToDisplay });
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedFiatCurrency !== this.props.selectedFiatCurrency) {
            this.fetchWalletData();
        }
    }
    render() {
        if (this.state.balances === undefined) {
            return this.apiKeyForm();
        }
        else {
            return this.showBalances();
        }
    }
    apiKeyForm() {
        return React.createElement("div", null,
            React.createElement("p", null, "Enter your API-Key to load your dashboad"),
            React.createElement("div", { className: "form-group" },
                React.createElement("input", { className: "apiKeyInput", type: "text", id: "userApiKey", value: this.state.apiKey, onChange: this.handlApiKeyChange, placeholder: "your private API key" })),
            React.createElement("div", { className: "form-check" },
                React.createElement("input", { type: "checkbox", className: "form-check-input", id: "chkRemember", onChange: this.handleRememberMeChange, defaultChecked: this.state.rememberMe }),
                React.createElement("label", { className: "form-check-label", htmlFor: "chkRemember" }, "Remember me")),
            React.createElement("button", { type: "button", onClick: this.loadData, className: "btn btn-primary ml-2" }, "Load it"));
    }
    showBalances() {
        var _a;
        return React.createElement("div", { className: "Balance" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", null,
                    React.createElement(CurrencyDisplay_1.CurrencyDisplay, { amount: this.state.totalBalance, currency: this.props.selectedFiatCurrency })),
                React.createElement("div", { className: "row no-gutters" }, (_a = this.state.balances) === null || _a === void 0 ? void 0 : _a.map(function (d) {
                    return React.createElement(Balance_1.Balance, Object.assign({}, d, { key: d.currency }));
                }))));
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map