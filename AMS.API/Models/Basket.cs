using System.Collections.Generic;

namespace AMS.API.Models
{
    public class Basket
    {
        public Basket()
        {
            BasketItems = new List<BasketItem>();
        }
        public int Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public ICollection<BasketItem> BasketItems { get; set; }
    }
}
