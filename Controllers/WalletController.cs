using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyCelsius.Models.Wallet;
using MyCelsius.Services.Celsius;
using Newtonsoft.Json;
using RestSharp;

namespace MyCelsius.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WalletController : ControllerBase
    {
        private readonly IWalletService _walletService;
        
        public WalletController(IWalletService walletService)
        {
            _walletService = walletService;
        }

        [HttpGet]
        public WalletModel Get(string apiKey)
        {
            return _walletService.GetWallet(apiKey);
        }
    }
}
