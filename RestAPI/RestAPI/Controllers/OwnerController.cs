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

        //[HttpGet]
        //public List<Owner> getDefaultOwners()
        //{
        //    var autoOwner1 = new Owner()
        //    {
        //        _id = 1,
        //        Firstname = "Jonas",
        //        Lastname = "Van Hoof",
        //        Age = 19,
        //        Gender = "male"
        //    };
        //    owners.Add(autoOwner1);
        //    var autoOwner2 = new Owner()
        //    {
        //        _id = 2,
        //        Firstname = "Joren",
        //        Lastname = "Verdyck",
        //        Age = 18,
        //        Gender = "male"
        //    };
        //    owners.Add(autoOwner2);
        //    return owners;
        //}

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