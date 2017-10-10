

var Game = {
  isGameOver: false;
  playerTurn: 1;
  playerShips:{
    carrier: {
      hP: 5;
      isHit: false;
      isSunk: false;
      coordinates [[x:6, y: "D"], [x:7 , y:"D"], [x:8, y"D"], [x:9,y:"D"], [x:10, y:"D"]];
    }
    battleship: {
      hP: 4;
      coordinates: [[x:5,y:"E"],[x:5,y:"F"],[x:5,y:"G"],[x:5,y:"H"]];
      isHit: true;
      isSunk: false;

    }
    cruiser: {
      hP: 3;
      coordinates: [[x:4,y:"A"],[x:5,y:"A"],[x:6,y:"A"];
      isHit: false;
      isSunk: false;
    }
    submarine: {
      hP: 3;
      coordinates: [[x:8,y:"J"],[x:9,y:"J"],[x:10,y:"J"]];
      isHit: false;
      isSunk: false;
    }
    destroyer: {
      hP: 2;
      coordinates: [[x:1,y:"E"],[x:2,y:"F"]];
      isHit: false;
      isSunk: false;
    }
}

computerShips:{
  carrier: {
    hP: 5;
    coordinates [[x:9,y:"A"],[x:9,y:"B"],[x:9,y:"C"],[x:9,y:"D"],[x:9,y:"E"]];
    isHit: false;
    isSunk: false;
  }
  battleship: {
    hP: 4;
    coordinates: [[x:2,y:"H"],[x:3,y:"H"],[x:4,y:"H"],[x:5,y:"H"]];
    isHit: true;
    isSunk: false;
  }
  cruiser: {
    hP: 3;
    coordinates: [[x:3,y:"A"],[x:3,y:"B"],[x:3,y:"C"]];
    isHit: false;
    isSunk: false;
  }
  submarine: {
    hP: 3;
    coordinates: [[x:6,y:"I"],[x:7,y:"I"],[x:8,y:"I"]];
    isHit: false;
    isSunk: false;
  }
  destroyer: {
    hP: 2;
    coordinates: [[x:6,y:"F"],[x:6,y:"G"]];
    isHit: false;
    isSunk: false;
  }
}

playerPredictions: {
  misses: [[x:1,y:"A"],[x:6,y:"A"],[x:3,y:"D"],[x:5,y:"E"],[x:1,y:"H"],[x:2,y:"I"]];
  hit: [[x:2,y:"H"],[x:3,y:"H"]];
}

computerPredictions: {
  misses: [[x:2,y:"B"],[x:8,y:"B"],[x:6,y:"E"],[x:3,y:"F"],[x:8,y:"G"],[x:2,y:"I"],[x:5,y:"J"]];
  hit: [[x:5,y:"E"]];
}

}


function Ship()
