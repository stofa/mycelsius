import * as React from 'react';
import { Balance } from "../wallet/Balance";
import { CurrencyDisplay } from "../currencydisplay/CurrencyDisplay";
export class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiKey: props.apiKey || '', totalBalance: 0 };
        this.handlApiKeyChange = this.handlApiKeyChange.bind(this);
        this.loadData = this.loadData.bind(this);
    }
    handlApiKeyChange(e) {
        this.setState({ apiKey: e.target.value });
    }
    loadData(e) {
        e.preventDefault();
        fetch('wallet?apiKey=' + this.state.apiKey)
            .then(response => response.json())
            .then(data => {
            this.setState({ balances: data.balances, totalBalance: data.totalValueInUsd });
        });
    }
    ;
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
            React.createElement("input", { className: "apiKeyInput", type: "text", id: "userApiKey", value: this.state.apiKey, onChange: this.handlApiKeyChange, placeholder: "your private API key" }),
            React.createElement("button", { type: "button", onClick: this.loadData, className: "btn btn-primary ml-2" }, "Load it"));
    }
    showBalances() {
        var _a;
        return React.createElement("div", { className: "Balance" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", null,
                    React.createElement(CurrencyDisplay, { amount: this.state.totalBalance })),
                React.createElement("div", { className: "row no-gutters" }, (_a = this.state.balances) === null || _a === void 0 ? void 0 : _a.map(function (d) {
                    return React.createElement(Balance, Object.assign({}, d, { key: d.currency }));
                }))));
    }
}
//# sourceMappingURL=Wallet.js.map