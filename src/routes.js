const express = require('express')
const { getDbConnection } = require('./database')
const { asyncHandler } = require('./utils/errorHandler')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('home', { title: 'Recipe App' })
})

router.get('/recipes', asyncHandler(async (req, res) => {
	const db = await getDbConnection()
	const recipes = await db.all('SELECT * FROM recipes')
	res.render('recipes', { recipes })
}))

router.get('/recipes/:id', asyncHandler(async (req, res) => {
	const db = await getDbConnection()
	const recipeId = req.params.id
	const recipe = await db.get('SELECT * FROM recipes WHERE id = ?', [recipeId])
	if (!recipe) {
		return res.status(404).render('recipe', { recipe: null })
	}
	res.render('recipe', { recipe })
}))

router.post('/recipes', asyncHandler(async (req, res) => {
	const db = await getDbConnection()
	const { title, ingredients, method } = req.body
	await db.run('INSERT INTO recipes (title, ingredients, method) VALUES (?, ?, ?)', [title, ingredients, method])
	res.redirect('/recipes')
}))

router.post('/recipes/:id/edit', asyncHandler(async (req, res) => {
	const db = await getDbConnection()
	const recipeId = req.params.id
	const { title, ingredients, method } = req.body
	await db.run('UPDATE recipes SET title = ?, ingredients = ?, method = ? WHERE id = ?', [
		title,
		ingredients,
		method,
		recipeId,
	])
	res.redirect(`/recipes/${recipeId}`)
}))

router.delete('/recipes/:id', asyncHandler(async (req, res) => {
	const db = await getDbConnection()
	const recipeId = req.params.id
	const recipe = await db.get('SELECT * FROM recipes WHERE id = ?', [recipeId])
	if (!recipe) {
		return res.status(404).json({ error: 'Recipe not found' })
	}
	await db.run('DELETE FROM recipes WHERE id = ?', [recipeId])
	res.redirect('/recipes')
}))

router.post('/recipes/:id/delete', asyncHandler(async (req, res) => {
	const db = await getDbConnection()
	const recipeId = req.params.id
	await db.run('DELETE FROM recipes WHERE id = ?', [recipeId])
	res.redirect('/recipes')
}))

module.exports = router
