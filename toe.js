let boxes = document.querySelectorAll(".box")
let turn = 0
const sound = new Audio("tools/sound.mp3")
const game = new Audio("tools/game.mp3")
const drew = new Audio("tools/drew.mp3")
let wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let point = 0
let point2 = 0
let flag = true
let but = document.getElementById("but1")
let forms = document.getElementById("forms")
let pl1 = document.getElementById("pl1")
let pl2 = document.getElementById("pl2")
let px = document.getElementById("px")
let po = document.getElementById("po")
let dont_click = false


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!dont_click) {
            if (box.innerHTML == "") {
                if (turn % 2 == 0) {
                    sound.pause()
                    box.innerHTML = "X"
                    sound.play()
                }
                else {
                    sound.pause()
                    box.innerHTML = "O"
                    box.style.color = 'red'
                    sound.play()
                }
                turn += 1
            }
        }

    })
})

const delay = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, time * 1000);
    })
}

async function restart_game() {
    dont_click=true
    game.play()
    await delay(2)
    dont_click=false
    flag = true
    turn = 0
    boxes.forEach((box) => {
        box.innerHTML = ""
        box.style.color = ""
        box.style.backgroundColor = ""
    })
    checkwin()
}


function checkwin() {
    const interval = setInterval(() => {

        for (let i = 0; i < wins.length; i++) {
            if (boxes[wins[i][0]].innerHTML == "X" && boxes[wins[i][1]].innerHTML == "X" && boxes[wins[i][2]].innerHTML == "X") {
                boxes[wins[i][0]].style.backgroundColor = "purple"
                boxes[wins[i][1]].style.backgroundColor = "purple"
                boxes[wins[i][2]].style.backgroundColor = "purple"
                boxes[wins[i][0]].style.color = "white"
                boxes[wins[i][1]].style.color = "white"
                boxes[wins[i][2]].style.color = "white"
                point += 1
                score1.innerHTML = point
                clearInterval(interval)
                flag = false
                restart_game()
            }
            else if (boxes[wins[i][0]].innerHTML == "O" && boxes[wins[i][1]].innerHTML == "O" && boxes[wins[i][2]].innerHTML == "O") {
                boxes[wins[i][0]].style.backgroundColor = "red"
                boxes[wins[i][1]].style.backgroundColor = "red"
                boxes[wins[i][2]].style.backgroundColor = "red"
                boxes[wins[i][0]].style.color = "white"
                boxes[wins[i][1]].style.color = "white"
                boxes[wins[i][2]].style.color = "white"
                point2 += 1
                score2.innerHTML = point2
                clearInterval(interval)
                flag = false
                restart_game()
            }
        }

        if (turn == 9 && flag) {
            clearInterval(interval)
            restart_game()
        }
    }, 300)
}

checkwin()






but.addEventListener("click", () => {
    if (pl1.value.length >= 3 && pl2.value.length >= 3) {
        forms.classList.value = "formed"
        px.innerHTML = pl1.value
        po.innerHTML = pl2.value
    } else if (pl1.value.length === 0 || pl2.value.length === 0) {
        alert("Please enter your names")
    } else {
        alert("Please enter correct names")
    }
})
