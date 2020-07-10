import * as React from 'react';
import { CurrencyDisplay } from "../currencydisplay/CurrencyDisplay";
import { CoinIcon } from "../coinIcons/CoinIcons";
;
export class Balance extends React.Component {
    render() {
        return React.createElement("div", { className: "col-md-3" },
            React.createElement("div", { className: "row no-gutters BalanceItem" },
                React.createElement("div", { className: "col-3" },
                    React.createElement(CoinIcon, { currency: this.props.currency })),
                React.createElement("div", { className: "col-9 BalanceCurrency" },
                    React.createElement("span", null, this.props.currency),
                    React.createElement("span", null, this.props.amount)),
                React.createElement(CurrencyDisplay, { amount: this.props.valueInUsd })));
    }
}
//# sourceMappingURL=Balance.js.map