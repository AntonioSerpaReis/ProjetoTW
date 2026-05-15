/**
 * UsersRepository class to handle CRUD operations for users in the database.
 * It uses the SQLite database connection provided during initialization.
 * The class provides methods to create and retrieve users from the 'users' table.
 * Each method returns a promise that resolves with the result of the database operation.
 * @returns {void}
 */
export class UsersRepository {
    constructor(db) {
        this.db = db;
        this.tableName = "users";
    }

    async create(data) {
        const { username, email, encryptedPassword } = data;
        const result = await this.db.run(
            `INSERT INTO ${this.tableName} (username, email, password) VALUES ($username, $email, $password)`,
            { $username: username, $email: email, $password: encryptedPassword }
        );
        return result.lastID;
    }

    async getAll() {
        return await this.db.all(`SELECT * FROM ${this.tableName}`);
    }
}