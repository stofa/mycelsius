import * as React from 'react';
import * as eth from "./icons/eth.png"
import * as btc from "./icons/btc.png"
import * as dash from "./icons/dash.png"
import * as bch from "./icons/bch.png"
import * as bsv from "./icons/bsv.png"
import * as ltc from "./icons/ltc.png"
import * as zec from "./icons/zec.png"
import * as btg from "./icons/btg.png"
import * as xrp from "./icons/xrp.png"
import * as xlm from "./icons/xlm.png"
import * as omg from "./icons/omg.png"
import * as tusd from "./icons/tusd.png"
import * as gusd from "./icons/gusd.png"
import * as pax from "./icons/pax.png"
import * as usdc from "./icons/usdc.png"
import * as dai from "./icons/dai.png"
import * as mcdai from "./icons/mcdai.png"
import * as cel from "./icons/cel.png"
import * as zrx from "./icons/zrx.png"
import * as orbs from "./icons/orbs.png"
import * as usdterc20 from "./icons/usdterc20.png"
import * as tgbp from "./icons/tgbp.png"
import * as taud from "./icons/taud.png"
import * as thkd from "./icons/thkd.png"
import * as tcad from "./icons/tcad.png"
import * as eos from "./icons/eos.png"
import * as sga from "./icons/sga.png"
import * as xaut from "./icons/xaut.png"
import * as etc from "./icons/etc.png"
import * as bat from "./icons/bat.png"
import * as busd from "./icons/busd.png"


const icons: any = Object.freeze({ eth, btc, dash, bch, bsv, ltc, zec, btg, xrp, xlm, omg, tusd, gusd, pax, usdc, dai, zrx, cel, mcdai, orbs, usdterc20, tgbp, taud, thkd, tcad, eos, sga, xaut, etc, bat, busd });

export interface CoinIconProps { currency: string };

export const CoinIcon: React.FC<CoinIconProps> = (props) => {
    return (
        <img src={icons[props.currency.toLowerCase().replace(" ", "")]} alt={props.currency} />
    );
}