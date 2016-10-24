using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Web;

namespace UserTest.Helper
{
    public static class Constants
    {
        public static string UserId
        {
            get
            {
                var identity = (ClaimsPrincipal)Thread.CurrentPrincipal;
                var primarySid = identity.Claims.Where(c => c.Type == ClaimTypes.PrimarySid)
                              .Select(c => c.Value).SingleOrDefault();
                return primarySid;
            } 
        }
         
    }
}