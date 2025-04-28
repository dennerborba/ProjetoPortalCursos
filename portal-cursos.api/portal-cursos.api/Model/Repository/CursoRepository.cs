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

        
        public async Task<Curso> BuscarCursoID(int cursoID)
        {
            var lCurso = await _cursoDbContext.Cursos.FirstOrDefaultAsync(a => a.Id == cursoID);
            if (lCurso == null) 
            {
                return lCurso;
            }

            throw new Exception("Curso não encontrado.");
        }
    }
}
