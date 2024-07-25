import * as SQLite from "expo-sqlite";

const DATABASE_NAME = "exemploApp.sqlite";
const SQL_CREATE_ENTRIES = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL)`;

let _db = null;

export default function openDatabase() {
    if (!_db){
        _db = SQLite.openDatabaseSync(DATABASE_NAME);
        _db.withTransactionSync(()=>{
            _db.execSync(SQL_CREATE_ENTRIES)
        });
    }
    return _db;
    }
