using Microsoft.EntityFrameworkCore;
using portal_cursos.api.Infra.Data;
using portal_cursos.api.Model.Repository.Interfaces;

namespace portal_cursos.api.Model.Repository
{
    public class CursoRepository : ICursoRepository
    {
        private readonly CursoDbContext _cursoDbContext;

        public CursoRepository(CursoDbContext cursoDbContext)
        {
            _cursoDbContext = cursoDbContext;
        }

        public async Task<List<Curso>> Listar()
        {
            return await _cursoDbContext.Cursos.ToListAsync();
        }

        public async Task<Curso> InscreverUsuario(int cursoId, int usuarioId)
        {
            var usuario = await _cursoDbContext.Users.Include(a => a.Cursos)
                .FirstOrDefaultAsync(a => a.Id == usuarioId);

            var curso = await _cursoDbContext.Cursos.FindAsync(cursoId);

            if (usuario == null || curso == null)
            {
                throw new Exception("Usuário ou curso não encontrado!");
            } 

            if (usuario.Cursos.Contains(curso))
            {
                throw new Exception("Usuário já inscrito neste curso!");
            }

            usuario.Cursos.Add(curso);

            await _cursoDbContext.SaveChangesAsync();

            return curso;
        }

        public async Task<List<Curso>> ObterCursosUsuario(int usuarioId)
        {
            var usuario = await _cursoDbContext.Users.Include(a => a.Cursos)
                .FirstOrDefaultAsync(a => a.Id == usuarioId);

            if (usuario == null)
            {
                throw new Exception("Usuário não encontrado!");
            }

            return usuario.Cursos.ToList();
        }
    }
}
