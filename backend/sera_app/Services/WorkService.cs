
using sera_app.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace sera_app.Services
{
    public class WorkService:IWorkService
    {
        private readonly string _connectionString;
        
        public WorkService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task Add(Work work)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("AddWork", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("id", work.id));
                cmd.Parameters.Add(new SqlParameter("description", work.description));
                cmd.Parameters.Add(new SqlParameter("salary", work.salary));
                cmd.Parameters.Add(new SqlParameter("type", work.type));
                await cmd.ExecuteNonQueryAsync();
                connection.Close();
            }
        }
        public async Task Update(Work work)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("UpdateWork", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("id", work.id));
                cmd.Parameters.Add(new SqlParameter("description", work.description));
                cmd.Parameters.Add(new SqlParameter("salary", work.salary));
                cmd.Parameters.Add(new SqlParameter("type", work.type));
                await cmd.ExecuteNonQueryAsync();
                connection.Close();
            }
        }


        public async Task<List<Work>> getAll()
        {
            List<Work> workList = new List<Work>();
            SqlDataAdapter da = new SqlDataAdapter();
            DataTable dt = new DataTable();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("GetAllWork",connection);
                cmd.CommandType = CommandType.StoredProcedure;
                
                da.SelectCommand = cmd;
                da.Fill(dt);
                connection.Close();  

            }
            foreach(DataRow row in dt.Rows)
            {
                Work work = new Work()
                {
                    id = Convert.ToString(row["id"]) ?? "",
                    description = row["description"]!= DBNull.Value ? Convert.ToString(row["description"]):"",
                    salary = row["salary"]!=DBNull.Value ? Convert.ToDouble(row["salary"]):null,
                    type = row["type"] != DBNull.Value ? Convert.ToString(row["type"]) :""
                };
               workList.Add(work);
            }

            return workList;
        }

        public async Task Delete(string id)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("DeleteWork", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("id", id));     
                await cmd.ExecuteNonQueryAsync();
                connection.Close();
            }
        }

        public Work GetById(string id)
        {
            Work work = new Work();
            SqlDataAdapter da = new SqlDataAdapter();
            DataTable dt = new DataTable();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("GetWorkById", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("id", id));
                da.SelectCommand = cmd;
                da.Fill(dt);
                connection.Close();

            }
            foreach (DataRow row in dt.Rows)
            {

                work.id = Convert.ToString(row["id"]) ?? "";
                work.description = row["description"] != DBNull.Value ? Convert.ToString(row["description"]) : "";
                work.salary = row["salary"] != DBNull.Value ? Convert.ToDouble(row["salary"]) : null;
                work.type = row["type"] != DBNull.Value ? Convert.ToString(row["type"]) : "";
            }

            return work;
            
        }
    }
}
