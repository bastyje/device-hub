using Chamber.Application.Common.Mappings;
using Chamber.Domain.Entities.Data;

namespace Chamber.Application.Measurements.Queries.GetAllMeasurements;

public class MeasurementsListModel : IMapFrom<Measurement>
{
    public List<MeasurementModel> Measurements { get; set; }

    public MeasurementsListModel()
    {
        Measurements = new List<MeasurementModel>();
    }
}