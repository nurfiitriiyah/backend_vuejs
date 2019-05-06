let ships = {
    A: {
        name: 'Aircraft carrier',
        code: 'A',
        size: 25,
        hit: 0
    },
    B: {
        name: 'Battleship',
        code: 'B',
        size: 25,
        hit: 0
    },
    C: {
        name: 'Cruiser',
        code: 'C',
        size:25,
        hit: 0
    },
    D: {
        name: 'Destroyer',
        code: 'D',
        size: 25,
        hit: 0
    }
}
let generateEmptyBoard = [];
var i = 0;
while (i < 12) {
    let generate = [];
    var k = 0;
    while (k < 12) {
        generate.push(" ")
        k++;
    }
    generateEmptyBoard.push(generate)
    i++;
}

function generateBoard() {
    var typeShips = Object.keys(ships);
    var l = 0;

    while (l < typeShips.length) {
        var m = 0;
        while (m < ships[typeShips[l]].size) {
            var foundXPoint = parseInt(Math.random() * 10)
            var foundYPoint = parseInt(Math.random() * 10)
            if (generateEmptyBoard[foundXPoint][foundYPoint] === " ") {
                generateEmptyBoard[foundXPoint][foundYPoint] = ships[typeShips[l]].code
            } else {
                var FH = 0;
                var checkFH = false;
                while(FH < 12){
                    if (generateEmptyBoard[foundXPoint][FH] === " ") {
                        generateEmptyBoard[foundXPoint][FH] = ships[typeShips[l]].code
                        FH = 11;
                        checkFH = true;
                    }else{
                        if (generateEmptyBoard[FH][foundYPoint] === " ") {
                            generateEmptyBoard[FH][foundYPoint] = ships[typeShips[l]].code
                            FH = 11;
                            checkFH = true;
                        }else{
                            FH++;
                        }
                    }
                }
            }
            m++;
        }
        l++;
    }

}

generateBoard();

console.log(generateEmptyBoard)
