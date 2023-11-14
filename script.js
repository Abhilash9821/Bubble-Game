var time=60;
var gamescore=0;
var hitrn=0;


function makebubble(){
    var clutter= " ";
for(var i =1; i<=168; i++){
    var rn= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`; 
}
document.querySelector(".pbtm").innerHTML= clutter
}

function run(){
 var interval = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#time").textContent=time;
        }
        else{
            clearInterval(interval);
            document.querySelector(".pbtm").innerHTML=`<h4>Game over</h4> <h2>Your Score is ${gamescore}</h2>`;
            document.querySelector("#hitbox").innerHTML=0;
        }
    },1000)
}

function hit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitbox").innerHTML=hitrn
}

function updatescore(){
    gamescore += 10;
    document.querySelector("#score").textContent=gamescore;
    
}

document.querySelector("#p-btm")
.addEventListener("click",function(details){
    var key=Number(details.target.innerHTML)
    if(key === hitrn){
        console.log("hi")
        hit();
        makebubble();
        updatescore();

    }
   
    
})

hit();
run();
makebubble();