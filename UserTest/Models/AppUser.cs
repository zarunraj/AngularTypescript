using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserTest.Models
{
    public class AppUser: IdentityUser
    {
        public string ProfilePicture { get; set; }
        public string  DisplayName { get; set; }

    }
}