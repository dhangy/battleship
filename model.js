
//objects that i am going to need!
function Game(playerGrid, computerGrid, playerShips, computerShips){

    this.playerGrid = playerGrid;
    this.computerGrid = computerGrid;
    this.playerShips = playerShips;
    this.computerShips = computerShips;
    this.gameComplete = false;
    this.isPlayersTurn = true;
    this.allShipsPlaced = false;
    this.lastClickedPlayerRow = null;
    this.lastClickedPlayerColumn = null;
    this.lastClickedComputerRow = null;
    this.lastClickedComputerColumn = null;
    this.lastClickedButton = null;
    this.selectdShip = null;
    this.selectedOrientation = null;

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
    playerShips.shipsSunk = 0;
}

function initComputerShips(computerShips){
    //create the values for the computer ships
    computerShips.carrier = new Ship(5, []);
    computerShips.battleShip = new Ship(4, []);
    computerShips.cruiser = new Ship(3, []);
    computerShips.submarine = new Ship(3, []);
    computerShips.destroyer = new Ship(2, []);
    computerShips.shipsSunk = 0;
    computerShips.lastHitCoordinates = [];
    computerShips.hasHitPlayer = false;
}

function playerShips(){
    this.shipsSunk;
    this.carrier;
    this.battleShip;
    this.cruiser;
    this.submarine;
    this.destroyer;
}

function computerShips(){
    this.shipsSunk;
    this.carrier;
    this.battleShip;
    this.cruiser;
    this.submarine;
    this.destroyer;
    this.lastHitCoordinates;
    this.hasHitPlayer;
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
    var shipLen;
    var size = ship.size;
    if(ship.size == null) {
        shipLen = size;
    }
    else {
        shipLen = ship.size;
    }

if (GridCheck(row, col,shipLen,alignment,playerGrid) !== false){
    if (alignment == "horizontal") {

        for(var i = 0; i < shipLen; i ++){
            playerGrid[row][col+i] = "="
            ship.location.push([row, col+i]);
                }

            }
    else if (alignment == "vertical") {

        for(var i = 0; i < shipLen; i ++){
            playerGrid[row+i][col] = "="
            ship.location.push([row+1, col]);
                }
            }
        }
    }
function launchMissile(row,col,grid, enemy){
    var missile;
    if (grid[row][col] == "X" || grid[row][col]== "O"){
        alert("Already Launched Missile to this Point!");
        missile = "again";

        }

    else if (grid[row][col] == "") {
        console.log("miss");
        gridMiss(row,col,grid);
        missile = "miss";

    }
    else if (grid[row][col] == "=") {
        console.log("hit")
        gridHit(row,col,grid);
        var coordinates = [row,col];
        markShipHit(enemy,coordinates);
        missile = "hit";

    }
    return missile;
}

function gridHit(row,col,grid) {
    grid[row][col] = "X";
}

function gridMiss(row,col,grid){
    grid[row][col] = "O";
}


function GridCheck(row, col, size, alignment,playerGrid,){
    if (row < 10 && col < 10) {

        if (alignment == "horizontal") {
            if((col+size) > 10){
                alert("IM BORKED!");
                return false;
            }
            else {
            for(var i = 0; i < size; i ++){
                if (playerGrid[row][col+i] == "="){
                    console.log(playerGrid[row][col+i]);
                    alert("Invalid Ship Placement");
                    return false;
                }
            }
        }
    }
        else if (alignment == "vertical") {

            if(playerGrid[row+size] > 10){
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

function markShipHit(turnShips,coordinates){

   for (var ship in turnShips){
        var shipLen = turnShips[ship].size;
        for(var i = 0; i < shipLen; i++) {
            console.log(turnShips[ship].location[i]);
            console.log(ship);
            var shipLocation = turnShips[ship].location[i].toString();
            var coordinate = coordinates.toString();
                if(coordinate == shipLocation){
                    turnShips[ship].hits++;
                        if (turnShips[ship].hits == turnShips[ship].size){
                            turnShips[ship].sunk = true;
                            turnShips.shipsSunk++;
                            isGameOver(turnShips);
                            console.log("Its Sunk!");
                        }
                return;
                }
            }
        }
    }


function testPlacement(grid, turnShips){
    placeShip(turnShips.carrier,3,2,"horizontal",grid);
    placeShip(turnShips.battleShip, 1,0,"horizontal", grid);
    placeShip(turnShips.cruiser, 9,1,"horizontal",grid);
    placeShip(turnShips.submarine, 5, 5,"vertical",grid);
    placeShip(turnShips.destroyer, 8,1,"horizontal",grid);
}

function isGameOver(turnShips){
    if(turnShips.shipsSunk >= 5) {
        alert("GAME IS OVER!");
        game.gameComplete = true;
    }
}

function generatePoint(){
    return Math.floor(Math.random() * 10) + 1;
}

function getLastHitCoordinates() {
    return computerShips.lastHitCoordinates;
}

function setLastHitCoordinates(coordinates){
    computerShips.lastHitCoordinates.push(coordinates);
}
function hasHitPlayer(){
    computerShips.hasHitPlayer = true;
}
