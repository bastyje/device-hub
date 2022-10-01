using Chamber.Domain.Entities.Data;
using Microsoft.EntityFrameworkCore;
namespace Chamber.Application.Common.Interfaces;

public interface IDataDbContext
{
        DbSet<Measurement> Measurement { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}