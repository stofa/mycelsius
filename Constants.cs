using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCelsius
{
    public static class Constants
    {
        public const string CelsiusApiRootUrl = "https://wallet-api.celsius.network";
        public static string CelsiusApiGetSupportedCurrencies => $"{CelsiusApiRootUrl}/util/supported_currencies";
        public static string CelsiusApiGetWalletBalance => $"{CelsiusApiRootUrl}/wallet/balance";
        public static string CelsiusApiGetCoinBalance => $"{CelsiusApiRootUrl}/wallet/{{0}}/balance";


        public const string ExchangeRateApiRootUrl = "https://api.exchangeratesapi.io";
        public static string ExchangeRateAvailableCurrencies => $"{ExchangeRateApiRootUrl}/latest?base=USD";
        public static string ExchangeRateLatestToUsd => $"{ExchangeRateApiRootUrl}/latest?base=USD&symbols={{0}}";
    }
}
