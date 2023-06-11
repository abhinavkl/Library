namespace LibraryApp.Models.Library
{
    public static partial class AuthorExt
    {
        public static AuthorDto GetAuthorDto(this Author author)
        {
            return new AuthorDto()
            {
                AuthorId=author.AuthorId,
                AuthorName=author.AuthorName,
                BookIds=author.BookAuthors.Select(i=>i.BookId).ToList(),
                Books=author.BookAuthors.Select(i=>i.Book.GetBookDto()).ToList()
            };
        }

        public static Author GetAuthor(this AuthorDto authorDto)
        {
            return new Author()
            {
                AuthorId = authorDto.AuthorId,
                AuthorName = authorDto.AuthorName,
                BookAuthors=authorDto.BookIds.Select(i=> new BookAuthor()
                {
                    AuthorId=authorDto.AuthorId,
                    BookId=i
                }).ToList()
            };
        }

        public static List<AuthorDto> GetAuthorDtos(this List<Author> authors)
        {
            return authors.Select(i=>i.GetAuthorDto()).ToList();    
        }

    }
    public partial class AuthorDto
    {
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public List<int> BookIds { get; set; }
        public List<BookDto> Books { get; set; }
    }
}
