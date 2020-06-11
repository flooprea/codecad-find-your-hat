const prompt = require('prompt-sync')({sigint: true});

const Field = require('./Field.js');
 

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const outputField = new Field(Field.generateField(10, 10, fieldCharacter, hat, hole, pathCharacter));
const temp = true;

//Test progress
//console.log(outputField.print()); 
while(true){
    console.log(outputField.print()); 
   //console.log(outputField.getCurrentPosition());
   // console.log(outputField.getHatPosition()); 
  //  if(outputField.getCurrentPosition()==outputField.getHatPosition()){
    //    console.log('win');
   // }

    outputField.updateField(outputField.getCurrentPosition(), prompt('Which way?'));
}