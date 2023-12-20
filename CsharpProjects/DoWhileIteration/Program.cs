int heroHealth = 10;
int monsterHealth = 15;
Random random = new Random();
int attack = random.Next(1,11);

do{
  attack = random.Next(1,11);
  monsterHealth -= attack;
  Console.WriteLine($"DMG: {attack} || Monster HP: {monsterHealth}");
  if (monsterHealth > 0) {
    attack = random.Next(1,11);
    heroHealth -= attack;
    Console.WriteLine($"DMG: {attack} || Hero HP: {heroHealth}");
  }
} while (heroHealth > 0 && monsterHealth > 0);

Console.WriteLine(heroHealth > monsterHealth ? "Hero Wins!" : "Monster Wins!");
