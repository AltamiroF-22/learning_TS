export class Company {
  public readonly name: string; // public is redundant
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (
      let collaborator = 0;
      collaborator < this.collaborators.length;
      collaborator++
    ) {
      console.log(this.collaborators[collaborator]);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super("OutFit Relogios", "11.111.111/0001");
  }

  public popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    if (!collaborator) {
      return null;
    }
    return collaborator;
  }
}

//"method 2"
export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    protected readonly cpf: string
  ) {}
}

const company1 = new Udemy();
const collaborator1 = new Collaborator("Altamiro", "Júnior", "123.456.789-00");
const collaborator2 = new Collaborator(
  "Ashyley",
  "Caterinque",
  "345.478.789-06"
);
const collaborator3 = new Collaborator(
  "Camille",
  "Broflosvisk",
  "173.436.799-39"
);

company1.addCollaborator(collaborator1);
company1.addCollaborator(collaborator2);
company1.addCollaborator(collaborator3);

// company1.showCollaborators();

const removedCollaborator = company1.popCollaborator();
console.table(removedCollaborator)
