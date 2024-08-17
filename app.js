console.log("Welcome To Tic Tac Toe");
let turn = 'X';
let gameover = false;

const changeturn = () => {
    return turn === "X" ? "O" : "X";
}

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 10, 5, 0],
        [3, 4, 5, 10, 15, 0],
        [6, 7, 8, 10, 25, 0],
        [0, 3, 6, 5, 15, 90],
        [1, 4, 7, 15, 15, 90],
        [2, 5, 8, 25, 15, 90],
        [0, 4, 8, 15, 15, 45],
        [2, 4, 6, 15, 15, 135]
    ];

    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " Won";
            gameover = true;
            // document.querySelector(".line").style.width = "30vw";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            checkwin();
            if (!gameover) {
                turn = changeturn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".line").style.transform = "none";
});
