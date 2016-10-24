using System;

namespace UserTest.Models
{
    public class Expenses:BaseEntity
    {
        public string Name { get; set; }
        public Budget Budget { get; set; } = new Budget();
    }


    public class Budget
    {
        public int Min { get; set; } = 0;
        public int Max { get; set; } = 0;
    }
}