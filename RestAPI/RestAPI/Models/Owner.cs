using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Model
{
    public class Owner
    {        
        public int Id { get; set; }
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Lastname { get; set; }
        [Required]
        public int Age { get; set; }
        public string Gender { get; set; }
        //[JsonIgnore]
        //public ICollection<Circus_material> material { get; set; }
    }
}
