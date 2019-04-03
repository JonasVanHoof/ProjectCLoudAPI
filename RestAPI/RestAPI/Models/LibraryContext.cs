using Microsoft.EntityFrameworkCore;
using RestAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Models
{
    public class LibraryContext: DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> DBconfig)
                                    : base(DBconfig)
        {}
        public DbSet<Owner> Owner { get; set; }
        public DbSet<Circus_material> Material { get; set; }
    }
}
