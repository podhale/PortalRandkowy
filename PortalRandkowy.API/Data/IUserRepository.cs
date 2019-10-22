using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository
    {
         Task<IEnumerable<User>> getUser();
         Task<User> getUser(int id);
    }
}