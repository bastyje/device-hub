using Chamber.Domain.Enums;

namespace Chamber.Domain.Entities.Data;

public class Error
{
    public string Id { get; set; }
    public string Message { get; set; }
    public string EntityId { get; set; }
    public ErrorType ErrorType { get; set; }
    public EntityType EntityType { get; set; }
}