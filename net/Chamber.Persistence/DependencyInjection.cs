using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Chamber.Application.Common.Interfaces;

namespace Chamber.Persistence;

public static class DependencyInjection
{
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<DataDbContext>(options =>
            options.UseNpgsql(configuration["Data:AppConnection:ConnectionString"]));

        services.AddScoped<IDataDbContext>(provider => provider.GetService<DataDbContext>());

        Console.WriteLine("Connected to db...");

        return services;
    }
}