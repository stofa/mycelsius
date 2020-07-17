using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RestSharp;

namespace MyCelsius.Services.ExchangeRate
{
    public interface IExchangeRateService
    {
        IEnumerable<string> GetAvailableFiatCurrencies();
        decimal GetExchangeRateToUsd(string fiatSymbol);
    }

    public class ExchangeRateService : IExchangeRateService
    {
        private static readonly object CacheLock = new object();
        private static IEnumerable<string> _availableFiatCurrencies;

        public IEnumerable<string> GetAvailableFiatCurrencies()
        {
            LoadCache();

            return _availableFiatCurrencies;
        }

        public decimal GetExchangeRateToUsd(string fiatSymbol)
        {
            IRestResponse response = GetResponseFromApi(String.Format(Constants.ExchangeRateLatestToUsd,fiatSymbol));
            dynamic rates = JsonConvert.DeserializeObject(response.Content);

            return Convert.ToDecimal(rates["rates"][fiatSymbol].Value);
        }

        private void LoadCache()
        {
            IRestResponse response = GetResponseFromApi(Constants.ExchangeRateAvailableCurrencies);
            dynamic rates = JsonConvert.DeserializeObject(response.Content);
            List<string> availableCurriences = new List<string>();

            foreach (var rate in rates["rates"])
            {
                availableCurriences.Add(rate.Name);
            }

            lock (CacheLock)
            {
                _availableFiatCurrencies = availableCurriences.OrderBy(k=>k);
            }
        }

        private static IRestResponse GetResponseFromApi(string url)
        {
            var client = new RestClient(url) { Timeout = -1 };
            var request = new RestRequest(Method.GET);

            return client.Execute(request);
        }
    }
}
