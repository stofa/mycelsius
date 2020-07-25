﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RestSharp;

namespace MyCelsius.Services.Celsius
{
    public interface ICelsiusApiService
    {
        IRestResponse GetResultFromCelsiusPrivateApi(string apiKey, string url);

        IRestResponse GetResultFromCelsiusPublicApi(string url);
    }

    public class CelsiusApiService : ICelsiusApiService
    {
        private readonly IConfiguration _configuration;

        public CelsiusApiService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IRestResponse GetResultFromCelsiusPrivateApi(string apiKey, string url)
        {
            var client = new RestClient(url) { Timeout = -1 };
            var request = new RestRequest(Method.GET);
            request.AddHeader("X-Cel-Partner-Token", _configuration["CelsiusApi:PrivateApiKey"]);
            request.AddHeader("X-Cel-Api-Key", apiKey);

            return client.Execute(request);
        }

        public IRestResponse GetResultFromCelsiusPublicApi(string url)
        {
            var client = new RestClient("https://celsius.network/api/community/top100")
            {
                Timeout = -1
            };
            var request = new RestRequest(Method.GET);
            request.AddHeader("x-api-key", _configuration["CelsiusApi:PublicApiKey"]);
            return client.Execute(request);
        }
    }
}
