let img = 1;
document.getElementById("bonhomme").insertAdjacentHTML("afterbegin",'<img id="img" src="img/0'+(img++)+'.png" alt="bonhomme" style = "margin-left: 90px" width= "230px">')

let mots = ["VOITURE", "TELEPHONE", "SAC","REUNION", "POMME", "SOURIS","ABEILLE","MIEL","RAT","CHIEN","CHAT","BEBE","MAMAN"]
let mot = mots[Math.floor(Math.random()*mots.length)]
let arMot = mot.split("")

function gameover(){
    clearInterval(chrono)
    document.getElementById("time").innerText = "LOSE"
    document.getElementById("bouttons").remove()
    document.getElementById("img").setAttribute("src","img/07.png")
    document.getElementById("code").insertAdjacentHTML("afterend",'<div id = "gameOver"><p style = "margin: 5px 0px; font-size: 25px"> Vous avez perdu </p></div>') 
    document.getElementById("gameOver").insertAdjacentHTML("beforebegin",'<img src="img/mariolose.gif" style = "margin-top: 15px">') 
    document.getElementById("gameOver").insertAdjacentHTML("beforeend",'<p style = "margin: 0px; font-size: 20px"> Le mot secret était: '+mot+'</p>') 
    document.getElementById("gameOver").insertAdjacentHTML("beforeend",'<button id = "rejouer" style = "text-align: center; background-color: blue; color: white; border-radius: 10%; margin-left: 15%"> Rejouer </button>') 
    document.getElementById("rejouer").addEventListener("click", function(){
        window.location.reload()
    })    
}

console.log(mot);
console.log(arMot);

for(let i=0; i < mot.length; i++){
    document.getElementById("code").insertAdjacentHTML("beforeend",'<span> _ </span>')  // si on veut donner des id numéro: id = "'+i+'"
}

// console.log(document.querySelectorAll("button")[0].innerText);

document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(){

        // arMot.forEach(element => {});

        if(arMot.includes(button.innerText)){

            // document.querySelectorAll("span")[mot.indexOf(button.innerText)].innerText = button.innerText
            // probleme : si le mot contient plusieur fois cette lettre, ça ne va afficher que le premier

            for (let i = 0; i < arMot.length; i++ ){
                if (arMot[i] == button.innerText) {
                    document.querySelectorAll("span")[i].innerText = button.innerText
                }
                // document.querySelectorAll("span")[mot.indexOf(button.innerText,i)].innerText = button.innerText
                // fonctionne, mais crée un bug qui empeche le script de continuer à se lire... 
            } 
        }else{
           document.getElementById("img").setAttribute("src","img/0"+(img++)+".png")
        }

        if(img == 8){

            gameover()
            // alert("la partie est terminée")
            // window.location.reload()
        }
        
        let answer = "";
        
        for (let i = 0; i < arMot.length; i++) {
            answer += document.querySelectorAll("span")[i].innerText
        }
        if (answer == mot) {
            clearInterval(chrono)
            document.getElementById("bouttons").remove()
            document.getElementById("code").insertAdjacentHTML("afterend",'<div id = "win"><p style = "margin: 5px 0px; font-size: 25px"> BRAVO! </p></div>') 
            document.getElementById("win").insertAdjacentHTML("beforeend",'<button id = "rejouer" style = "text-align: center; background-color: blue; color: white; border-radius: 10%; margin-left: 15%"> Rejouer </button>') 
            document.getElementById("rejouer").insertAdjacentHTML("beforebegin",'<img src="img/mariobravo.gif" style = "margin-top: 15px" width = "180px"> <br>') 
            document.getElementById("rejouer").addEventListener("click", function(){
                window.location.reload()
            })

            // alert(" Vous avez gagné ! ;) \n Vous avez trouvé le mot " + answer)
            // alert(" Vous avez fait "+(img-1)+" erreur(s)"+"\n Cliquez pour rejouer")
            // window.location.reload()
        }
        console.log(answer);
    })
})

let seconde = 100

let chrono = setInterval(function() {
    if (seconde > 0) {
    document.getElementById("time").innerText = seconde--
    }    
    if (seconde == 0){
        gameover()
    }
},1000)


