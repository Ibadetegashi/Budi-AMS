using System.Collections.Generic;

namespace AMS.API.Models
{
    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Image { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
