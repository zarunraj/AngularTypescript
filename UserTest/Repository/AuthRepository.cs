using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Threading.Tasks;
using UserTest.Models;
using UserTest.ViewModel;

namespace UserTest.Repository
{
    public class AuthRepository : IDisposable
    {
        private AppicationContext _ctx;

        private UserManager<AppUser> _userManager;

        public AuthRepository()
        {
            _ctx = new AppicationContext();
            _userManager = new UserManager<AppUser>(new UserStore<AppUser>(_ctx));
        }

        public async Task<IdentityResult> RegisterUser(UserModel userModel)
        {
            AppUser user = new AppUser
            {
                UserName = userModel.UserName
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);

            return result;
        }

        public async Task<AppUser> FindUser(string userName, string password)
        {
            AppUser user = await _userManager.FindAsync(userName, password);

            return user;
        }
        public async Task<AppUser> FindUser(string id)
        {
            AppUser user = await _userManager.FindByIdAsync(id);

            return user;
        }

        public async Task<IdentityResult> Update(AppUser appUser)
        {
            IdentityResult result = await _userManager.UpdateAsync(appUser);
            return result;
        }

        public void Dispose()
        {
            _ctx.Dispose();
            _userManager.Dispose();

        }
    }
}