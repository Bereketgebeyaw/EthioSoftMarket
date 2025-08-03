using System.ComponentModel.DataAnnotations;

namespace EthioSoft.API.Models
{
    public class Review
    {
        public int Id { get; set; }
        
        public int SoftwareId { get; set; }
        
        [Required]
        public int UserId { get; set; }
        
        [Range(1, 5)]
        public int Rating { get; set; }
        
        [MaxLength(1000)]
        public string? Comment { get; set; }
        
        public bool IsApproved { get; set; } = false;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime? UpdatedAt { get; set; }
        
        // Navigation properties
        public virtual Software Software { get; set; } = null!;
        public virtual ApplicationUser User { get; set; } = null!;
    }
} 