// Runs schema.sql against the database in DATABASE_URL.
import { readFile } from 'node:fs/promises';
import { pool } from './pool.js';

const sql = await readFile(new URL('./schema.sql', import.meta.url), 'utf8');

try {
  await pool.query(sql);
  console.log('Schema applied.');
} catch (err) {
  console.error('Migration failed:', err.message || err.code);
  process.exitCode = 1;
} finally {
  await pool.end();
}
