using Microsoft.AspNetCore.Mvc;
using portal_cursos.api.Controllers.Objects;
using portal_cursos.api.Model.Repository.Interfaces;
using portal_cursos.api.Model;
using System.Security.Claims;
using System.Text;

namespace portal_cursos.api.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _repository;

        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("api/auth/login")]
        public async Task <IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            try
            {
                var usuario = await _repository.Login(loginRequest);
                return Ok(new LoginResponse() { Token = usuario.Id.ToString() });
            }
            catch (Exception e)
            {
                return ValidationProblem(new ValidationProblemDetails() { Detail = e.Message });
            }
        }

        [HttpPost("api/auth/cadastro")]
        public async Task<IActionResult> Cadastro([FromBody] CadastroRequest cadastroRequest)
        {
            if (!ModelState.IsValid)
            {
                Console.WriteLine("[MODEL INVALID]");
                foreach (var error in ModelState.Values.SelectMany(v => v.Errors))
                {
                    Console.WriteLine($"Erro de validação: {error.ErrorMessage}");
                }

                return BadRequest(ModelState);
            }
            try
            {
                var usuario = await _repository.Cadastrar(cadastroRequest);
                return Ok(new LoginResponse() { Token = usuario.Id.ToString() });
            }
            catch (Exception e)
            {
                Console.WriteLine("[ERRO INTERNO NO CADASTRO]");
                Console.WriteLine(e.ToString());

                return Problem(detail: e.ToString());
            }

        }
    }
}