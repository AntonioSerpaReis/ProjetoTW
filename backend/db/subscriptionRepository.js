/**
 * SubscriptionRepository class to handle CRUD operations for subscriptions in the database.
 * It uses the SQLite database connection provided during initialization.
 * The class provides methods to create and retrieve subscriptions from the 'inscricoes' table.
 * Each method returns a promise that resolves with the result of the database operation.
 * @returns {void}
 */
export class SubscriptionRepository {
    constructor(db) {
        this.db = db;
        this.tableName = "inscricoes";
    }

    async create(data) {
        const { evento_id, user_id } = data;
        const result = await this.db.run(
            `INSERT INTO ${this.tableName} (evento_id, user_id) VALUES (?, ?)`,
            [evento_id, user_id]
        );
        return result.lastID;
    }

    async getAll() {
        // You can use a JOIN here to get more info in SQL!
        return await this.db.all(`SELECT * FROM ${this.tableName}`);
    }
}