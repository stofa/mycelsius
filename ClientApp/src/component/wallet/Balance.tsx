import * as React from 'react';
import { CurrencyDisplay } from "../currencydisplay/CurrencyDisplay"
import { CoinIcon } from "../coinIcons/CoinIcons"

export interface BalanceItem { currency: string, amount: number, valueInUsd: number, imgsrc: string };

export class Balance extends React.Component<BalanceItem> {

    render() {
        return <div className="col-md-3">
            <div className="row no-gutters BalanceItem">
                <div className="col-3">
                    <CoinIcon currency={this.props.currency} />
                </div>
                <div className="col-9 BalanceCurrency">
                    <span>{this.props.currency}</span>
                    <span>{this.props.amount}</span>
                </div>
                <CurrencyDisplay amount={this.props.valueInUsd} />
            </div>


        </div>
    }
}