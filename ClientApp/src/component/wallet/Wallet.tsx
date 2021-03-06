import * as React from 'react';
import { Balance, BalanceItem } from "../wallet/Balance";
import * as CookiesUtil from "../../cookies-utli"
import { CommunityStats, CommunityStatsProps } from '../communitystats/CommunityStats';

export interface WalletProbs { apiKey?: string; selectedFiatCurrency: string, onTotalBalanceChanged: any, setLoadingState: any }
export interface WalletState { apiKey?: string; rememberMe?: boolean; balances?: BalanceItem[], totalBalance: number, communityStats?: CommunityStatsProps }

const cookieApiKeyName = 'apiKeyCookie';

export class Wallet extends React.Component<WalletProbs, WalletState> {
    constructor(props: WalletProbs) {
        super(props);
        const apiKeyFromCookie = CookiesUtil.getCookie(cookieApiKeyName) || '';

        this.state = { apiKey: props.apiKey || apiKeyFromCookie, totalBalance: 0, rememberMe: true }

        this.handlApiKeyChange = this.handlApiKeyChange.bind(this);
        this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        if (this.state.apiKey !== "") {
            this.fetchWalletData();
        }
    }

    handlApiKeyChange(e: any) {
        this.setState({ apiKey: e.target.value });
    }

    handleRememberMeChange(e: any) {
        this.setState({ rememberMe: !this.state.rememberMe });
    }

    loadData(e: React.MouseEvent) {
        e.preventDefault();

        if (this.state.rememberMe) {
            CookiesUtil.setCookie(cookieApiKeyName, this.state.apiKey || "");
        } else {
            CookiesUtil.deleteCookie(cookieApiKeyName);
        }

        this.fetchWalletData();
    };

    private fetchWalletData() {
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

    componentDidUpdate(prevProps: WalletProbs, prevState: WalletState) {
        if (prevProps.selectedFiatCurrency !== this.props.selectedFiatCurrency) {
            this.fetchWalletData();
        }
    }

    render() {
        if (this.state.balances === undefined) {
            return this.apiKeyForm();
        } else {
            return this.showBalances();
        }
    }

    apiKeyForm() {
        return <div>
            <p>
                Enter your API-Key to load your dashboad
        </p>

            <div className="form-group">
                <input className="apiKeyInput" type="text" id="userApiKey" value={this.state.apiKey} onChange={this.handlApiKeyChange} placeholder="your private API key"></input>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="chkRemember" onChange={this.handleRememberMeChange} defaultChecked={this.state.rememberMe} />
                <label className="form-check-label" htmlFor="chkRemember">Remember me</label>
            </div>
            <button type="button" onClick={this.loadData} className="btn btn-primary ml-2">Load it</button>
        </div>;
    }

    showBalances() {
        return <div className="Balance">

            <div className="container-fluid">
                <div className="row no-gutters">
                    {this.state.communityStats !== undefined &&
                        <div className="mt-3 col-12">
                            <CommunityStats {...this.state.communityStats} />
                        </div>
                    }
                    {this.state.balances?.map(function (d: BalanceItem) {
                        return <Balance {...d} key={d.currency} />
                    })}
                </div></div>
        </div>
    }
}