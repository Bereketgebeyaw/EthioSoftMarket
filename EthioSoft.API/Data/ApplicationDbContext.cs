using EthioSoft.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EthioSoft.API.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Software> Softwares { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Download> Downloads { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Configure relationships and constraints
            builder.Entity<Software>()
                .HasOne(s => s.Category)
                .WithMany(c => c.Softwares)
                .HasForeignKey(s => s.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Software>()
                .HasOne(s => s.User)
                .WithMany(u => u.Softwares)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Order>()
                .HasOne(o => o.Buyer)
                .WithMany(u => u.Orders)
                .HasForeignKey(o => o.BuyerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Order>()
                .HasOne(o => o.Software)
                .WithMany(s => s.Orders)
                .HasForeignKey(o => o.SoftwareId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Download>()
                .HasOne(d => d.User)
                .WithMany(u => u.Downloads)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Download>()
                .HasOne(d => d.Software)
                .WithMany(s => s.Downloads)
                .HasForeignKey(d => d.SoftwareId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Review>()
                .HasOne(r => r.User)
                .WithMany(u => u.Reviews)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Review>()
                .HasOne(r => r.Software)
                .WithMany(s => s.Reviews)
                .HasForeignKey(r => r.SoftwareId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
} 