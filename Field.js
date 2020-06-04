module.exports = class Field {
    constructor(field) {
        this._field = field;
    }

    print() {
        console.log(this._field);
    }

    ///method to generate the field output
    static generateField(height, width, fieldCharacter, hat, hole, pathCharacter) {
        let arr = [];
        for (var i = 0; i < height; i++) {
            arr[i] = [];
            for (var j = 0; j < width; j++) {
                let random = Math.floor(Math.random() * 9);
                if (random == 0) {
                    arr[i][j] = hole;
                } else {
                    arr[i][j] = fieldCharacter;
                }
            }
        }
        arr[0][0] = pathCharacter;
        arr[Math.floor(Math.random() * arr.length)][Math.floor(Math.random() * arr.length)] = hat;
        return arr.join('\n');
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