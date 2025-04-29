namespace portal_cursos.api.Model.Repository.Interfaces
{
    public interface ICursoRepository
    {
        Task<List<Curso>> Listar();
        Task<Curso> InscreverUsuario(int cursoId, int usuarioId);
        Task<List<Curso>> ObterCursosUsuario(int usuarioId);
    }
}
