using portal_cursos.api.Infra.Data;
using portal_cursos.api.Model.Repository.Interfaces;
using portal_cursos.api.Model;
using Microsoft.EntityFrameworkCore;
using portal_cursos.api.Controllers.Objects;

namespace portal_cursos.api.Model.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> Login(LoginRequest loginRequest)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginRequest.Email && u.Senha == loginRequest.Senha);

            if (user == null)
                throw new Exception("Email ou senha inválidos.");

            return user;
        }

        public async Task<User> Cadastrar(CadastroRequest cadastroRequest)
        {
            var novoUsuario = new User
            {
                Nome = cadastroRequest.Nome,
                Email = cadastroRequest.Email,
                Senha = cadastroRequest.Senha
            };

            _context.Users.Add(novoUsuario);
            await _context.SaveChangesAsync();

            return novoUsuario;
        }
    }
}
