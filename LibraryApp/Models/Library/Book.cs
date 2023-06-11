using System;
using System.Collections.Generic;

namespace LibraryApp.Models.Library
{
    public partial class Book
    {
        public Book()
        {
            BookAuthors = new HashSet<BookAuthor>();
            BookCategories = new HashSet<BookCategory>();
        }

        public int BookId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string PreviewLink { get; set; }
        public string Publisher { get; set; }
        public DateTime PublishedOn { get; set; }
        public string InfoLink { get; set; }

        public virtual ICollection<BookAuthor> BookAuthors { get; set; }
        public virtual ICollection<BookCategory> BookCategories { get; set; }
    }
}
