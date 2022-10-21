// **Consegna**
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// 1 generare la griglia
// 2 numeri nella griglia
// 3 creare click to start
// 4 click della cella

// VARIABLES DECLARATION AND INIZIALIZATION
const container = document.querySelector(".jt-container");
const totalCell = 100;
const inputBtn = document.getElementById("gioca");
const resetBtn = document.getElementById("reset");

// Play button
inputBtn.addEventListener("click", function(){
  //ciclo for per generare i quadratini
  container.innerHTML = "";
  for(let i = 0; i < totalCell; i++){
      squareGenerator(i);
  }
})

//Reset
resetBtn.addEventListener("click", function(){
  container.innerHTML = "";
})

// FUNCTIONS

//Cell generator
function squareGenerator(indexSquare){
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    square.style.width = generateCalcCss();
    square.style.height = generateCalcCss();
    square.innerHTML = indexSquare + 1;
    square.addEventListener("click", clickSquare);
};

// Cell dimensions
function generateCalcCss(){
  return `calc(100% / ${Math.sqrt(totalCell)})`;
};

//Color change if click
function clickSquare(){
  this.classList.add('open');
  console.log ("La cella cliccata è la numero $(``)")
};