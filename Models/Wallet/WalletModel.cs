using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCelsius.Models.Wallet
{
    public class WalletModel
    {
        public decimal TotalValueInUsd => Balances.Sum(t => t.ValueInUsd);

        public IEnumerable<BalanceModel> Balances { get; set; }
    }
}
