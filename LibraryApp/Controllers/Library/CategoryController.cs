using LibraryApp.Models.Library;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers.Library
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly LibraryContext libraryContext;

        public CategoryController(LibraryContext libraryContext)
        {
            this.libraryContext = libraryContext;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return libraryContext.Categories.OrderBy(i=>i.CategoryName).ToList();
        }
    }
}
