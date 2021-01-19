using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AspNetCoreContentful.Api.Controllers
{
    [ApiController]
    [Route("api/contentful-options")]
    public class ContentfulController
    {
        private readonly IConfiguration _configuration;
        public ContentfulController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("access-token")]
        public ActionResult<dynamic> GetAccessToken()
        {
            return new
            {
                AccessToken = $"{_configuration["ContentfulOptions:DeliveryApiKey"]}"
            };
        }
    }
}
