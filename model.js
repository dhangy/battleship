
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
    this.AIguesses = 0;
    this.AItries = false;
    this.shipsPerEach = 5;



}

function Ship(size, location, shipName){
    this.size = size;
    this.location = location;
    this.sunk = false;
    this.hits = 0;
    this.shipName = shipName;

}

function initPlayerShips(playerShips){
    //set the values for size and location and create the player ships;
    playerShips.carrier = new Ship(5, [], "Carrier");
    playerShips.battleShip = new Ship(4, [], "Battleship");
    playerShips.cruiser = new Ship(3, [],"Cruiser");
    playerShips.submarine = new Ship(3, [], "Submarine");
    playerShips.destroyer = new Ship(2, [], "Destroyer");
    playerShips.shipsPlaced = 0;
    playerShips.shipsSunk = 0;
    playerShips.lastHitCoordinates = [];
    randomPlacement = false;
}

function initComputerShips(computerShips){
    //create the values for the computer ships
    computerShips.carrier = new Ship(5, [], "Carrier");
    computerShips.battleShip = new Ship(4, [], "Battleship");
    computerShips.cruiser = new Ship(3, [], "Cruiser");
    computerShips.submarine = new Ship(3, [], "Submarine");
    computerShips.destroyer = new Ship(2, [], "Destroyer");
    computerShips.shipsSunk = 0;
    computerShips.lastHitCoordinates = [];
    computerShips.lastHitShipSunk = false;
    computerShips.firstHitCoordinates = [];
    computerShips.hasHitPlayer = false;
}

function playerShips(){
    this.shipsSunk;
    this.carrier;
    this.battleShip;
    this.cruiser;
    this.submarine;
    this.destroyer;
    this.shipsPlaced;
    this.hasHitPlayer;
    this.lastHitCoordinates;
    this.randomPlacement;
}

function computerShips(){
    this.shipsSunk;
    this.carrier;
    this.battleShip;
    this.cruiser;
    this.submarine;
    this.destroyer;
    this.firstHitCoordinates;
    this.lastHitCoordinates;
    this.lastHitShipSunk;
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

function placeShip(ship, row, col, alignment, grid){
    var shipLen;
    var size = ship.size;
    if(ship.size == null) {
        shipLen = size;
    }
    else {
        shipLen = ship.size;
    }

if (GridCheck(row, col,shipLen,alignment,grid) !== false){
    if (alignment == "horizontal") {

        for(var i = 0; i < shipLen; i ++){
            grid[row][col+i] = "="
            ship.location.push([row, col+i]);
                }

            }
    else if (alignment == "vertical") {

        for(var i = 0; i < shipLen; i ++){
            grid[row+i][col] = "="
            ship.location.push([row+i, col]);
                }
            }
        }
        else if (GridCheck(row, col,shipLen,alignment,grid) == false){
            return false;
        }
    }
function launchMissile(row,col,grid,enemy){
    var missile;
    if(row < 0 || col < 0 || row > 9 || col > 9) {
        missile = "again";
    }
    else if(grid[row][col] == "X" || grid[row][col]== "O"){
        if(enemy == computerShips){
        alert("Already Launched Missile to this Point!");
    }
        missile = "again";

        }

    else if (grid[row][col] == "") {
        console.log("miss");
        gridMiss(row,col,grid);
        missile = "miss";

    }
    else if (grid[row][col] == "=") {
        console.log("hit")
        if(grid == computerGrid){
            playSound();
        }
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


function GridCheck(row, col, size, alignment,turnGrid,){
    if (row < 10 && col < 10) {

        if (alignment == "horizontal") {
            if((col+size) > 10){
                if(randomPlacement == false){
                // alert("IM BORKED!");
            }
                return false;
            }
            else {
            for(var i = 0; i < size; i ++){
                if (turnGrid[row][col+i] == "="){
                    if (randomPlacement == false){
                    // alert("Invalid Ship Placement");
                }
                    return false;
                }
            }
        }
    }
        else if (alignment == "vertical") {

            if(turnGrid[row+size] > 10){
                // alert("OUT OF BOUNDS!");
                return false;
                }
            for(var i = 0; i < size; i ++){
                if (turnGrid[row+i][col] !== ""){
                    // alert("Invalid Ship Placement");
                    return false;
                }
            }
        }
    }
    else {
        // alert("OUT OF BOUNDS!");
        return false;
    }
}

function markShipHit(turnShips,coordinates){
   for (var ship in turnShips){
        var shipLen = turnShips[ship].size;
        for(var i = 0; i < shipLen; i++) {
            var shipLocation = turnShips[ship].location[i].toString();
            var coordinate = coordinates.toString();
                if(coordinate == shipLocation){
                    turnShips[ship].hits++;

                        if (turnShips[ship].hits == turnShips[ship].size){
                            turnShips[ship].sunk = true;
                            playSink();
                            if(turnShips == playerShips){
                            computerShips.firstHitCoordinates = [];
                            computerShips.lastHitCoordinates = [];
                            computerShips.lastHitShipSunk = true;
                            alert("They sunk your " + playerShips[ship].shipName + "!");
                            }
                            else {
                                alert('You sunk their ' + computerShips[ship].shipName + "!");
                            }
                            AIguesses = 0;
                            turnShips.shipsSunk++;
                            isGameOver(turnShips);


                        }
                return;
                }
            }
        }
    }


function testPlacement(grid, turnShips){

}

function isGameOver(turnShips){
    if(turnShips.shipsSunk >= 5) {
        if (turnShips == playerShips){
            alert('They sunk all your ships! Oh no! They Won!');
            setWinRecord("computerWins");

        }
        else if (turnShips == computerShips){
        alert("You sunk all of their ships! You Won!");
        setWinRecord("playerWins");
    }
        game.gameComplete = true;
    }
}



function generatePoint(){
    return Math.floor(Math.random() * 10) + 0;
}

function hasHitPlayer(){
    computerShips.hasHitPlayer = true;
}
