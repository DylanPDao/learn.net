string permission = "Manager";
int level = 4;

if (permission.Contains("Admin") && level > 55)
{
  Console.WriteLine("Welcome, Super Admin User");
}
else if (permission.Contains("Admin") && level <= 55)
{
 Console.WriteLine("Welcome, Admin User");
}
else if (permission.Contains("Manager") && level >= 20)
{
 Console.WriteLine("Contact Admin for access");
}
else if (permission.Contains("Manager") && level < 20)
{
 Console.WriteLine("You do not have sufficient privileges");
}
else
{
   Console.WriteLine("You do not have sufficient privileges.");
}
