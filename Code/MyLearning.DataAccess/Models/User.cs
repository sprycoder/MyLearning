using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyLearning.DataAccess.Models
{
    public class User
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Password { get; set; }

        public string UserId { get; set; }

        public string Email { get; set; }

        public bool IsAuthenticated { get; set; }
    }
}
