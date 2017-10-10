
//objects that i am going to need!
function Game(playerGrid, computerGrid, playerShips, computerShips){

    this.playerGrid = playerGrid;
    this.computerGrid = computerGrid;
    this.playerShips = playerShips;
    this.computerShips = computerShips;
    var guessArray = new Array();
    var gameComplete = false;
}


function Ship(size, location){
    this.size = size;
    this.location = location;
    this.sunk = false;
    this.hits = 0;
}

function initPlayerShips(playerShips){
    //set the values for size and location and create the player ships;
    playerShips.carrier = new Ship(5, []);
    playerShips.battleShip = new Ship(4, []);
    playerShips.cruiser = new Ship(3, []);
    playerShips.submarine = new Ship(3, []);
    playerShips.destroyer = new Ship(2, []);
}

function initComputerShips(computerShips){
    //create the values for the computer ships
    computerShips.carrier = new Ship(5, []);
    computerShips.battleShip = new Ship(4, []);
    computerShips.cruiser = new Ship(3, []);
    computerShips.submarine = new Ship(3, []);
    computerShips.destroyer = new Ship(2, []);
}


function playerShips(){
    this.carrier;
    this.battleShip;
    this.cruiser;
    this.submarine;
    this.destroyer;
}

function computerShips(){
    this.carrier;
    this.battleShip;
    this.cruiser;
    this.submarine;
    this.destroyer;
}


//functions that i am going to need!

function initializeGame(){
    playerGrid = createGrid(10,10);
    computerGrid = createGrid(10,10);
    playerShips = new playerShips();
    computerShips = new computerShips();
    initPlayerShips(playerShips);
    initComputerShips(computerShips);
    var game = new Game(playerGrid, computerGrid, playerShips, computerShips);
    return game;

}

function createGrid(col,row) {
    var grid = new Array();
    for (var c  = 0; c < col; c++){
        grid[c] = new Array();
        for (var r = 0; r < row; r++){
            grid[c][r] = "";
        }
    }
    return grid;
}

function placeShip(ship, row, col, alignment, playerGrid){
if (GridCheck(row, col,ship.size,alignment,playerGrid) !== false){
    if (alignment == "horizontal") {

        for(var i = 0; i < ship.size; i ++){
            playerGrid[row][col+i] = "="
            playerShips.carrier.location.push([row, col+i]);
                }

            }
    else if (alignment == "vertical") {

        for(var i = 0; i < ship.size; i ++){
            playerGrid[row+i][col] = "="

                }
            }
        }
    }
function launchMissile(row,col,grid){
    if (grid[row][col] == "X" || grid[row][col]== "O"){
        alert("Already Launched Missile to this Point!");
        return;
    }
    else if (grid[row][col] == "") {

        gridMiss(row,col,grid);
    }
    else if (grid[row][col] == "=") {

        gridHit(row,col,grid);
    }
}

function gridHit(row,col,grid) {
    grid[row][col] = "X"
}

function gridMiss(row,col,grid){
    grid[row][col] = "O"
}

function shipSunk(){
s
}

function getPoint(grid,row,col){
    grid[row][col] = "X"

}

function GridCheck(row, col, size, alignment,playerGrid){

    if (row < 10 && col < 10) {
        //if it is horizontal check to see

        if (alignment == "horizontal") {
            if((row+size) > 10){
                alert("OUT OF BOUNDS!");
                return false;
            }
            else {
            for(var i = 0; i < size; i ++){
                if (playerGrid[row][col+i] !== ""){
                    alert("Invalid Ship Placement");
                    console.log(playerGrid[row][startCol+i]);
                    return false;
                }

            }
        }
    }
        else if (alignment == "vertical") {

            if(playerGrid[col+size] > 10){
                alert("OUT OF BOUNDS!");
                return false;
            }
            for(var i = 0; i < size; i ++){
                if (playerGrid[row+1][col] !== ""){
                    alert("Invalid Ship Placement");
                    return false;
                }
            }

        }
    }
    else {
        alert("OUT OF BOUNDS!");
        return false;
    }
}

//function returnShip(playerShips){
//    for (var ship in playerShips){
//        console.log(ship);
//    }
//}//
