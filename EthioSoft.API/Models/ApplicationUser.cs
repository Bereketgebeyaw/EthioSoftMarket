using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EthioSoft.API.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string FullName { get; set; } = string.Empty;
        
        [Column(TypeName = "integer")]
        public UserRole Role { get; set; } = UserRole.Buyer;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public bool IsActive { get; set; } = true;
        
        // Navigation properties
        public virtual ICollection<Software> Softwares { get; set; } = new List<Software>();
        public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
        public virtual ICollection<Download> Downloads { get; set; } = new List<Download>();
        public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
    }
    
    public enum UserRole
    {
        Admin = 0,
        Seller = 1,
        Buyer = 2
    }
} 