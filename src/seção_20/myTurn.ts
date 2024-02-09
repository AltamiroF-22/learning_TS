export class School {
  protected readonly classes: SchoolClass[] = [];
  constructor(
    public readonly role: string,
    public readonly name: string,
    public readonly lastName: string,
    public readonly age: number
  ) {}

  addSchoolCalss(classes: SchoolClass): void {
    this.classes.push(classes);
  }

  showClasses() {
    for (let classroom = 0; classroom < this.classes.length; classroom++) {
      console.log(this.classes[classroom]);
    }
  }
}

export class SchoolClass {
  constructor(public readonly name: string) {}
}

const person1 = new School("Teacher", "Camille", "Wavistovik", 34);
const SchoolClass1 = new SchoolClass("classroom 1");
const SchoolClass2 = new SchoolClass("classroom 5");
const SchoolClass3 = new SchoolClass("classroom 8");
const SchoolClass4 = new SchoolClass("classroom 17");
const SchoolClass5 = new SchoolClass("classroom 22");

person1.addSchoolCalss(SchoolClass1);
person1.addSchoolCalss(SchoolClass2);
person1.addSchoolCalss(SchoolClass3);
person1.addSchoolCalss(SchoolClass4);
person1.addSchoolCalss(SchoolClass5);

person1.showClasses();
