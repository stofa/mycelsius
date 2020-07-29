import * as React from 'react';
import { Wallet } from "../wallet/Wallet";
import { WalletHeader } from "../walletheader/WalletHeader";
import * as Constants from "../../Constants"
import * as CookiesUtil from "../../cookies-utli"
import { LoadingIndicator } from "../loadingindicator/LoadingIndicator";

const UsdFiatCurrencySymbol = "USD";

export interface ICelsiusDashboardState { selectedFiatCurrency: string, totalBalance: number, isLoading: boolean };

export class CelsiusDashboard extends React.Component<any, ICelsiusDashboardState> {
    constructor(props: any) {
        super(props);

        const currencyToDisplayFromCookie = CookiesUtil.getCookie(Constants.currencyToDisplayCookieName) || UsdFiatCurrencySymbol;

        this.state = { selectedFiatCurrency: currencyToDisplayFromCookie, totalBalance: 0, isLoading: false };
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
        this.handleTotalBalanceChanged = this.handleTotalBalanceChanged.bind(this);
        this.setLoadingState = this.setLoadingState.bind(this);
    }

    handleSelectedCurrencyChanged(e: string) {
        this.setState({ selectedFiatCurrency: e });
    }

    handleTotalBalanceChanged(e: number) {
        this.setLoadingState(false);
        this.setState({ totalBalance: e });
    }

    setLoadingState(isLoading: boolean) {
        console.log(isLoading);
        this.setState({ isLoading: isLoading})
    }

    render() {
        return <div>
            {this.state.isLoading ? <LoadingIndicator /> : <div>
                {this.state.totalBalance > 0 &&
                    <WalletHeader totalBalance={this.state.totalBalance} onSelectedCurrencyChange={this.handleSelectedCurrencyChanged} selectedFiatCurrency={this.state.selectedFiatCurrency} />
                }
                <Wallet selectedFiatCurrency={this.state.selectedFiatCurrency || UsdFiatCurrencySymbol} onTotalBalanceChanged={this.handleTotalBalanceChanged} setLoadingState={this.setLoadingState} />
            </div>
            }
        </div>
    }
}