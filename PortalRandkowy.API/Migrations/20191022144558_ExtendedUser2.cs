using Microsoft.EntityFrameworkCore.Migrations;

namespace PortalRandkowy.API.Migrations
{
    public partial class ExtendedUser2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PaswordSalt",
                table: "Users",
                newName: "PasswordSalt");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PasswordSalt",
                table: "Users",
                newName: "PaswordSalt");
        }
    }
}
