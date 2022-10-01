using Chamber.Application.Common.Mappings;
using Chamber.Domain.Entities.Data;

namespace Chamber.Application.Measurements.Queries.GetAllMeasurements;

public class MeasurementModel : IMapFrom<Measurement>
{
    public string Id { get; set; }
    public string Name { get; set; }
}