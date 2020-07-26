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
    public class CommunityController : ControllerBase
    {
        private readonly ICommunityService _communityService;

        public CommunityController(ICommunityService communityService)
        {
            _communityService = communityService;
        }

        [HttpGet]
        public WalletModel Get()
        {
            _communityService.GetTop100();
            return null;
        }
    }
}
