using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace POCApp.Server
{
    public class Rat
    {
        public enum RatType
        {
            Lab,
            Rex,
            Hairless
        }

        public string Name { get; set; }
        public RatType Type { get; set; }
    }
}
