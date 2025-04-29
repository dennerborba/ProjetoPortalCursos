namespace portal_cursos.api.Controllers.Objects
{
    public class CursoResponse
    {
        public int Id { get; set; }
        public string Nome_Curso { get; set; }
        public string Descricao { get; set; }
        public string Instrutor { get; set; }
        public string UrlImagem { get; set; }
    }
}
