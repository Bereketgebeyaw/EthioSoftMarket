using System.ComponentModel.DataAnnotations;

namespace EthioSoft.API.Models
{
    public class Download
    {
        public int Id { get; set; }
        
        [Required]
        public string UserId { get; set; } = string.Empty;
        
        public int SoftwareId { get; set; }
        
        public DateTime DownloadedAt { get; set; } = DateTime.UtcNow;
        
        [MaxLength(45)]
        public string? IpAddress { get; set; }
        
        [MaxLength(500)]
        public string? UserAgent { get; set; }
        
        // Navigation properties
        public virtual ApplicationUser User { get; set; } = null!;
        public virtual Software Software { get; set; } = null!;
    }
} 