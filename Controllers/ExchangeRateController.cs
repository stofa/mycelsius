using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyCelsius.Services.ExchangeRate;

namespace MyCelsius.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ExchangeRateController : ControllerBase
    {
        private readonly IExchangeRateService _exchangeRateService;

        public ExchangeRateController(IExchangeRateService exchangeRateService)
        {
            _exchangeRateService = exchangeRateService;
        }

        [HttpGet]
        public IEnumerable<string> GetAvailableCurrencies()
        {
            return _exchangeRateService.GetAvailableFiatCurrencies();
        }
    }
}