using EmployeeAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = GetStandardEmployeeList();

        private static List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>()
            {
                new Employee
                {
                    Id = 1,
                    Name = "John",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(1998,1,10),
                    Department = new Department
                    {
                        Id = 1,
                        Name = "IT"
                    },
                    Skills = new List<Skill>()
                    {
                        new Skill(){Id=1,Name="C#"},
                        new Skill(){Id=2,Name="SQL"}
                    }
                },

                new Employee
                {
                    Id = 2,
                    Name = "Mary",
                    Salary = 60000,
                    Permanent = false,
                    DateOfBirth = new DateTime(1999,4,12),
                    Department = new Department
                    {
                        Id = 2,
                        Name = "HR"
                    },
                    Skills = new List<Skill>()
                    {
                        new Skill(){Id=3,Name="Java"}
                    }
                }
            };
        }

        // GET All Employees
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }

        // GET Employee by Id
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Employee> Get(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return BadRequest("Invalid employee id");

            return Ok(emp);
        }

        // POST Employee
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            employees.Add(employee);

            return Created("", employee);
        }

        // PUT Employee
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Employee> Put([FromBody] Employee employee)
        {
            if (employee.Id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == employee.Id);

            if (emp == null)
                return BadRequest("Invalid employee id");

            emp.Name = employee.Name;
            emp.Salary = employee.Salary;
            emp.Permanent = employee.Permanent;
            emp.Department = employee.Department;
            emp.Skills = employee.Skills;
            emp.DateOfBirth = employee.DateOfBirth;

            return Ok(emp);
        }

        // DELETE Employee
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return BadRequest("Invalid employee id");

            employees.Remove(emp);

            return Ok("Employee deleted successfully");
        }
    }
}