namespace portal_cursos.api.Model.Repository.Interfaces
{
    public interface ICursoRepository
    {
        Task<List<Curso>> Listar();
        Task<Curso> BuscarCursoID(int cursoID);
    }
}
