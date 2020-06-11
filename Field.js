module.exports =
    class Field {
        constructor(field) {
            this._field = field;
        }

        get field() {
            return this._field;
        }
        
        //method to print the field
        print() {
         return this.field.map(row =>
            row.join('')
        ).join('\n');
          }

        ///method to generate the field output
        static generateField(height, width, fieldCharacter, hat, hole, pathCharacter) {
            let arr = [];
            for (var i = 0; i < height; i++) {
                arr[i] = [];
                //assing a random number of holes to the field in random positions
                for (var j = 0; j < width; j++) {
                    let random = Math.floor(Math.random() * 9);
                    if (random == 0) {
                        arr[i][j] = hole;
                    } else {
                        arr[i][j] = fieldCharacter;
                    }
                }
            }
            arr[4][2] = pathCharacter;   // temporarily hard-coded to this value for testing purposes
            arr[0][3] = hat;
            //arr[Math.floor(Math.random() * arr.length)][Math.floor(Math.random() * arr.length)] = hat; //randomly assign the hat to the field
            return arr;
        }
        
        //method to return and array of two elements indicating the current position of the player
         getCurrentPosition() {
            for (var i = 0; i < this.field.length; i++) {
                for (var j = 0; j < this.field[i].length; j++) {
                    if (this.field[i] == '*' || this.field[i][j] == '*') {
                        return [i, j];  
                    }
                }
            }
        }

        getHatPosition(){
            for (var i = 0; i < this.field.length; i++) {
                for (var j = 0; j < this.field[i].length; j++) {
                    if (this.field[i] == '^' || this.field[i][j] == '^') {
                        return [i, j];  
                    }
                }
            }
        }
        
        //this method takes the current position or the player (array of two elements)
            //and the direction indicated by the player and returns the updated position
        updateField(currPosition, direction) {
            if(direction == 'x'){return 'x'}

            if (direction == 'd') {
                currPosition[0]++;
            } else if (direction == 'u') {
                currPosition[0]--;
            }
            else if (direction == 'l') {
                currPosition[1]--;
            }
            else if (direction == 'r') {
                currPosition[1]++;
            }

            if (currPosition[0] < 0 || currPosition[1] < 0) {
                console.log('out of bounds');
            }else{
                this.field[currPosition[0]][currPosition[1]] = '*';      
                console.log(currPosition);       
                return currPosition;
            }
            }
           
        

        //Filed output example
        /*
        
        *,░,░,░,░,░
        ░,░,░,░,░,░,░
        ░,░,░,░,░,░,░
        ^,O,░,░,░,░,░
        ░,░,░,░,░,░,░
        ░,░,O,░,░,O,░
        ░,O,░,░,░,░,░
        */
    }