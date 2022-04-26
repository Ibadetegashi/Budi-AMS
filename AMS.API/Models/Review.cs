using System;

namespace AMS.API.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime ReviewDate { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public byte RatingValue { get; set; }
    }
}
