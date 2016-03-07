using MyLearning.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyLearning.API.Controllers
{
    public class GlossaryController : ApiController
    {
        public IEnumerable<Glossary> Get()
        {
            return new List<Glossary> {
                new Glossary { Title = "OWIN", Description= "Open Web Interface for .Net" },
                new Glossary { Title = "JWT", Description = "JSON Web Token" },
                new Glossary { Title = "CORS", Description = "Cross Origin Resource Sharing" }
            };
        }
    }
}
