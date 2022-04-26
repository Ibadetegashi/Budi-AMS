using System.Collections.Generic;

namespace AMS.API.Models
{
    public class Option
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<OptionValue> OptionValues { get; set; }
        public ICollection<CategoryOption> CategoryOptions { get; set; }
    }
}
