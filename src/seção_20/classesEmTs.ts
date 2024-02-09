export class Company {
  public readonly name: string; // public is redundant
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

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

//"method 2"
export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    protected readonly cpf: string
  ) {}
}

const company1 = new Company("OutFit Relogios", "11.111.111/0001");
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


company1.showCollaborators();
