/**
 * Wraps an async route handler to catch any errors and forward them to the
 * Express error-handling middleware via next(err).
 *
 * @param {Function} fn - Async route handler function
 * @returns {Function} Express middleware that catches async errors
 */
function asyncHandler(fn) {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next)
	}
}

module.exports = { asyncHandler }
