

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using UserTest.Models;

namespace UserTest.Repository
{
    public class GenericRepository<T> : IDisposable where T : BaseEntity
    {
        public AppicationContext CurrentContext { get; set; }
        private readonly IDbSet<T> dbset = null;

        /// <summary>
        /// For initialise context variable and dbset
        /// </summary>
        public GenericRepository()
        {
            CurrentContext = new AppicationContext();
            dbset = CurrentContext.Set<T>();
        }

        /// <summary>
        /// For save the context data into database
        /// </summary>
        public void Commit()
        {
            CurrentContext.SaveChanges();

        }
        public Task<int> CommitAsync()
        {
            return CurrentContext.SaveChangesAsync();

        }
        /// <summary>
        /// Fot adding particulat generic class context data
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public virtual T Add(T entity)
        {
            Contract.Requires(entity != null);

            dbset.Add(entity);
            CurrentContext.SaveChanges();
            return entity;
        }


        /// <summary>
        /// For update the context value
        /// </summary>
        /// <param name="entity"></param>
        public virtual T Update(T entity)
        {
            Contract.Requires(entity != null);

            dbset.Attach(entity);
            CurrentContext.Entry(entity).State = EntityState.Modified;
            CurrentContext.SaveChanges();
            return entity;
        }


        /// <summary>
        /// Get the context data by long id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual T GetById(long id)
        {
            return dbset.Find(id);
        }

        /// <summary>
        /// Get the context data by string id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual T GetById(string id)
        {
            Contract.Requires(id != null);

            return dbset.Find(id);
        }

        /// <summary>
        /// get all context data
        /// </summary>
        /// <returns></returns>
        public virtual IQueryable<T> GetAll()
        {
            return dbset.Where(c => c.RecordStatus == true && c.UserId == Helper.Constants.UserId);
        }



        /// <summary>
        /// delete a particular context data
        /// </summary>
        /// <param name="entity"></param>
        public virtual bool Delete(T entity)
        {
            Contract.Requires(entity != null);

            entity.RecordStatus = false;
            dbset.Attach(entity);
            CurrentContext.Entry(entity).State = EntityState.Modified;
            CurrentContext.SaveChanges();
            return true;
        }
        public virtual bool Delete(int id)
        {
            bool status = false;
            if (id > 0)
            {
                var entity = dbset.Find(id);
                if (entity != null)
                {
                    entity.RecordStatus = false;
                    dbset.Attach(entity);
                    CurrentContext.Entry(entity).State = EntityState.Modified;
                    CurrentContext.SaveChanges();
                    status = true;
                }
            }
            return status;
        }
        public virtual bool Delete(long id)
        {
            bool status = false;
            if (id > 0)
            {
                var entity = dbset.Find(id);
                if (entity != null)
                {
                    entity.RecordStatus = false;
                    dbset.Attach(entity);
                    CurrentContext.Entry(entity).State = EntityState.Modified;
                    CurrentContext.SaveChanges();
                    status = true;
                }
            }
            return status;
        }


        public virtual bool Exists(long id)
        {
            if (id > 0)
            {
                return dbset.Any(c => c.Id == id);
            }
            else
            {
                return false;
            }
        }

        public virtual bool Exists(int id)
        {
            if (id > 0)
            {
                return dbset.Any(c => c.Id == id);
            }
            else
            {
                return false;
            }
        }

        public virtual bool Exists(string id)
        {
            if (!string.IsNullOrEmpty(id))
            {
                return dbset.Any(c => c.Id.Equals(id));
            }
            else
            {
                return false;
            }
        }

        public void Dispose()
        {
            CurrentContext.Dispose();
        }
    }
}