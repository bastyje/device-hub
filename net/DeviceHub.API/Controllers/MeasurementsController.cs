using Microsoft.AspNetCore.Mvc;
using Chamber.Application.Measurements.Queries.GetAllMeasurements;

namespace Chamber.API.Controllers;

public class MeasurementController : BaseController
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return new OkObjectResult(await Mediator.Send(new GetAllMeasurementsQuery()));
    }
}