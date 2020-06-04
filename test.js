//let Field = require('./Field.js');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//const myField = new Field(outputArray);
//console.log(myField.print());
let h = 7;
let w = 7;
let arr = []
for(i=0; i<h;i++){
    arr[i] = [];
    for(j=0; j <w; j++){
        let random = Math.floor(Math.random()*9);
        if(random == 0){
            arr[i][j] = hole;    
        }else{
            arr[i][j] = fieldCharacter;    
        }
    }
}
arr[0][0] = pathCharacter;
arr[Math.floor(Math.random() * arr.length)][Math.floor(Math.random() * arr.length)] = hat; 
console.log(arr.join('\n'));