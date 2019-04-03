using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestAPI.Model;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Circus_materialController : Controller
    {
        public static List<Circus_material> materials = new List<Circus_material>();

        public LibraryContext context { get; set; }

       public Circus_materialController(LibraryContext con)
        {
            context = con;
        }

        public List<Circus_material> GetMatterials()
        {
            return context.Material.ToList();
        }

    }
}