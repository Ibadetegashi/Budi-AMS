namespace AMS.API.Models
{
    public class ProductOptionValue
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int OptionId { get; set; }
        public Option Option { get; set; }
        public int OptionValueId { get; set; }
        public OptionValue OptionValue { get; set; }
    }
}
