namespace AMS.API.Models
{
    public class CategoryOption
    {
        public int OptionId { get; set; }
        public Option Option { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
