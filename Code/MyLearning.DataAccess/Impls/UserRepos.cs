using MongoDB.Driver;
using MyLearning.DataAccess.DbHelpers;
using MyLearning.DataAccess.Interfaces;
using MyLearning.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MyLearning.DataAccess.Impls
{
    public class UserRepos: IUserRepos
    {
        public User GetUser(string userId)
        {
            var context = new MdbContext();
            var user = context.Users.Find(u => u.UserId == userId).FirstOrDefault();
            if (user == null)
                throw new Exception("User is not registered.");
            return new User
            {
                Name = user.Name,
                Email = user.Email,
                UserId = user.UserId,
                IsAuthenticated = true
            };
        }

        public IEnumerable<User> GetAllUsers()
        {
            var context = new MdbContext();
            return context.Users.Find("{}, {_id: 0}").ToList();
        }
    }
}
