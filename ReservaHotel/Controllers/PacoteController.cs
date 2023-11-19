using ReservaHotel.Data;
using ReservaHotel.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace ReservaHotel.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PacoteController : ControllerBase
    {
        private readonly BDContext _dbContext;

        public PacoteController(BDContext dbContext, ILogger<PacoteController> logger)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Pacote pacote)
        {

            if (_dbContext is null) return NotFound();
            if (_dbContext.Pacotes is null) return NotFound();

            foreach (var servico in pacote.Servicos)
            {
                _dbContext.Entry(servico).State = EntityState.Unchanged;
            }



            _dbContext.Pacotes.AttachRange(pacote);




            
            if (pacote.Servicos == null || pacote.Servicos.Count == 0)
                return BadRequest("A lista de serviços está vazia.");

            pacote.ValorPacote = pacote.Servicos.Sum(servico => servico.ValorServico);

            await _dbContext.AddAsync(pacote);
            await _dbContext.SaveChangesAsync();

            foreach (Servico servicoPacote in pacote.Servicos)
            {
                servicoPacote.Pacotes.Add(pacote);
            }

            await _dbContext.SaveChangesAsync();

            var settings = new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            var json = JsonConvert.SerializeObject(pacote, settings);

            return Content(json, "application/json");
        }







        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Pacote>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            
            var pacotes = await _dbContext.Pacotes.Include(p => p.Servicos).ToListAsync();

            var settings = new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            var json = JsonConvert.SerializeObject(pacotes, settings);

            return Content(json, "application/json");
        }





        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Pacote>> Buscar(int id)
        {
            if (_dbContext is null) return NotFound();
                    
            var pacoteBusca = await _dbContext.Pacotes.Include(p => p.Servicos).FirstOrDefaultAsync(p => p.IdPacote == id);
                    
            if (pacoteBusca is null) return NotFound();

            var settings = new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            var json = JsonConvert.SerializeObject(pacoteBusca, settings);

            return Content(json, "application/json");
        }




        //aqui o usuario passa apenas o id do pacote a ser alterado e uma lista com o id dos novos serviços
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(int id, List<int> servicosIds)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Pacotes is null) return NotFound();

            // busca o objto pacote no banco de dados
            var pacoteBusca = await _dbContext.Pacotes.Include(p => p.Servicos).FirstOrDefaultAsync(p => p.IdPacote == id);

            if (pacoteBusca is null) return NotFound();

            _dbContext.Entry(pacoteBusca).State = EntityState.Detached;


            // Cria uma nova lista de serviços com base na lista de IDs dos novos serviços
            //o where busca o servico da tabela Servicos aonde o id é igual ao id da lista
            var servicos = await _dbContext.Servicos.Where(s => servicosIds.Contains(s.IdServico)).ToListAsync();

            //reseta o valor do pacote para 0, para recalcular no foreach
            pacoteBusca.ValorPacote = 0;

            foreach(var servico in servicos)
            {
                pacoteBusca.ValorPacote += servico.ValorServico;
            }

            // passa a lista com os novos servicos
            pacoteBusca.Servicos = servicos;

            // Salva as alterações no banco de dados
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if (_dbContext is null) return NotFound();

            var pacoteBusca = await _dbContext.Pacotes.Include(p => p.Servicos).FirstOrDefaultAsync(p => p.IdPacote == id);

            if (pacoteBusca is null) return NotFound();

            // Exclua os serviços associados manualmente
            //_dbContext.Servicos.RemoveRange(pacoteBusca.Servicos);

            _dbContext.Remove(pacoteBusca);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

    }
}