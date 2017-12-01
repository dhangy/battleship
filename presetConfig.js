
function shipPreset() {
    var request = new XMLHttpRequest();
    request.open("GET", "presetConfig.json", false);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
    console.log(request.responseText);
    var presetResponse =  JSON.parse(request.responseText);
    if(presetResponse.playerShips[0]["grid"] = "playerGrid"){
    var carrier = presetResponse.playerShips[0];
    placeShip(playerShips.carrier, carrier["row"], carrier["col"], carrier["orientation"], playerGrid, carrier["size"]);
    var battleShip = presetResponse.playerShips[1];
    placeShip(playerShips.battleShip, battleShip["row"], battleShip["col"], battleShip["orientation"], playerGrid, battleShip["size"]);
    var cruiser = presetResponse.playerShips[2];
    placeShip(playerShips.cruiser, cruiser["row"], cruiser["col"], cruiser["orientation"], playerGrid, cruiser["size"]);
    var submarine = presetResponse.playerShips[3];
    placeShip(playerShips.submarine, submarine["row"], submarine["col"], submarine["orientation"], playerGrid, submarine["size"]);
    var destroyer = presetResponse.playerShips[4];
    placeShip(playerShips.destroyer, destroyer["row"], destroyer["col"], destroyer["orientation"],playerGrid, destroyer["size"]);
    var displayMessage = presetResponse["display"];
    var jsonDisplayBox = document.getElementById('jsonStatus');
    jsonDisplayBox.innerHTML = displayMessage;
}
}
