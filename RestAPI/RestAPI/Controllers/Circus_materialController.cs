using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet]
        public List<Circus_material> GetMatterials()
        {
            return context.Material
                //.Include(o => o.owner)
                .ToList();
        }

        [Route("id/{id}")]
        public ActionResult<Circus_material> getMaterialById(int id)
        {
            var theMaterial = context.Material.Find(id);
            if (theMaterial == null)
                return NoContent();
            else
                return theMaterial;
        }
        [HttpDelete]
        public IActionResult DeleteMaterial(int id)
        {
            var theMaterial = context.Owner.Find(id);
            if (theMaterial == null)
            {
                return NotFound();
            }
            context.Remove(theMaterial);
            context.SaveChanges();
            return NoContent();
        }
        [HttpPut]
        public ActionResult<Circus_material> UpdateMaterial([FromBody] Circus_material material)
        {
            var update = context.Material.Find(material);
            if (update == null)
                return NotFound();

            update.Name = material.Name;
            update.Amount = material.Amount;
            update.Categorie = material.Categorie;
            update.Brand = material.Brand;
            update.in_use_date = material.in_use_date;
            update.owner = material.owner;

            context.SaveChanges();
            return Ok(update);
        }
        [HttpGet]
        public List<Circus_material> GetAllMaterials(string name, int? page, string sort, int lenght = 2, string dir = "asc")
        {
            IQueryable<Circus_material> query = context.Material;
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(o => o.Name == name);
            if (page.HasValue)
                query = query.Skip(page.Value * lenght);
            query = query.Take(lenght);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "name":
                        if (dir == "asc")
                            query = query.OrderBy(o => o.Name);
                        else if (dir == "desc")
                            query = query.OrderByDescending(o => o.Name);
                        break;
                }
            }
            return query.ToList();
        }
    }
}