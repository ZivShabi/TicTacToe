function play() {
    const play = document.getElementById("play").innerHTML = ("המשחק התחיל ")
    let Div = document.querySelector(".TicTacToe")
    Div.style.display = "flex"
    alert("First round the turn starts X"); return
}
let turn // trun = x 
let rules = []
let btns = document.querySelectorAll(".btn")
btns.forEach(b => {
    b.addEventListener("click", btnClick)
})


function btnClick() {
    if (this.textContent != "") return
    if (turn) this.textContent = "O"
    else this.textContent = "X"
    turn = !turn
    if (declaresVictory()) {
        setTimeout(() => {
            alert(declaresVictory() + " This is the winnerof the game")
        }, 5 % 60)
    }
}


function declaresVictory() {
    let btns = document.querySelectorAll(".btn")
    if (btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[2].textContent != "") return true
    else if (btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[5].textContent != "") return true
    else if (btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[8].textContent != "") return true
    else if (btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[8].textContent != "") return true
    else if (btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[6].textContent != "") return true
    else if (btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[6].textContent != "") return true
    else if (btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[7].textContent != "") return true
    else if (btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[8].textContent != "") return true
}