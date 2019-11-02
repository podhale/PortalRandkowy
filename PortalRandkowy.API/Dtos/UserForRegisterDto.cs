using System;
using System.ComponentModel.DataAnnotations;

namespace PortalRandkowy.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Nazwa uzytkownika jest wymagana \n")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Hasło jest wymagane \n")]
        [StringLength(12, MinimumLength = 6,  ErrorMessage = "Hasło musi się składać z 6 do 12 znaków")]
        public string Password { get; set; }

         [Required(ErrorMessage = "Nazwa płeć jest wymagana \n")]
        public string Gender { get; set; }

         [Required(ErrorMessage = "Nazwa data urodzenia jest wymagana \n")]
        public DateTime DateOfBirth { get; set; }

         [Required(ErrorMessage = "Nazwa znak zodiaku jest wymagany \n")]
        public string ZodiacSign { get; set; }

         [Required(ErrorMessage = "Nazwa miasta jest wymagana \n")]
        public string City { get; set; }

         [Required(ErrorMessage = "Nazwa państwa jest wymagana \n")]
        public string Country { get; set; }

         [Required(ErrorMessage = "Nazwa płeć jest wymagana \n")]
        public DateTime Created { get; set; } 

         [Required(ErrorMessage = "Nazwa płeć jest wymagana \n")]
        public DateTime LastActive { get; set; } 

        UserForRegisterDto(){
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}