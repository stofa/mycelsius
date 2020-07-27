using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCelsius.Models.Community
{
    public class Top100Model
    {
        public int CurrentRank { get; set; }

        public bool IsTop100 => CurrentRank < 101;

        public int CelNeededToTop100 { get; set; }
    }
}
