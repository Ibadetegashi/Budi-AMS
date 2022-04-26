using System.Collections.Generic;

namespace AMS.API.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Order> Orders { get; set; }
        public ICollection<Address> Addresses { get; set; }
        public ICollection<Review> Reviews { get; set; }
    }
}
