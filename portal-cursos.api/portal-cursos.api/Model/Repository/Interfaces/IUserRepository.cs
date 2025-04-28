using portal_cursos.api.Controllers.Objects;
using portal_cursos.api.Model;

namespace portal_cursos.api.Model.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Login(LoginRequest loginRequest);
        Task<User> Cadastrar(CadastroRequest cadastroRequest);
    }
}