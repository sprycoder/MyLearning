using MyLearning.DataAccess.Impls;
using MyLearning.DataAccess.Interfaces;
using MyLearning.DataAccess.Models;
using System.Web.Http;

namespace MyLearning.API.Controllers
{
    public class AuthorizationController : ApiController
    {
        private readonly IUserRepos _userRepos;

        public AuthorizationController(IUserRepos userRepos)
        {
            _userRepos = userRepos;
        }

        public User Get()
        {
            var userRepo = new UserRepos();
            var name = RequestContext.Principal.Identity.Name;
            var userName = name.Substring(name.LastIndexOf(@"\")+1);
            return userRepo.GetUser(userName);
        }
    }
}
