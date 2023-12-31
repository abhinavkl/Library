﻿using System;
using System.Collections.Generic;

namespace LibraryApp.Models.Library
{
    public partial class BookAuthor
    {
        public int BookAuthorId { get; set; }
        public int BookId { get; set; }
        public int AuthorId { get; set; }

        public virtual Author Author { get; set; }
        public virtual Book Book { get; set; }
    }
}
