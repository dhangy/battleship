
function computerRandomGuess(model){
    var grid = model.playerGrid;
    var enemy = model.playerShips;
    if(model.computerShips.hasHitPlayer == true){
        computerSmartGuess(model);
       return;
}
    var row = generatePoint();
    var col = generatePoint();
    console.log(row,col);
    var missile = launchMissile(row,col,grid,enemy);
    if (missile == "again"){
        computerRandomGuess(model);
    }
    else if (missile == "hit") {
        var hitCoordinates = [row,col];
        computerShips.firstHitCoordinates.push(hitCoordinates);
        computerShips.lastHitCoordinates.push(hitCoordinates);
        hasHitPlayer();
    }
    generatePlayerGrid(model);
}

function computerSmartGuess(model){
    var grid = model.playerGrid;
    var enemy = model.playerShips;
    var newCoordinate = [];
    var lastHitLength = model.computerShips.lastHitCoordinates.length
    var row = model.computerShips.lastHitCoordinates[lastHitLength-1][0];
    var col = model.computerShips.lastHitCoordinates[lastHitLength-1][1];
    var random = Math.floor(Math.random() * 4) + 1

        switch(random) {
            case 1:
                var missile = launchMissile(row+1,col,grid,enemy);
                newCoordinate = [row+1,col];
                break;
            case 2:
                var missile = launchMissile(row-1,col,grid,enemy);
                newCoordinate = [row-1,col];
                break;
            case 3:
                var missile = launchMissile(row,col+1,grid,enemy);
                newCoordinate = [row,col+1];
                break;
            case 4:
                var missile = launchMissile(row,col-1,grid,enemy);
                newCoordinate = [row, col-1];
            }
            if(model.AItries == true && model.AIguesses >=10){
                model.computerShips.hasHitPlayer = false;
                model.computerShips.lastHitCoordinates = [];
                model.computerShips.firstHitCoordinates = [];
                model.AItries = false;
                console.log("bigPROBLEM");
                computerRandomGuess(model);

            }
            if(model.AIguesses >=10){
                model.computerShips.lastHitCoordinates = [];
                var first = model.computerShips.firstHitCoordinates[0];
                model.computerShips.lastHitCoordinates.push(first);
                model.AIguesses = 0;
                model.AItries = true;
                computerSmartGuess(model);
            }
            else if(missile == "again" && model.AIguesses < 10){
                model.AIguesses++;
                console.log(model.AIguesses);
                computerSmartGuess(model);

            }
            else if (missile == "hit") {
                model.AIguesses = 0;
                if (model.computerShips.lastHitShipSunk == true){
                    model.computerShips.lastHitShipSunk = false;
                    model.computerShips.hasHitPlayer = false;
                }
                else {
                model.computerShips.lastHitCoordinates.push(newCoordinate);
            }
    }
    generatePlayerGrid(model);
}

function turnController(){

}
