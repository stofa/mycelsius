import * as React from 'react';
import { Balance, BalanceItem } from "../wallet/Balance";
import { CurrencyDisplay } from "../currencydisplay/CurrencyDisplay"

export interface WalletProbs { apiKey?: string; }
export interface WalletState { apiKey?: string; balances?: BalanceItem[], totalBalance: number }


export class Wallet extends React.Component<WalletProbs, WalletState> {
    constructor(props: WalletProbs) {
        super(props);
        this.state = { apiKey: props.apiKey || '', totalBalance: 0 }

        this.handlApiKeyChange = this.handlApiKeyChange.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    handlApiKeyChange(e: any) {
        this.setState({ apiKey: e.target.value });
    }

    loadData(e: React.MouseEvent) {
        e.preventDefault();
        
        fetch('wallet?apiKey=' + this.state.apiKey)
            .then(response => response.json())
            .then(data => {
                this.setState({ balances: data.balances, totalBalance: data.totalValueInUsd });
            });
    };


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
            <input className="apiKeyInput" type="text" id="userApiKey" value={this.state.apiKey} onChange={this.handlApiKeyChange} placeholder="your private API key"></input>
            <button type="button" onClick={this.loadData} className="btn btn-primary ml-2">
                Load it
    </button>
        </div>;
    }

    showBalances() {
        return <div className="Balance">

            <div className="container-fluid">
                <div>
                    <CurrencyDisplay amount={this.state.totalBalance} />
                </div>
                <div className="row no-gutters">
                    {this.state.balances?.map(function (d: BalanceItem) {
                        return <Balance {...d} key={d.currency} />
                    })}
                </div></div>
        </div>
    }
}