using Microsoft.AspNetCore.Mvc;
using portal_cursos.api.Controllers.Objects;
using portal_cursos.api.Model.Repository.Interfaces;

namespace portal_cursos.api.Controllers
{
    [ApiController]
    public class CursoController : ControllerBase
    {
        private readonly ICursoRepository _cursoRepository;

        public CursoController(ICursoRepository cursoRepository)
        {
            _cursoRepository = cursoRepository;
        }

        [HttpGet("api/cursos")]
        public IActionResult GetCursos()
        {
            var getCurso = _cursoRepository.Listar().Result;
            return Ok(getCurso);
        }

        [HttpPost("api/cursos/{id}/inscrever")]
        public async Task <IActionResult> Inscrever(int id, [FromHeader] string token)
        {
            if (!int.TryParse(token, out var userId))
            {
                return Unauthorized("Token Inválido!");
            }

            try
            {
                var curso = await _cursoRepository.InscreverUsuario(id, userId);

                var response = new CursoResponse
                {
                    Id = curso.Id,
                    Nome_Curso = curso.Nome_Curso,
                    Descricao = curso.Descricao,
                    Instrutor = curso.Instrutor,
                    UrlImagem = curso.UrlImagem
                };

                return Ok(response);
            } 
            catch (Exception ex) 
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("api/cursos/meus-cursos")]
        public async Task <IActionResult> MeusCursos([FromHeader] string token)
        {
            if (!int.TryParse(token, out var userId))
            {
                return Unauthorized("Token Inválido!");
            }

            try
            {
                var cursos = await _cursoRepository.ObterCursosUsuario(userId);
                
                var response = cursos.Select(c => new CursoResponse
                {
                    Id = c.Id,
                    Nome_Curso = c.Nome_Curso,
                    Descricao = c.Descricao,
                    Instrutor = c.Instrutor,
                    UrlImagem = c.UrlImagem

                }).ToList();
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}
