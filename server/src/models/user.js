import { pool } from '../db/pool.js';

export async function getUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const res = await pool.query(query, values);
    return res.rows[0];
}

export async function createUser(username, email, passwordHash) {
    const query = 'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *';
    const values = [username, email, passwordHash];
    const res = await pool.query(query, values);
    return res.rows[0];
}

export async function getUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    const res = await pool.query(query, values);
    return res.rows[0];
}
