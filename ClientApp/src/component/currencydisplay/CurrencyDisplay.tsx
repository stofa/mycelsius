import * as React from 'react';

export interface CurrencyDisplayItem { amount: number, currency: string };

export const CurrencyDisplay: React.FC<CurrencyDisplayItem> = (props) => {
    var numberFormatOptions = {
        style: 'currency',
        currency: props.currency || 'USD'
    }

    return <span className="ValueInCurrency mt-2">{new Intl.NumberFormat('de-ch', numberFormatOptions).format(props.amount)}</span>; 
}
