using AspNetCoreContentful.Api.Models;
using Contentful.Core;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AspNetCoreContentful.Api.Controllers
{
    [ApiController]
    [Route("api/courses")]
    public class CourseController
    {
        private readonly IContentfulClient _client;
        public CourseController(IContentfulClient client)
        {
            _client = client;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> Get()
        {
            var courses = await _client.GetEntries<Course>();

            return courses;
        }
    }
}
