/**
 * UsersRepository class to handle CRUD operations for users in the database.
 * It uses the SQLite database connection provided during initialization.
 * The class provides methods to create and retrieve users from the 'users' table.
 * Each method returns a promise that resolves with the result of the database operation.
 * @returns {void}
 */
import bcrypt from 'bcrypt';

export class UsersRepository {
    constructor(db) {
        this.db = db;
        this.tableName = "users";
    }

    async create(data) {
        const saltRounds = 10;
        const encryptedPassword = await bcrypt.hash(plainPassword, saltRounds);
        const { username, email, encryptedPassword } = data;
        const result = await this.db.run(
            `INSERT INTO ${this.tableName} (username, email, password) VALUES ($username, $email, $password)`,
            { $username: username, $email: email, $password: encryptedPassword }
        );
        return result.lastID;
    }

    async findByUsername(username) {
        return await this.db.get(
            `SELECT * FROM ${this.tableName} WHERE username = $username`,
            { $username: username }
        );
    }

    async getAll() {
        return await this.db.all(`SELECT * FROM ${this.tableName}`);
    }
}