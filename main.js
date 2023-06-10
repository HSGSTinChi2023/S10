let inputs = Array.from(document.getElementsByClassName("number"));
let board = Array(16).fill(null);
let winning = true;
let count4 = 0;
let count6 = 0;
let count7 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;
let count13 = 0;
let count14 = 0;

function start () {
    inputs.forEach(input => {
        input.addEventListener("change", typing);
    })
}

function typing (e) {
    let index = e.target.id;
    console.log(index)
    if(!board[index]) {
        board[index] = e.target.value;
        if(playerHandle()) {

        } else {

        }
    }
}

let submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", submitGame);
function submitGame () {
    for(let i = 0; i < 16; i++) {
        if(board[0] + board[1] + board[2] + board[3] != 38) winning = false;
        if(board[4] + board[5] + board[6] + board[7] != 38) winning = false;
        if(board[8] + board[9] + board[10] + board[11] != 38) winning = false;
        if(board[12] + board[13] + board[14] + board[15] != 38) winning = false;
        if(board[0] + board[4] + board[8] + board[12] != 38) winning = false;
        if(board[1] + board[5] + board[9] + board[13] != 38) winning = false;
        if(board[2] + board[6] + board[10] + board[14] != 38) winning = false;
        if(board[3] + board[7] + board[11] + board[15] != 38) winning = false;
        if(board[0] + board[5] + board[10] + board[15] != 38) winning = false;
        if(board[3] + board[6] + board[9] + board[12] != 38) winning = false;

    }
    for (let i = 0; i< 16; i++)
    {
        if (board[i] == 4) count4 ++;
        if (board[i] == 6) count6 ++;
        if (board[i] == 7) count7 ++;
        if (board[i] == 10) count10 ++;
        if (board[i] == 11) count11 ++;
        if (board[i] == 12) count12 ++;
        if (board[i] == 13) count13 ++;
        if (board[i] == 14) count14 ++;

    }
    if (count4 != 1 || count6 != 1 || count7 != 2 || count10 != 5 || count11 != 1 || count12 !=2 || count13!=1 || count14 != 1)
    {
        winning = false;
    }

    if (winning)
    {
        alert("YOU WON");
    }else{
        alert("INCORRECT")
    }
}


let restartbtn = document.getElementById("restartbtn");
restartbtn.addEventListener("click", restartGame);
function restartGame() {
    winning = true;
    board.fill(null);
    inputs.forEach(input => {
        input.value = "";
    });
}

start();