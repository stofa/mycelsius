using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCelsius.Services.Celsius
{
    public interface ICommunityService
    {
        void GetTop100();
    }

    public class CommunityService : ICommunityService
    {
        private readonly ICelsiusApiService _celsiusApiService;

        public CommunityService(ICelsiusApiService celsiusApiService)
        {
            _celsiusApiService = celsiusApiService;
        }

        public void GetTop100()
        {
            var result = _celsiusApiService.GetResultFromCelsiusPublicApi(Constants.CelsiusTop100Url);
        }
    }
}
