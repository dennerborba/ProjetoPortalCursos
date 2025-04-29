using Microsoft.EntityFrameworkCore;
using portal_cursos.api.Model;

namespace portal_cursos.api.Infra.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Curso> Cursos { get; set; }

        // configurar tabelas aqui
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // configurações de mapeamento
        }
    }
}
