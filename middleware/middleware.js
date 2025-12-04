// Middleware example
module.exports = (req, res, next) => {
    console.log('Middleware in action');
    next();
};