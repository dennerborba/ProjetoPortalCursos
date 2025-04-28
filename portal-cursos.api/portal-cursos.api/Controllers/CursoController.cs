using Microsoft.AspNetCore.Mvc;
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

    }
}
