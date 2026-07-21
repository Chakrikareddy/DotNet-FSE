using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Read JWT settings
var jwtKey = builder.Configuration.GetValue<string>("Jwt:Key")
             ?? throw new Exception("JWT Key not found in appsettings.json");

var jwtIssuer = builder.Configuration.GetValue<string>("Jwt:Issuer")
                ?? throw new Exception("JWT Issuer not found");

var jwtAudience = builder.Configuration.GetValue<string>("Jwt:Audience")
                  ?? throw new Exception("JWT Audience not found");

// Add services
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = jwtIssuer,
            ValidAudience = jwtAudience,

            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtKey))
        };
    });

// Configure Authorization
builder.Services.AddAuthorization();

var app = builder.Build();

// Configure HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();