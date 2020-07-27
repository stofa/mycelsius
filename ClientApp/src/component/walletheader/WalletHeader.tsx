import * as React from "react";

import { CurrencyDisplay } from "../currencydisplay/CurrencyDisplay"
import { FiatCurrencySelector } from "../fiatcurrencyselector/FiatCurrencySelector"

export interface IWalletHeaderProps { totalBalance: number, selectedFiatCurrency: string, onSelectedCurrencyChange: any };


export class WalletHeader extends React.Component<IWalletHeaderProps, any> {
    constructor(props: any) {
        super(props);

        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }

    handleSelectedCurrencyChanged(e: string) {
        this.props.onSelectedCurrencyChange(e);
    }

    render() {
        return <div className="container-fluid">
            <div className="mt-3 WalletHeader p-3">
                <div className="row no-gutters">
                    <div className="col-4">
                        <CurrencyDisplay amount={this.props.totalBalance} currency={this.props.selectedFiatCurrency} />
                    </div>
                    <div className="offset-6 col-2 text-right">
                        <FiatCurrencySelector onSelectedCurrencyChange={this.handleSelectedCurrencyChanged} selectedCurrency={this.props.selectedFiatCurrency} />
                    </div>
                </div>
            </div>
        </div>
    }
}