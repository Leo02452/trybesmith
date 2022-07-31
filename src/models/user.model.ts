import { Pool, ResultSetHeader } from 'mysql2/promise';
import UserInterface from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: UserInterface): Promise<UserInterface> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users (username, classe, level, password)
        VALUES (?, ?, ?, ?)`,
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getByName(username: string): Promise<UserInterface> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Users WHERE username=?', [username]);
    const [rows] = result;
    const [user] = rows as UserInterface[];
    return user;
  }
}
