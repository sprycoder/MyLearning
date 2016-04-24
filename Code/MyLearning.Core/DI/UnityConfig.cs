using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyLearning.Core.DI
{
    public static class UnityConfig
    {
        private static readonly Lazy<IUnityContainer> container;

        static UnityConfig()
        {
            container = new Lazy<IUnityContainer>(() => new UnityContainer());
        }

        public static IUnityContainer GetConfiguredContainer()
        {
            return container.Value;
        }
    }
}
