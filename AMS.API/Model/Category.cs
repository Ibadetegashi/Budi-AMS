using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AMS.API.Model
{
    public class Category
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string Description { get; set; }
        public string Slug { get; set; }
    }
}
