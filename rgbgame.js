var squaresNo = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDis = document.querySelector("#colorDis");
var msgDis = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var playAgainBtn = document.querySelector("#playAgain");
var modeBtn = document.querySelectorAll(".mode");

inicio();

function inicio(){    
    setBtn();    
    setUpSquares();
    reset();    
}//ends inicio

//define squares
function setUpSquares() {       
    for(var i = 0; i < squares.length; i++) { 
        console.log(colors.length);
        //give events to all square
        squares[i].addEventListener ("click" , function() {
            //Get the color picked
            var clickColor = this.style.backgroundColor;
            console.log(clickColor);
            // Compare Color
            if(pickedColor === clickColor){
                msgDis.textContent = "Correct !";
                changeColors(pickedColor)
                playAgainBtn.textContent = "Play Again?";
                h1.style.backgroundColor = pickedColor;
            } else {
                    msgDis.textContent = "Try Again";
                this.style.backgroundColor ="#232323";
            }
        });
    }
}

//define mode buttons
function setBtn(){
    for(var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click" , function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Hard" ? squaresNo = 6: squaresNo = 3;//this is an if
            reset();
        })
    }
}
//reset squares and buttons
function reset() {
    colors = getRandomColor(squaresNo);
    pickedColor = pickColor();
    colorDis.textContent = pickedColor;
    playAgainBtn.textContent = "New Colors?";
    msgDis.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        //give colors to all square
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

playAgainBtn.addEventListener ("click" , function() { 
    reset();
});

//Gives the same color to all squares
function changeColors(pColor) {
    for(var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = pColor;
    }
}

//Get a random Color from the array
function pickColor() {
   var random = colors[Math.floor(Math.random() * colors.length)];
   return random;
}

//Generate random colors 
function getRandomColor(num) {
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(generateColor())
    }
    //return the values in the array
    return arr;
}

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}