/**
 * EventsRepository class to handle CRUD operations for events in the database.
 * It uses the SQLite database connection provided during initialization.
 * The class provides methods to create, update, retrieve, and delete events from the 'eventos' table.
 * Each method returns a promise that resolves with the result of the database operation.
 * @returns {void}
 */
export class EventsRepository {
    constructor(db) {
        this.db = db;
        this.tableName = "eventos";
    }

    async create(data) {
        const { nome, data_evento, descricao } = data;
        const result = await this.db.run(
            `INSERT INTO ${this.tableName} (nome, data_evento, descricao) VALUES (?, ?, ?)`,
            [nome, data_evento, descricao]
        );
        return result.lastID; // Returns the auto-incremented ID
    }

    async update(data) {
        const { id, nome, data_evento, descricao } = data;
        const result = await this.db.run(
            `UPDATE ${this.tableName} SET nome = ?, data_evento = ?, descricao = ? WHERE id = ?`,
            [nome, data_evento, descricao, id]
        );
        return result.changes > 0;
    }

    async getAll() {
        return await this.db.all(`SELECT * FROM ${this.tableName}`);
    }

    async delete(id) {
        const result = await this.db.run(
            `DELETE FROM ${this.tableName} WHERE id = ?`,
            [Number(id)]
        );
        return result.changes > 0;
    }
}