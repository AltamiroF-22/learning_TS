// sINGLETON -gof
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  public connect(): void {
    console.log(`Connecting: ${this.host}, ${this.user}, ${this.password}`);
  }

  public static getDatabase(
    host: string,
    user: string,
    password: string
  ): Database {
    if (Database.database) return Database.database;

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database1 = Database.getDatabase(
  "localhost",
  "root",
  "12343454646980433"
);
const database2 = Database.getDatabase(
  "loaaaaaaaaaaaaa",
  "aaaaaaaaaaaaaa2",
  "1234aaaaaaaaaaa4332"
);

database1.connect();
database2.connect();
