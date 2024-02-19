
let newColor=document.querySelector("#newColor");
let easy=document.querySelector("#easy")
let hard=document.querySelector("#hard");
let square=document.querySelectorAll(".colorSquare");
let rgb=document.querySelector("#rgbColor")
let answer=document.querySelector("#answer")
let h1=document.querySelector("h1")
let colour=[]
let colorKey

//declaram un empy array pentru a putea stoca fiecare culoare generada random in array-ul repectiv
//astfel cand asginam culurile fiecarui square, asignam o culoare din array




//parcurgem fiecare square si generam astfel 6 culori random pe care le stocam intr-un array


function randomColours() {
  var r = Math.floor((Math.random()) * 255);
  var g = Math.floor((Math.random()) * 255);
  var b = Math.floor((Math.random()) * 255);
  return ("rgb("+r+", "+g+", "+b+")");
}




//asigam culori pentru cele 6 patrate
function assignColours() {
  for(let i=0;i<square.length;i++){
  
    square[i].style.background=colour.push(randomColours())

    colorGuess()
    
  }
}

assignColours()

//stabilim o culoare cheie pentru unu din patrate care sa fie acceasi culoare cu ca din rgbColour
//generam o culoare pentru unul din cele 6 patrate pe care o stocam in array-ul de mai sus, aceast va fi culoarea ce trebuie ghicita
//asignam si culoarea din rgbColor cu cukuoarea pe care trebuie sa o ghicim
function colorGuess(){
let numb=square.length
let randomColorGuess=Math.floor(Math.random()*numb)
colorKey=colour[randomColorGuess]
console.log(colour)

rgb.textContent=colorKey


}


function clickSquare(){
  for(let i=0;i<square.length;i++){
    
    square[i].style.background=colour[i]
    square[i].addEventListener("click", function() {
      if (this.style.background === colorKey) {
 
      answer.textContent="Correct"
    }else{
      answer.textContent="Incorect"
    }
  })
}
}


clickSquare()


function newColors(){
  if(answer.textContent==="Correct"){

      randomColours()
      assignColours()
      clickSquare()

}else  if(answer.textContent==="Incorect"){
    answer.textContent="Try again"
  
}
}

