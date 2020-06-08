const prompt = require('prompt-sync')({sigint: true});
const Field = require('./Field.js');
 

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
var outputField = Field.generateField(5, 5, fieldCharacter, hat, hole, pathCharacter);

//Test progress
console.log(outputField);
console.log(Field.getCurrentPosition(outputField));
console.log(Field.updateField(Field.getCurrentPosition(outputField), 'l'));