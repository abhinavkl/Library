namespace LibraryApp.Models.Library
{

    public static class CategoryExt
    {
        public static CategoryDto GetCategoryDto(this Category category)
        {
            return new CategoryDto()
            {
                CategoryId = category.CategoryId,
                CategoryName = category.CategoryName,
                BookIds = category.BookCategories.Select(i => i.BookId).ToList(),
                Books = category.BookCategories.Select(i => i.Book.GetBookDto()).ToList()
            };
        }

        public static Category GetCategory(this CategoryDto categoryDto)
        {
            return new Category()
            {
                CategoryId = categoryDto.CategoryId,
                CategoryName = categoryDto.CategoryName,
                BookCategories = categoryDto.BookIds.Select(i => new BookCategory()
                {
                    CategoryId = categoryDto.CategoryId,
                    BookId = i
                }).ToList()
            };
        }

        public static List<CategoryDto> GetCategoryDtos(this List<Category> categories)
        {
            return categories.Select(i => i.GetCategoryDto()).ToList();
        }

    }

    public partial class CategoryDto
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public List<int> BookIds { get; set; }
        public List<BookDto> Books { get; set; }
    }
}
