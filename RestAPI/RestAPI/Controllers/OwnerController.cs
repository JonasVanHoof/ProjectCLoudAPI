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
    public class OwnerController : Controller
    {
        public static List<Owner> owners = new List<Owner>();
    
        public LibraryContext context { get; set; }

        public OwnerController(LibraryContext con)
        {
            context = con;
        }

        [HttpGet]
        public List<Owner> GetAllOwners()
        {
            return context.Owner.ToList();
        }

        [Route("/{id}")]
        [HttpGet]
        public ActionResult<Owner> getOwnerById(int id)
        {
            var theOwner = context.Owner.Find(id);
            return theOwner;
        }
    }
}