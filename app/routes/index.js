const Character = require('../controllers/character');

module.exports = (app) => {
    app.get('/api/characters/:name', Character.read);
};