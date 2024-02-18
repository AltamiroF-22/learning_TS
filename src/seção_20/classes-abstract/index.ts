export abstract class Character {
  protected abstract characterIcon: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number
  ) {}

  attacking(character: Character): void {
    this.warCry();
    character.lossLifePoint(this.attack);
  }

  lossLifePoint(attackStrength: number): void {
    this.life -= attackStrength;

    console.log(
      `${this.characterIcon} ${this.name} now has ${this.life} life points \n`
    );

    this.loser();
  }

  abstract loser(): void;
  abstract warCry(): void;
}

export class Warrior extends Character {
  protected characterIcon = "\u{1F9D9}";

  warCry(): void {
    console.log(`${this.characterIcon}: Tulta munille!`);
  }

  loser(): void {
    if (this.life <= 0) {
      console.log(`${this.characterIcon}: ${this.name} lose!`);
      this.life = 0;
    }
  }
}
export class Monster extends Character {
  protected characterIcon = "\u{1F5FF}";

  warCry(): void {
    console.log(`${this.characterIcon}: Uurah!`);
  }

  loser(): void {
    if (this.life <= 0) {
      console.log(`${this.characterIcon}: ${this.name} lose!`);
      this.life = 0;
    }
  }
}

const warrior = new Warrior("Lancelot", 1500, 1000);
const monster = new Monster("Ice Golem", 100, 5000);

warrior.attacking(monster);
warrior.attacking(monster);
warrior.attacking(monster);

monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
monster.attacking(warrior);
