﻿using LibraryApp.Data.Library;
using LibraryApp.Data.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryApp.Models.Library
{
    public static partial class BookExt
    {
        public static BookDto GetBookDto(this Book book)
        {
            return new BookDto()
            {
                BookId = book.BookId,
                Title = book.Title,
                Description = book.Description,
                Image = book.Image,
                PreviewLink = book.PreviewLink,
                Publisher = book.Publisher,
                PublishedOn = book.PublishedOn,
                InfoLink = book.InfoLink,
                Authors = book.BookAuthors.Select(i => i.Author.AuthorName).ToList(),
                AuthorIds = book.BookAuthors.Select(i => i.AuthorId).ToList(),
                Categories = book.BookCategories.Select(i => i.Category.CategoryName).ToList(),
                CategoryIds = book.BookCategories.Select(i => i.CategoryId).ToList()
            };
        }

        public static Book GetBook(this BookDto bookDto)
        {
            return new Book()
            {
                BookId = bookDto.BookId,
                Title = bookDto.Title,
                Description = bookDto.Description,
                Image = bookDto.Image,
                PreviewLink = bookDto.PreviewLink,
                Publisher = bookDto.Publisher,
                PublishedOn = bookDto.PublishedOn,
                InfoLink = bookDto.InfoLink,
                BookAuthors = bookDto.AuthorIds.Select(i => new BookAuthor()
                {
                    AuthorId = i,
                    BookId = bookDto.BookId
                }).ToList(),
                BookCategories = bookDto.CategoryIds.Select(i => new BookCategory()
                {
                    CategoryId = i,
                    BookId = bookDto.BookId
                }).ToList()
            };
        }

        public static List<BookDto> GetBookDtos(this IQueryable<Book> books)
        {
            return books.Select(i => i.GetBookDto()).ToList();
        }

        public static BookResult GetBooksResult(this IQueryable<Book> books, BookFilters bookFilters, Pagination pagination)
        {

            if (bookFilters != null)
            {
                if (bookFilters.Categories.Count() > 0)
                {
                    books = (from b in books
                             where b.BookCategories.Any(i => bookFilters.Categories.Contains(i.CategoryId))
                             select b);
                }
            }

            var bookResult = new BookResult();
            bookResult.Filters = bookFilters;
            var totalBooks = books.Count();
            var totalPages = totalBooks / pagination.PageSize+1;
            if (totalBooks % pagination.PageSize == 0)
            {
                totalPages--;
            }
            pagination.PageNumber = Math.Min(pagination.PageNumber, totalPages);
            bookResult.Pagination = new Pagination()
            {
                PageNumber = pagination.PageNumber,
                PageSize = pagination.PageSize,
                TotalPages = totalPages
            };
            var skip=(pagination.PageNumber-1)*pagination.PageSize;
            var take = pagination.PageSize;
            bookResult.Books = books.Skip(skip).Take(take).GetBookDtos();
            return bookResult;
        }
    }

    public partial class BookDto
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string PreviewLink { get; set; }
        public string Publisher { get; set; }
        public DateTime PublishedOn { get; set; }
        public string InfoLink { get; set; }
        public List<int> AuthorIds { get; set; }
        public List<string> Authors { get; set; }
        public List<int> CategoryIds { get; set; }
        public List<string> Categories { get; set; }
    }

    public class BookResult
    {
        public BookResult()
        {
            Books = Array.Empty<BookDto>().ToList();
            Filters = new BookFilters();
            Pagination = new Pagination();
        }
        public List<BookDto> Books { get; set; }
        public BookFilters Filters { get; set; }
        public Pagination Pagination { get; set; }
    }

}
