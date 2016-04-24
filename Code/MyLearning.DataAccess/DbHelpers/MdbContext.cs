using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using MyLearning.DataAccess.Models;

namespace MyLearning.DataAccess.DbHelpers
{
    public class MdbContext
    {
        public const string CONNECTION_STRING_NAME = "MyLearning";
        public const string DATABASE_NAME = "MyLearningDB";
        public const string USERS_COLLECTION_NAME = "users";

        // This is ok... Normally, these or the entire BlogContext
        // would be put into an IoC container. We aren't using one,
        // so we'll just keep them statically here as they are 
        // thread-safe.
        private static readonly IMongoClient _client;
        private static readonly IMongoDatabase _database;

        static MdbContext()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["MyLearningDB"].ToString();
            _client = new MongoClient(connectionString);
            _database = _client.GetDatabase(DATABASE_NAME);
        }

        public IMongoClient Client
        {
            get { return _client; }
        }

        public IMongoCollection<User> Users
        {
            get { return _database.GetCollection<User>(USERS_COLLECTION_NAME); }
        }
    }
}