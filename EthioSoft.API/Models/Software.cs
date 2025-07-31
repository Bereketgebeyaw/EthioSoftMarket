using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EthioSoft.API.Models
{
    public class Software
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        [MaxLength(2000)]
        public string Description { get; set; } = string.Empty;
        
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        
        [MaxLength(500)]
        public string? FileUrl { get; set; }
        
        [MaxLength(50)]
        public string? FileExtension { get; set; }
        
        public long FileSize { get; set; }
        
        [MaxLength(200)]
        public string? Version { get; set; }
        
        [MaxLength(100)]
        public string? Developer { get; set; }
        
        public int CategoryId { get; set; }
        
        [Required]
        public string UserId { get; set; } = string.Empty;
        
        public bool IsApproved { get; set; } = false;
        
        public bool IsActive { get; set; } = true;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime? UpdatedAt { get; set; }
        
        // Navigation properties
        public virtual Category Category { get; set; } = null!;
        public virtual ApplicationUser User { get; set; } = null!;
        public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
        public virtual ICollection<Download> Downloads { get; set; } = new List<Download>();
        public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
    }
} 