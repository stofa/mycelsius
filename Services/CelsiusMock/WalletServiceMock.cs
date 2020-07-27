using MyCelsius.Models.Wallet;
using MyCelsius.Services.Celsius;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCelsius.Services.CelsiusMock
{
    public class WalletServiceMock : IWalletService
    {
        private readonly ICurrencyService _currencyService;

        public WalletServiceMock(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        public WalletModel GetWallet(string apiKey, string fiatCurrencyToDisplayValues)
        {
            WalletModel model = new WalletModel();
            List<BalanceModel> balances = new List<BalanceModel>();

            foreach (var currency in _currencyService.GetSupportedCurrencies(apiKey))
            {
                Random randomAmount = new Random();

                BalanceModel item = new BalanceModel()
                {
                    Currency = currency,
                    Amount = (decimal)(randomAmount.NextDouble() * randomAmount.Next(0, 999999)),
                    FiatCurrencyToDisplay = fiatCurrencyToDisplayValues
                };

                item.ValueInCurrencyToDisplay = randomAmount.Next(1, 10) * item.Amount;

                balances.Add(item);
            }

            model.Balances = balances.OrderByDescending(b=>b.ValueInCurrencyToDisplay);
            model.CurrentCelBalance = (decimal?)398264.123;
            return model;
        }
    }
}
