using RestAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Models
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Owner.Any())
            {
                var autoOwner1 = new Owner()
                {
                    _id = 1,
                    Firstname = "Jonas",
                    Lastname = "Van Hoof",
                    Age = 19,
                    Gender = "male"
                };
                context.Add(autoOwner1);
                var autoOwner2 = new Owner()
                {
                    _id = 1,
                    Firstname = "Joren",
                    Lastname = "Verdyck",
                    Age = 18,
                    Gender = "male"
                };
                context.Add(autoOwner2);
                context.SaveChanges();
            }

        }
    }
}
