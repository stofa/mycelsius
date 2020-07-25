import * as React from "react";
import * as CookiesUtil from "../../cookies-utli"
import * as Constants from "../../Constants"

export interface IFiatCurrencySelectorProps { selectedCurrency?: string, onSelectedCurrencyChange: any };
export interface IFiatCurrencySelectorState { availableCurrencies?: string[] };


export class FiatCurrencySelector extends React.Component<IFiatCurrencySelectorProps, IFiatCurrencySelectorState> {
    constructor(props: any) {
        super(props);

        this.state = { availableCurrencies: [] }
        this.handleSelectedCurrencyChanged = this.handleSelectedCurrencyChanged.bind(this);
    }

    componentDidMount() {
        fetch("exchangerate/GetAvailableCurrencies")
            .then(response => response.json())
            .then(data => {
                this.setState({ availableCurrencies: data });
            });
    }

    handleSelectedCurrencyChanged(e: any) {
        this.props.onSelectedCurrencyChange(e.target.value);
        CookiesUtil.setCookie(Constants.currencyToDisplayCookieName, e.target.value);
    }

    render() {
        return this.getAvailableCurrencies();
    }

    getAvailableCurrencies() {
        if (this.state.availableCurrencies !== undefined && this.state.availableCurrencies.length > 0) {
            return (<div className="dropdown">
                <select id="fiatCurrencyDisplay" defaultValue={this.props.selectedCurrency} onChange={this.handleSelectedCurrencyChanged}>
                    {this.state.availableCurrencies.map(function (d: string) {
                        return (<option key={d} value={d}>{d}</option>);
                    })}
                </select>
            </div>);
        } else {
            return (<div></div>);
        }
    }
}