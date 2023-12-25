using sera_app.Models;
namespace sera_app.Services
{
    public interface IWorkService
    {
        public Task<List<Work>> getAll();
        public Task Add(Work work);
        public Task Update(Work work);

        public Task Delete(string id);

        public Work GetById(string id);
       
    }
}
