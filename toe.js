let boxes = document.querySelectorAll(".box")
let turn = 0

let wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

let flag = true

let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let but = document.getElementById("but1")
let forms = document.getElementById("forms")
let pl1 = document.getElementById("pl1")
let pl2 = document.getElementById("pl2")
let px = document.getElementById("px")
let po = document.getElementById("po")

let p1score = 0
let p2score = 0

const sound = new Audio("tools/sound.mp3")
const game = new Audio("tools/game.mp3")
const drew = new Audio("tools/drew.mp3")


const resetgame = () => {
    turn = 0
    flag = true
    boxes.forEach((box) => {
        box.innerHTML = ""
        box.style.color = "black"
        box.style.backgroundColor = "white"
    })
}

const checkWin = () => {
    for (let i = 0; i < wins.length; i++) {
        let [a, b, c] = wins[i]


        if (
            boxes[a].innerHTML &&
            boxes[a].innerHTML === boxes[b].innerHTML &&
            boxes[a].innerHTML === boxes[c].innerHTML 
        ) {
            sound.pause()
            game.play()

            let color = boxes[a].innerHTML === "X" ? "greenyellow" : "purple"

            boxes[a].style.backgroundColor = color
            boxes[b].style.backgroundColor = color
            boxes[c].style.backgroundColor = color

            boxes[a].style.color = "white"
            boxes[b].style.color = "white"
            boxes[c].style.color = "white"

            if (boxes[a].innerHTML === "X") {
                p1score++
                score1.innerHTML = p1score
            } else {
                p2score++
                score2.innerHTML = p2score
            }

            flag = false
            return true
        }
    }
    return false
}

const boxClick = (box) => {
    if (!flag) {
        resetgame()
        return
    }

    if (box.innerHTML !== "") return

    if (turn % 2 === 0) {
        box.innerHTML = "X"
        box.style.color = "black"
    } else {
        box.innerHTML = "O"
        box.style.color = "red"
    }

    sound.play()
    turn++

    if (checkWin()) return

    if (turn === 9) {
        sound.pause()
        drew.play()
        flag = false
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => boxClick(box))
})

but.addEventListener("click", () => {
    if (pl1.value.length >= 3 && pl2.value.length >= 3) {
        forms.classList.value = "formed"
        px.innerHTML = pl1.value
        po.innerHTML = pl2.value
        resetgame()
    } else if (pl1.value.length === 0 || pl2.value.length === 0) {
        alert("Please enter your names")
    } else {
        alert("Please enter correct names")
    }
})
