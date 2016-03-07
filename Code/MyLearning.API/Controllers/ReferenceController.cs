using MyLearning.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyLearning.API.Controllers
{
    public class ReferenceController : ApiController
    {
        public IEnumerable<Reference> Get()
        {
            return new List<Reference> {
                new Reference { Item = "Auth0", Description= "Single sign on and Token based authentication", Link = "https://auth0.com/"},
                new Reference { Item = "AngularJS", Description = "AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC etc.", Link = "https://angularjs.org/;https://docs.angularjs.org/api" },
                new Reference { Item = "Twitter Bootstrap", Description = "Bootstrap, a sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.", Link= "http://getbootstrap.com/getting-started/" }
            };
        }
    }
}
