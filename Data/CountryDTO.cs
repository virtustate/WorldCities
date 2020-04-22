using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


namespace WorldCities.Data
{
    public class CountryDTO
    {
        public CountryDTO() { }

        #region Properties
        public int Id { get; set; }

        public string Name { get; set; }

        [JsonPropertyAttribute("iso2")]
        public string ISO2 { get; set; }

        [JsonPropertyAttribute("iso3")]
        public string ISO3 { get; set; }

        public int TotCities { get; set; }
        #endregion
    }
}