using System.Collections.Generic;

namespace AMS.API.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Product> Products { get; set; }
        public ICollection<CategoryOption> CategoryOptions { get; set; }
    }
}
