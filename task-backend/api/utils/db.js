import pgPromise from 'pg-promise';
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

const pgp = pgPromise({});
const db = pgp(dbConfig)

export default db;
