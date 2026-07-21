using EmployeesAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class EmployeeController : ControllerBase
    {
        static List<Employee> employees = new()
        {
            new Employee
            {
                Id=1,
                Name="John",
                Department="IT",
                Salary=50000
            },

            new Employee
            {
                Id=2,
                Name="Mary",
                Department="HR",
                Salary=60000
            }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(employees);
        }
    }
}