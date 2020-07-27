import * as React from 'react';
import { Balance } from "../wallet/Balance";
import * as CookiesUtil from "../../cookies-utli";
import { CommunityStats } from '../communitystats/CommunityStats';
const cookieApiKeyName = 'apiKeyCookie';
export class Wallet extends React.Component {
    constructor(props) {
        super(props);
        const apiKeyFromCookie = CookiesUtil.getCookie(cookieApiKeyName) || '';
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
        if (this.state.rememberMe) {
            CookiesUtil.setCookie(cookieApiKeyName, this.state.apiKey || "");
        }
        else {
            CookiesUtil.deleteCookie(cookieApiKeyName);
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
                this.props.onTotalBalanceChanged(data.totalValueInCurrencyToDisplay);
                fetch("community/getTop100?currentCelBalance=" + data.currentCelBalance)
                    .then(response => response.json())
                    .then(data => {
                    this.setState({ communityStats: { top100Stats: data } });
                });
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
                React.createElement("div", { className: "row no-gutters" },
                    this.state.communityStats !== undefined &&
                        React.createElement("div", { className: "mt-3 col-12" },
                            React.createElement(CommunityStats, Object.assign({}, this.state.communityStats))), (_a = this.state.balances) === null || _a === void 0 ? void 0 :
                    _a.map(function (d) {
                        return React.createElement(Balance, Object.assign({}, d, { key: d.currency }));
                    }))));
    }
}
//# sourceMappingURL=Wallet.js.map