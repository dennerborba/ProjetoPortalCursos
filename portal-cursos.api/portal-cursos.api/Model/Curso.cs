using System.ComponentModel.DataAnnotations;

namespace portal_cursos.api.Model
{
    public class Curso
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome_Curso { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public string Instrutor { get; set; }

        public string UrlImagem { get; set; }

        public List<User> Users { get; set; }   
    }
}
