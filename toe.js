let boxes=document.querySelectorAll(".box")
let turn=0
let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let flag=true
let flags=true
let score1=document.getElementById("score1")
let score2=document.getElementById("score2")
let but=document.getElementById("but1")
let forms=document.getElementById("forms")
let pl1=document.getElementById("pl1")
let pl2=document.getElementById("pl2")
let px=document.getElementById("px")
let po=document.getElementById("po")
let p1score=0
let p2score=0
const sound=new Audio("tools/sound.mp3")
const game=new Audio("tools/game.mp3")
const drew=new Audio("tools/drew.mp3")
const resetgame=()=>{
    turn=0
    boxes.forEach((box)=>{
        box.style.color="black"
        box.style.backgroundColor="white"
        box.innerHTML=""
    })
}

but.addEventListener("click",()=>{
    if (pl1.value.length>=3 && pl2.value.length>=3){
        forms.classList.value="formed"
        px.innerHTML=pl1.value
        po.innerHTML=pl2.value
        boxes.forEach((box)=>{
            box.addEventListener("click",()=>{
                if (flag===false){
                    resetgame()
                    flag=true
                }
                if (box.innerHTML===""){
                    if (turn%2==0){
                        box.innerHTML="X"
                        sound.play()
                    }
                    else{
                        box.innerHTML="O"
                        box.style.color="red"
                        sound.play()
                    }
                    turn+=1
                }
                for (let i=0;i<wins.length;i++){
                    if (boxes[wins[i][0]].innerHTML=="X" && boxes[wins[i][1]].innerHTML=="X" && boxes[wins[i][2]].innerHTML=="X" && flag===true){
                        sound.pause()
                        boxes[wins[i][0]].style.backgroundColor="greenyellow"
                        boxes[wins[i][0]].style.color="white"
                        boxes[wins[i][1]].style.backgroundColor="greenyellow"
                        boxes[wins[i][1]].style.color="white"
                        boxes[wins[i][2]].style.backgroundColor="greenyellow"
                        boxes[wins[i][2]].style.color="white"
                        drew.pause()
                        game.play()
                        p1score+=1
                        score1.innerHTML=p1score
                        flag=false
                    }
                    if (boxes[wins[i][0]].innerHTML=="O" && boxes[wins[i][1]].innerHTML=="O" && boxes[wins[i][2]].innerHTML=="O" && flag===true){
                        sound.pause()
                        boxes[wins[i][0]].style.backgroundColor="purple"
                        boxes[wins[i][1]].style.color="white"
                        boxes[wins[i][1]].style.backgroundColor="purple"
                        boxes[wins[i][2]].style.color="white"
                        boxes[wins[i][2]].style.backgroundColor="purple"
                        boxes[wins[i][0]].style.color="white"
                        drew.pause()
                        game.play()
                        p2score+=1
                        score2.innerHTML=p2score
                        flag=false
                    }
                    if (turn==9 && flag===true && flags===true){
                        sound.pause()
                        drew.play()
                        flags=false
                    }
                } 
        
            })
        })
        
    }
    else if(pl1.value.length===0 || pl2.value.length===0){
        alert("Please enter your names")
    }
    else{
        alert("Please enter correct names")
    }
})






