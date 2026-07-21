using System.Collections.Generic;

namespace RetailInventory.Models
{
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        // Navigation Property
        public List<Product> Products { get; set; } = new();
    }
}