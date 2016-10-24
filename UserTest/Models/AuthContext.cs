using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace UserTest.Models
{
    public class AppicationContext : IdentityDbContext<AppUser>
    {
        public AppicationContext()
        : base("AuthContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = true;
        }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Expenses> Expenseses { get; set; }
    }
}