using LibraryApp.Data.Library;
using LibraryApp.Data.Shared;
using LibraryApp.Models.Library;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using NuGet.Protocol.Plugins;

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

        [HttpGet("{filters}/{pagination}")]
        public IEnumerable<BookDto> Get(string filters,string pagination)
        {
            try
            {
                var bookFilters = JsonConvert.DeserializeObject<BookFilters>(filters.ToString());
                var bookPagination = JsonConvert.DeserializeObject<Pagination>(pagination.ToString());

                var books= libraryContext.Books
                        .Include(i => i.BookAuthors).ThenInclude(i => i.Author)
                        .Include(i => i.BookCategories).ThenInclude(i => i.Category)
                        .AsQueryable();

                if(bookFilters != null)
                {
                    if (bookFilters.Categories.Count() > 0)
                    {
                        books = (from b in books
                                 where b.BookCategories.Any(i=> bookFilters.Categories.Contains(i.CategoryId))
                                 select b);
                    }
                }

                return books.Take(bookPagination.PageSize).GetBookDtos();
            }
            catch(Exception ex)
            {
                return Array.Empty<BookDto>().AsEnumerable();            
            }
        }
    }
}
