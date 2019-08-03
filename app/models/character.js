const fs = require('fs');

const load = (name) => {
    try {
        dataBuffer = fs.readFileSync(`./app/data/characters/${name}.json`).toString();
        character = JSON.parse(dataBuffer);
        character.image = loadImg(name);
        return JSON.stringify(character);
    } catch (e) {
        console.log(e)
        return [];
    }
};

const loadImg = (name) => {
    dataBuffer = fs.readFileSync(`./app/data/images/${name}.jpg`);
    return new Buffer(dataBuffer).toString('base64');
}

const getCharacter = (name) => {
    return load(name);
};

module.exports = {
    getCharacter
}