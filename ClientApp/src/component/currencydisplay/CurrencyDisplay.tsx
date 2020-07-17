import * as React from 'react';

export interface CurrencyDisplayItem { amount: number, currency: string };

export const CurrencyDisplay: React.FC<CurrencyDisplayItem> = (props) => {
    console.log(props);
    var numberFormatOptions = {
        style: 'currency',
        currency: props.currency || 'USD'
    }

    console.log(numberFormatOptions);

    return <span className="ValueInCurrency mt-2">{new Intl.NumberFormat('de-ch', numberFormatOptions).format(props.amount)}</span>; 
}
