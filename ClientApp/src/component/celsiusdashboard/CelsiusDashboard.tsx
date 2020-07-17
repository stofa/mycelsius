import * as React from 'react';
import { Wallet } from "../wallet/Wallet";
import { FiatCurrencySelector } from "../fiatcurrencyselector/FiatCurrencySelector"
import Cookies from "universal-cookie";
import * as Constants from "../../Constants"

const UsdFiatCurrencySymbol = "USD";

export interface ICelsiusDashboardState { selectedFiatCurrency?: string };


export class CelsiusDashboard extends React.Component<any, ICelsiusDashboardState> {
    constructor(props: any) {
        super(props);

        const cookies = new Cookies();
        const currencyToDisplayFromCookie = cookies.get(Constants.currencyToDisplayCookieName) || UsdFiatCurrencySymbol;

        this.state = { selectedFiatCurrency: currencyToDisplayFromCookie };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }

    handleSelectedCurrencyChanged(e: any) {
        console.log(e);
        this.setState({ selectedFiatCurrency: e });
    }

    render() {
        console.log("render dashboard");
        return <div>
            <FiatCurrencySelector onSelectedCurrencyChange={this.handleSelectedCurrencyChanged} selectedCurrency={this.state.selectedFiatCurrency} />
            <Wallet selectedFiatCurrency={this.state.selectedFiatCurrency || UsdFiatCurrencySymbol} />
        </div>
    };
}