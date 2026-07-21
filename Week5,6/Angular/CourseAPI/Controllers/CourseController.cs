using Microsoft.AspNetCore.Mvc;
using CourseAPI.Models;

namespace CourseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private static List<Course> courses = new()
        {
            new Course { Id = 1, Name = "Angular", Code = "ANG101", Credits = 4 },
            new Course { Id = 2, Name = "Java", Code = "JAVA101", Credits = 3 }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(courses);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var course = courses.FirstOrDefault(c => c.Id == id);

            if (course == null)
                return NotFound();

            return Ok(course);
        }

        [HttpPost]
        public IActionResult Post(Course course)
        {
            courses.Add(course);

            return Ok(course);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Course updatedCourse)
        {
            var course = courses.FirstOrDefault(c => c.Id == id);

            if (course == null)
                return NotFound();

            course.Name = updatedCourse.Name;
            course.Code = updatedCourse.Code;
            course.Credits = updatedCourse.Credits;

            return Ok(course);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var course = courses.FirstOrDefault(c => c.Id == id);

            if (course == null)
                return NotFound();

            courses.Remove(course);

            return Ok();
        }
    }
}