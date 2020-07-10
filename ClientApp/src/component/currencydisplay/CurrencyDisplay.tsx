import * as React from 'react';

export interface CurrencyDisplayItem { amount: number };

export const CurrencyDisplay: React.FC<CurrencyDisplayItem> = (props) => {
  return <span className="ValueInCurrency mt-2">{new Intl.NumberFormat('de-ch', { style: 'currency', currency: 'USD' }).format(props.amount)}</span>; 
}
