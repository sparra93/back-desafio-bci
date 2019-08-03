const Characters = require('../models/character');

const read = (req, res) => {
    res.set('Content-Type', 'application/json')
    let character = Characters.getCharacter(req.params.name);

    if (character.length > 0) {
        return res.status(200).send(character);
    }
    return res.status(404).send({
        status: 'error',
        message: 'no character found',
        code: 404,
    });
};

module.exports = {
    read
};
