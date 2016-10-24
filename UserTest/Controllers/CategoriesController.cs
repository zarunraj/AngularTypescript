using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using UserTest.Models;
using UserTest.Repository;

namespace UserTest.Controllers
{
    [Authorize]
    public class CategoriesController : ApiController
    {
        CategoryRepository _repo;
        public CategoriesController()
        {
            _repo = new CategoryRepository();
        }
        // GET: api/Categories
        public IEnumerable<Category> GetCategories()
        {
            return _repo.GetAll();
        }

        // GET: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult GetCategory(long id)
        {
            Category category = _repo.GetById(id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategory(long id, Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.Id)
            {
                return BadRequest();
            } 
            try
            {
                _repo.Update(category);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Categories
        [ResponseType(typeof(Category))]
        public IHttpActionResult PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

           _repo.Add(category);

            return CreatedAtRoute("DefaultApi", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult DeleteCategory(long id)
        {
            Category category = _repo.GetById(id);
            if (category == null)
            {
                return NotFound();
            }

            _repo.Delete(id);

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repo.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(long id)
        {
            return _repo.Exists(id);
        }
    }
}