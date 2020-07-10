using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyCelsius.Models.Wallet;
using Newtonsoft.Json;

namespace MyCelsius.Services.Celsius
{
    public interface IWalletService
    {
        WalletModel GetWallet(string apiKey);
    }

    public class WalletService : IWalletService
    {
        private readonly ICelsiusApiService _celsiusApiService;
        private readonly ICurrencyService _currencyService;

        public WalletService(ICelsiusApiService celsiusApiService, ICurrencyService currencyService)
        {
            _celsiusApiService = celsiusApiService;
            _currencyService = currencyService;
        }

        public WalletModel GetWallet(string apiKey)
        {
            WalletModel model = new WalletModel();
            List<BalanceModel> balances = new List<BalanceModel>();

            var response = _celsiusApiService.GetResultFromCelsiusApi(apiKey, Constants.CelsiusApiGetWalletBalance);
            dynamic des = JsonConvert.DeserializeObject(response.Content);

            
            foreach (var currency in _currencyService.GetSupportedCurrencies(apiKey))
            {
                string currentCurrency = currency.ToString();
                decimal amount = des["balance"][currentCurrency.ToLower()];

                if (amount > 0)
                {
                    var balanceModel = new BalanceModel
                    {
                        Amount = amount, Currency = currency, ValueInUsd = GetValueInUsd(apiKey, currentCurrency)
                    };

                    balances.Add(balanceModel);
                }
            }

            model.Balances = balances.OrderByDescending(b => b.ValueInUsd);

            return model;
        }

        private decimal GetValueInUsd(string apiKey, string currentCurrency)
        {
            var balancePerCoinResponse =
                _celsiusApiService.GetResultFromCelsiusApi(apiKey,
                    String.Format(Constants.CelsiusApiGetCoinBalance, currentCurrency));
            dynamic balancePerCoin = JsonConvert.DeserializeObject(balancePerCoinResponse.Content);
            return Convert.ToDecimal(balancePerCoin["amount_in_usd"]);
        }
    }
}
