using System.Collections.Generic;

namespace AMS.API.Models
{
    public class OrderStatus
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
