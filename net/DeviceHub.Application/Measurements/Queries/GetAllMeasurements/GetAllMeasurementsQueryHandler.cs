using MediatR;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Chamber.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Chamber.Application.Measurements.Queries.GetAllMeasurements;

public class GetAllMeasurementsQueryHandler : IRequestHandler<GetAllMeasurementsQuery, MeasurementsListModel>
{
    private readonly IDataDbContext _dbContext;
    private readonly IMapper _mapper;

    public GetAllMeasurementsQueryHandler(IDataDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }
    public Task<MeasurementsListModel> Handle(GetAllMeasurementsQuery request, CancellationToken cancellationToken)
    {
        var vm = new MeasurementsListModel();
        var results = _dbContext.Measurement.ToList();
        vm.Measurements.AddRange(_mapper.Map<List<MeasurementModel>>(results));
        return Task.FromResult(vm);
    }
}