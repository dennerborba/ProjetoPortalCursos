using Microsoft.EntityFrameworkCore;
using portal_cursos.api.Model;

namespace portal_cursos.api.Infra.Data
{
    public class CursoDbContext : DbContext
    {
        public CursoDbContext(DbContextOptions<CursoDbContext> options) : base(options) { }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Curso> Cursos { get; set; }
    }
}
