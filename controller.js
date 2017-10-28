initializeGame();
testPlacement();

function computerRandomGuess(){
    var row = generatePoint();    
    var col = generatePoint();
    var grid = playerGrid;
    var enemy = playerShips;
    console.log(row,col);
    var missile = launchMissile(row,col,grid,enemy);
    if (missile == "again"){
        computerRandomGuess();
    }
    else if (missile = "hit") {
        var coordinates = [row,col];
        setLastHitCoordinates(coordinates);
        hasHitPlayer();
    }
}
