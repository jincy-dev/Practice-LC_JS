/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    let row = 0;
    let col = 0;
    for(let command of commands){
        switch (command) {
            case "UP":
                row = (row - 1 + n) % n;
                break;
            case "DOWN":
                row = (row + 1) % n;
                break;
            case "LEFT":
                col = (col - 1 + n) % n;
                break;
            case "RIGHT":
                col = (col + 1) % n;
                break;
        }
    }
    return row * n + col
};