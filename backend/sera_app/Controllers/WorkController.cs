using Microsoft.AspNetCore.Mvc;
using sera_app.Models;
using sera_app.Services;

namespace sera_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkController:ControllerBase
    {
        private readonly IWorkService _workService;

        public WorkController(IWorkService workService)
        {
            _workService = workService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllItems()
        {
            List<Work> workList = await _workService.getAll();
            return StatusCode(StatusCodes.Status200OK, workList);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            Work work = new Work();
            work= _workService.GetById(id);
            return StatusCode(StatusCodes.Status200OK,work);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody]Work work)
        {
            Work w = _workService.GetById(work.id);
            if (w != null)
            {
                return StatusCode(StatusCodes.Status409Conflict, "Data already exists!");
            }
            await _workService.Add(work);
            return StatusCode(StatusCodes.Status200OK, "Work is added successfully!");

        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]Work work)
        {
            Work w = _workService.GetById(work.id);
            if (w == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "Data isnot found!");
            }
            await _workService.Update(w);
            return StatusCode(StatusCodes.Status200OK, "Work is updated successfully!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _workService.Delete(id);
            return StatusCode(StatusCodes.Status200OK, "Work is updated successfully!");
        }

    }
}
