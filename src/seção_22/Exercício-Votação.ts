type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _VotationOptions: VotationOption[] = [];

  constructor(public deatils: string) {}

  addVotationOptions(votationOP: VotationOption): void {
    this._VotationOptions.push(votationOP);
  }

  vote(voteIndex: number): void {
    if (!this._VotationOptions[voteIndex]) return;
    this._VotationOptions[voteIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._VotationOptions;
  }
}

class VotationApp {
  private votations: Votation[] = [];
  constructor() {}

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.deatils);
      for (const votationOP of votation.votationOptions) {
        console.log(votationOP.option, votationOP.numberOfVotes);
      }
      console.log("----------------------------");
    }
  }
}

const votation1 = new Votation("what is your favorite color?");
votation1.addVotationOptions({ option: "green", numberOfVotes: 0 });
votation1.addVotationOptions({ option: "red", numberOfVotes: 0 });
votation1.addVotationOptions({ option: "orange", numberOfVotes: 0 });
votation1.vote(2)
votation1.vote(2)
votation1.vote(2)
votation1.vote(2)

const votationAPP = new VotationApp();
votationAPP.addVotation(votation1);
votationAPP.showVotation();
