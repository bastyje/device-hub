using Microsoft.EntityFrameworkCore;
using Chamber.Domain.Entities.Data;
using Chamber.Application.Common.Interfaces;
using Microsoft.Extensions.Configuration;

#pragma warning restore format

namespace Chamber.Persistence;

public class DataDbContext : DbContext, IDataDbContext
{
    public DataDbContext(IConfiguration configuration, DbContextOptions<DataDbContext> options) : base(options)
    {
        Configuration = configuration;
    }

    public DbSet<Measurement> Measurement { get; set; }
    public IConfiguration Configuration { get; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseNpgsql(Configuration["Data:AppConnection:ConnectionString"]);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("dbo");
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataDbContext).Assembly);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        return base.SaveChangesAsync(cancellationToken);
    }
}