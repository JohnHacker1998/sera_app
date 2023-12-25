using Microsoft.AspNetCore.Diagnostics;
using sera_app.Services;
using sera_app.Config;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IWorkService, WorkService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = (int)System.Net.HttpStatusCode.InternalServerError;

        context.Response.ContentType = "application/json";


        var error = context.Features.Get<IExceptionHandlerFeature>();

        if (error != null)
        {
            var errorMessage = new GlobalException
            {
                statusCode = context.Response.StatusCode,
                message = error.Error.Message,
                status = false,
                endpoint = error?.Endpoint?.DisplayName ?? ""

            };

            await context.Response.WriteAsync(JsonConvert.SerializeObject(errorMessage));
        }
    });
});

app.Run();
