let count=0
let count1=0
function one(){
let score=document.getElementById("home-score")
count+=1
score.textContent=count
}
function two(){
    let score=document.getElementById("home-score")
    count+=2
    score.textContent=count
    }
function three(){
    let score=document.getElementById("home-score")
    count+=3
    score.textContent=count
}
function oneg(){
    let score=document.getElementById("guest-score")
    count1+=1
    score.textContent=count1
    }
    function twog(){
        let score=document.getElementById("guest-score")
        count1+=2
        score.textContent=count1
        }
    function threeg(){
        let score=document.getElementById("guest-score")
        count1+=3
        score.textContent=count1
    }
