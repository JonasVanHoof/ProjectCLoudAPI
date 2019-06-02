using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
        //        Id = 1,
        //        Firstname = "Jonas",
        //        Lastname = "Van Hoof",
        //        Age = 19,
        //        Gender = "male"
        //    };
        //    context.Add(autoOwner1);
        //    var autoOwner2 = new Owner()
        //    {
        //        Id = 2,
        //        Firstname = "Joren",
        //        Lastname = "Verdyck",
        //        Age = 18,
        //        Gender = "male"
        //    };
        //    context.Add(autoOwner2);
        //    context.SaveChanges();
        //    return context.Owner.ToList();
        //}

        [HttpGet]
        public List<Owner> GetAllOwners()
        {
            return context.Owner.ToList();
        }

        [Route("id={id}")]
        [HttpGet]
        public ActionResult<Owner> getOwnerById(int id)
        {
            var theOwner = context.Owner.Find(id);
            return theOwner;
        }
        [HttpDelete]
        public IActionResult DeleteOwner(int id)
        {
            var theOwner = context.Owner.Find(id);
            if (theOwner == null)
            {
                return NotFound();
            }
            context.Remove(theOwner);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPut]
        public ActionResult<Owner> UpdateOwner([FromBody] Owner owner)
        {
            var update = context.Owner.Find(owner);
            if (update == null)
                return NotFound();

            update.Age = owner.Age;
            update.Firstname = owner.Firstname;
            update.Lastname = owner.Lastname;
            update.Gender = owner.Gender;

            context.SaveChanges();
            return Ok(update);
        }
        /*[HttpGet]
        public List<Owner> GetAllOwners(string firstname, string lastname, string sort, int? page, int lenght = 2, string dir = "asc")
        {
            IQueryable<Owner> query = context.Owner;
            if (!string.IsNullOrWhiteSpace(firstname))
                query = query.Where(o => o.Firstname == firstname);
            if (!string.IsNullOrWhiteSpace(lastname))
                query = query.Where(o => o.Lastname == lastname);
            if(page.HasValue)
                query = query.Skip(page.Value * lenght);
            query = query.Take(lenght);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "firstname":
                        if (dir == "asc")
                            query = query.OrderBy(o => o.Firstname);
                        else if (dir == "desc")
                            query = query.OrderByDescending(o => o.Firstname);
                        break;
                    case "lastname":
                        if (dir == "asc")
                            query = query.OrderBy(o => o.Firstname);
                        else if (dir == "desc")
                            query = query.OrderByDescending(o => o.Firstname);
                        break;
                }
            }
            return query.ToList();
        }*/
    }
}