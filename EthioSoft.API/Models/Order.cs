using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EthioSoft.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        
        [Required]
        public int BuyerId { get; set; }
        
        public int SoftwareId { get; set; }
        
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }
        
        public PaymentStatus PaymentStatus { get; set; } = PaymentStatus.Pending;
        
        [MaxLength(100)]
        public string? PaymentMethod { get; set; }
        
        [MaxLength(200)]
        public string? TransactionId { get; set; }
        
        public DateTime PurchasedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime? PaymentCompletedAt { get; set; }
        
        // Navigation properties
        public virtual ApplicationUser Buyer { get; set; } = null!;
        public virtual Software Software { get; set; } = null!;
    }
    
    public enum PaymentStatus
    {
        Pending,
        Processing,
        Completed,
        Failed,
        Cancelled
    }
} 