using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
         Task<IEnumerable<User>> getUsers();
         Task<User> getUser(int id);
    }
}