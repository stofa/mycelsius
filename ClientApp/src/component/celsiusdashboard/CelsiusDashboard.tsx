import * as React from 'react';
import { Wallet } from "../wallet/Wallet";
import { FiatCurrencySelector } from "../fiatcurrencyselector/FiatCurrencySelector"
import * as Constants from "../../Constants"
import * as CookiesUtil from "../../cookies-utli"

const UsdFiatCurrencySymbol = "USD";

export interface ICelsiusDashboardState { selectedFiatCurrency?: string };

export class CelsiusDashboard extends React.Component<any, ICelsiusDashboardState> {
    constructor(props: any) {
        super(props);

        const currencyToDisplayFromCookie = CookiesUtil.getCookie(Constants.currencyToDisplayCookieName) || UsdFiatCurrencySymbol;

        this.state = { selectedFiatCurrency: currencyToDisplayFromCookie };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }

    handleSelectedCurrencyChanged(e: any) {
        this.setState({ selectedFiatCurrency: e });
    }

    render() {
        return <div>
            <FiatCurrencySelector onSelectedCurrencyChange={this.handleSelectedCurrencyChanged} selectedCurrency={this.state.selectedFiatCurrency} />
            <Wallet selectedFiatCurrency={this.state.selectedFiatCurrency || UsdFiatCurrencySymbol} />
        </div>
    };
}