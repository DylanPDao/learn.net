string permission = "Admin|Manager";
int level = 55;

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
