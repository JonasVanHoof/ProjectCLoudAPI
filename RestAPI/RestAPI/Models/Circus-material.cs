using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Model
{
    public class Circus_material
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Amount { get; set; }
        [Required]
        public string Categorie { get; set; }
        public string Brand { get; set; }
        public DateTime in_use_date { get; set; }        
        public ICollection<Owner> owner { get; set; }

    }
}
