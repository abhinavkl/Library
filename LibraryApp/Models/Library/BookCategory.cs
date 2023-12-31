﻿using System;
using System.Collections.Generic;

namespace LibraryApp.Models.Library
{
    public partial class BookCategory
    {
        public int BookCategoryId { get; set; }
        public int BookId { get; set; }
        public int CategoryId { get; set; }

        public virtual Book Book { get; set; }
        public virtual Category Category { get; set; }
    }
}
