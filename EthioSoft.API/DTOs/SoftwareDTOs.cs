using System.ComponentModel.DataAnnotations;

namespace EthioSoft.API.DTOs
{
    public class CreateSoftwareRequest
    {
        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [StringLength(2000)]
        public string Description { get; set; } = string.Empty;

        [Range(0, double.MaxValue)]
        public decimal Price { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [StringLength(200)]
        public string? Version { get; set; }

        [StringLength(100)]
        public string? Developer { get; set; }
    }

    public class UpdateSoftwareRequest
    {
        [StringLength(200)]
        public string? Title { get; set; }

        [StringLength(2000)]
        public string? Description { get; set; }

        [Range(0, double.MaxValue)]
        public decimal? Price { get; set; }

        public int? CategoryId { get; set; }

        [StringLength(200)]
        public string? Version { get; set; }

        [StringLength(100)]
        public string? Developer { get; set; }
    }

    public class SoftwareDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string? FileUrl { get; set; }
        public string? FileExtension { get; set; }
        public long FileSize { get; set; }
        public string? Version { get; set; }
        public string? Developer { get; set; }
        public bool IsApproved { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public CategoryDto Category { get; set; } = null!;
        public UserDto User { get; set; } = null!;
        public double AverageRating { get; set; }
        public int ReviewCount { get; set; }
        public int DownloadCount { get; set; }
    }

    public class SoftwareListDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string? Version { get; set; }
        public string? Developer { get; set; }
        public bool IsApproved { get; set; }
        public DateTime CreatedAt { get; set; }
        public CategoryDto Category { get; set; } = null!;
        public UserDto User { get; set; } = null!;
        public double AverageRating { get; set; }
        public int ReviewCount { get; set; }
        public int DownloadCount { get; set; }
    }
} 