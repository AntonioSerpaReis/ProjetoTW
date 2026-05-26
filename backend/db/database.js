/**
 * This module initializes the SQLite database for the application.
 * It creates the necessary tables for events, inscriptions, and users if they do not already exist.
 * The database is stored in a file named 'database.sqlite' in the root directory.
 * @returns {void}
*/

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

/**
 * Initializes the SQLite database.
 * Returns a promise with the database instance.
 */
export async function initDB() {
    // Opens a file-based database (database.sqlite)
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    // Create tables if they don't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS eventos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            data_evento TEXT,
            descricao TEXT
        );

        CREATE TABLE IF NOT EXISTS inscricoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            evento_id INTEGER,
            user_id INTEGER,
            data_inscricao DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(evento_id) REFERENCES eventos(id)
        );

        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            email TEXT
        );
    `);

    return db;
}