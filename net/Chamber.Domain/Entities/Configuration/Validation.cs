using Chamber.Domain.Enums;

namespace Chamber.Domain.Entities.Configuration;

public class Validation
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Script { get; set; }
    public string ErrorMessage { get; set; }
    public EntityType EntityType { get; set; }
    public ErrorType ErrorType { get; set; }
}