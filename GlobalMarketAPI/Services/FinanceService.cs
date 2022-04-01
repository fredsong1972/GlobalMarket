﻿using Newtonsoft.Json;
using GlobalMarketAPI.Models;
using GlobalMarketAPI.Settings;

namespace GlobalMarketAPI.Services
{
    public class FinanceService : IFinanceService
    {
        private readonly HttpClient _httpClient;
        const string QuoteURL = "v6/finance/quote";


        public FinanceService(YahooFinanceSettings settings)
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("X-API-KEY", new [] { settings.APIKey});
            _httpClient.BaseAddress = new Uri(settings.BaseURL ?? "");
        }

        public async Task<Quote> GetQuote(string symbol)
        {
            var url = QuoteURL + $"?symbols={symbol}";
            try
            {
                var data = await _httpClient.GetStringAsync(url);
                var result = JsonConvert.DeserializeObject<YahooQuoteResponse>(data);
                return result?.QuoteResponse?.Result?.FirstOrDefault() ?? new Quote();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            
        }
    }
}
