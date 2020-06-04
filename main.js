const prompt = require('prompt-sync')({sigint: true});
const Field = require('./Field.js');
 

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const temp = [];


//Test progress
const myField = new Field(temp);
console.log(Field.generateField(5, 5, fieldCharacter, hat, hole, pathCharacter));