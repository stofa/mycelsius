using System;
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
        IRestResponse GetResultFromCelsiusApi(string apiKey, string url);
    }

    public class CelsiusApiService : ICelsiusApiService
    {
        private readonly IConfiguration _configuration;

        public CelsiusApiService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IRestResponse GetResultFromCelsiusApi(string apiKey, string url)
        {
            var client = new RestClient(url) { Timeout = -1 };
            var request = new RestRequest(Method.GET);
            request.AddHeader("X-Cel-Partner-Token", _configuration["CelsiusApi:PrivateApiKey"]);
            request.AddHeader("X-Cel-Api-Key", apiKey);

            IRestResponse response = client.Execute(request);
            return response;
        }

    }
}
