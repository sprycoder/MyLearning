using Microsoft.Practices.Unity;
using MyLearning.Core.DI;
using MyLearning.DataAccess.Impls;
using MyLearning.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Unity.WebApi;

namespace MyLearning.API
{
    public static class WebApiUnityConfig
    {
        public static void RegisterComponents()
        {
            var container = GetConfiguredContainer();

            container.RegisterType<IUserRepos, UserRepos>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }

        internal static IUnityContainer GetConfiguredContainer()
        {
            return UnityConfig.GetConfiguredContainer();
        }
    }
}