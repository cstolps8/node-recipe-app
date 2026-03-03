const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

let currentDb = null

async function getTestDbConnection() {
	if (!currentDb) {
		currentDb = await open({
			filename: ':memory:',
			driver: sqlite3.Database,
		})
	}
	return currentDb
}

async function initializeTestDb() {
	// Close any existing connection so each test gets a fresh in-memory database
	if (currentDb) {
		try { await currentDb.close() } catch (_) { /* already closed by test */ }
		currentDb = null
	}
	const db = await getTestDbConnection()
	await createTables(db)
	return db
}

async function createTables(db) {
	// Create the 'recipes' table to store recipe information
	await db.exec(`CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    ingredients TEXT,
    method TEXT
  )`)
}

module.exports = { getTestDbConnection, initializeTestDb }
