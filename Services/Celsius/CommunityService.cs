using MyCelsius.Models.Community;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCelsius.Services.Celsius
{
    public interface ICommunityService
    {
        Top100Model GetTop100(int currentCelBalance);
    }

    public class CommunityService : ICommunityService
    {
        private readonly ICelsiusApiService _celsiusApiService;

        public CommunityService(ICelsiusApiService celsiusApiService)
        {
            _celsiusApiService = celsiusApiService;
        }

        public Top100Model GetTop100(int currentCelBalance)
        {
            Top100Model top100Model = new Top100Model() { CurrentRank = 101 };
            var result = _celsiusApiService.GetResultFromCelsiusPublicApi(Constants.CelsiusTop100Url);
            dynamic data = JsonConvert.DeserializeObject(result.Content);
            int rank = 1;
            int celAmount = 0;
            int lastCelAmount = 0;

            foreach (var top100Item in data["result"])
            {
                celAmount = Convert.ToInt32(top100Item["CEL"]);
                
                if (currentCelBalance == celAmount || (currentCelBalance > celAmount && currentCelBalance < lastCelAmount))
                {
                    top100Model.CurrentRank = rank;
                }
                rank++;

                lastCelAmount = celAmount;
            }

            top100Model.CelNeededToTop100 = celAmount - currentCelBalance;

            return top100Model;
        }
    }
}
