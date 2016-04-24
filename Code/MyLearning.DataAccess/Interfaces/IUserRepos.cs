using MyLearning.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyLearning.DataAccess.Interfaces
{
    public interface IUserRepos
    {
        User GetUser(string userName);
    }
}
