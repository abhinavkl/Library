using LibraryApp.Models.Library;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryApp.Controllers.Library
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly LibraryContext libraryContext;

        public BookController(LibraryContext libraryContext)
        {
            this.libraryContext = libraryContext;
        }

        [HttpGet]
        public IEnumerable<BookDto> Get()
        {
            return libraryContext.Books
                .Include(i => i.BookAuthors).ThenInclude(i => i.Author)
                .Include(i => i.BookCategories).ThenInclude(i => i.Category)
                .Take(100).GetBookDtos();

        }
    }
}
