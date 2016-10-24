using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserTest.Models
{
    public class BaseEntity
    {
        [Key]
        public long Id { get; set; }
        [JsonIgnore]
        [StringLength(100)]
        public string CreatedBy { get; set; }
        [JsonIgnore]
        public DateTime? CreatedDate { get; set; }
        [JsonIgnore]
        [StringLength(100)]
        public string ModifiedBy { get; set; }
        [JsonIgnore]
        public DateTime? ModifiedDate { get; set; }
        [JsonIgnore]
        public bool? RecordStatus { get; set; }
        public bool? Active { get; set; }
        [JsonIgnore]
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        [JsonIgnore]
        public virtual AppUser AppUser { get; set; }
        public BaseEntity()
        {
            CreatedDate = DateTime.Now;
            ModifiedDate = DateTime.Now;
            RecordStatus = true;
            Active = true;
            UserId = Helper.Constants.UserId;
        }

    }
}