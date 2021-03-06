using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Helpers;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
         Task<PagedList<User>> GetUsers(UserParams userParamsr);
         Task<User> GetUser(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForUser(int userId);
         Task<Like> GetLike(int userId, int recipientId);
         Task<Message> GetMessage(int id);
         Task<PagedList<Message>> GetMessageForUser(MessageParams messageParams);
         Task<IEnumerable<Message>> GetMessagesThread(int userId, int recipientId);
    }
}