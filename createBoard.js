function createBoard(modelGrid,gridType) {
    var table = '';
     var size = modelGrid.length;
    var rcounter = 0;
    for(var r = 0; r < size; r++){
        table += '<tr>';
        rcounter++;
        for(var c = 0; c < size; c++){
            rcounter++;
            var tileStatus = "";
                if (modelGrid[r][c] == "="){
                    tileStatus = "ship";
                }
                if(modelGrid[r][c] == "X"){
                    tileStatus = "hit";
                }
                if(modelGrid[r][c] == "O") {
                    tileStatus = "miss"
                }

            if (rcounter%2 == 0){
                table+= '<td class="blue_two gameboardCells ' + gridType + ' '+ tileStatus +'" data-x=' + r + ' data-y=' + c + '>' +  '</td>';

            }
            else {
                table+= '<td class="blue_one gameboardCells '+ gridType + ' ' + tileStatus +'" data-x=' + r + ' data-y=' + c + '>' + '</td>';
            }
        }
            table+= '</tr>';
    }
    return '<table class="grid">' + table + '</table>';
}

function createComputerBoard(model,gridType) {
    var table = '';
    var grid = model.computerGrid;
     var size = grid.length;
    var rcounter = 0;
    for(var r = 0; r < size; r++){
        table += '<tr>';
        rcounter++;
        for(var c = 0; c < size; c++){
            rcounter++;
            var tileStatus = "";

                if(grid[r][c] == "X"){
                    tileStatus = "hit";
                }
                if(grid[r][c] == "O") {
                    tileStatus = "miss"
                }

            if (rcounter%2 == 0){
                table+= '<td class="blue_two gameboardCells ' + gridType + ' '+ tileStatus +'" data-x=' + r + ' data-y=' + c + '>' +  '</td>';

            }
            else {
                table+= '<td class="blue_one gameboardCells '+ gridType + ' ' + tileStatus +'" data-x=' + r + ' data-y=' + c + '>' + '</td>';
            }
        }
            table+= '</tr>';
    }
    return '<table class="grid">' + table + '</table>';
}

function createHeader(){
    var table = '';
    var row = 10;
    var rcounter = 0;

    for(var r = 0; r< row; r++) {
        table +='<tr>';
            if (rcounter == 0) {
                for(var c = 0; c < 10; c++){
                    table += '<td>' + String.fromCharCode(65 + c) + '</td>';
                    }
                }
            else {
                table += '<td>'+ r +'<td>'
            }
    }
    return '<table class = "header">' + table + '</table>'
}

function playerGridClick(model){
    var cells = document.getElementsByClassName('playerTable');
    for (var i = 0; i < cells.length; i++){
        cells[i].addEventListener("click", function playerGridEvent(e) {
            console.log("IT WORKED!");

            var y = e.target.dataset.y;
            var x = e.target.dataset.x;
            var contents = "(" + x + "," + y + ")";
            this.innerHTML = contents;
            this.className += " hit";
            model.lastClickedPlayerRow = parseInt(x);
            model.lastClickedPlayerColumn = parseInt(y);

            });
        }
    }

    function computerGridClick(model){
        var cells = document.getElementsByClassName('computerTable');
        for (var i = 0; i < cells.length; i++){
            cells[i].addEventListener("click", function(e) {
                console.log("IT WORKED!");
                var y = e.target.dataset.y;
                var x = e.target.dataset.x;
                var contents = "(" + x + "," + y + ")";
                this.innerHTML = contents;
                launchMissile(x,y,model.computerGrid,model.computerShips);
                generateComputerGrid(model);
                model.lastClickedComputerRow = parseInt(x);
                model.lastClickedComputerColumn = parseInt(y);
                computerRandomGuess(model);

                });
            }
        }


function selectorEvent(){
    var e = document.getElementById("choiceSelect");
    e.addEventListener("change", function(e) {
        var value = e.target.selectedOptions[0].value;
        var header = document.getElementById("choice")
        header.innerHTML = value;

    });

}

function shipButtonClick(model){
    var buttons = document.getElementsByClassName("shipButtons");
    for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
        var shipName = this.id;
        var header = document.getElementById("shipChoice");
        header.innerHTML = name;
        model.selectedShip = model.playerShips[shipName];
        model.lastClickedButton = shipName;

    });
}
}

function orientationButtonClick(model){
    var buttons = document.getElementsByClassName("orientationButtons");
    for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
        var name = this.id;
        var header = document.getElementById("orientationChoice");
        header.innerHTML = name;
        model.selectedOrientation = name;

        });
    }
}

function placeShipButtonClick(model){
    var placeShipButton = document.getElementById("placeShipButton");
    placeShipButton.addEventListener("click", function (e){
        var ship = model.selectedShip;
        var coordinates = model.lastClickedPlayerSquare;
        var row = model.lastClickedPlayerRow;
        var col = model.lastClickedPlayerColumn;
        var alignment = model.selectedOrientation;
        var playerGrid = model.playerGrid;
        placeShip(ship, row, col, alignment, playerGrid);
        model.playerShips.shipsPlaced++;
        var buttonId =  model.lastClickedButton+"Bttn";
        var buttonImg = model.lastClickedButton;
        disableButtons(buttonId,buttonImg);
        var setupComplete = isSetupStateComplete(model);
        if (setupComplete == true){
            //transition to playState
            clearSetupState(model);
        }
        generatePlayerGrid(model);



    });
}

function disableButtons(buttonId, buttonImg){
    var button = document.getElementById(buttonId);
    button.disabled = true;
    button.className+= "disabledButton";
    buttonImg.className+= "disabledImg";
    document.getElementById(buttonImg).removeEventListener("click", disableButtons, true);

}

function isSetupStateComplete(model){
    if(model.playerShips.shipsPlaced == 5) {
        model.allShipsPlaced = true;
        return true;
    }
    else{
        return false;
    }
}

function clearSetupState(model) {
    generateComputerGrid(model);
    var setupTools = document.getElementById('setupSelections');
    setupTools.className+= 'displayNone';
    //hide the ship buttons
    //hide the alignment buttons
    //make the playerGrid non-clickable
    var grid = document.getElementById('playerBoardContainer');
    grid.className+= 'nonClickable'
    var board = document.getElementById('scoreBoard');
    getScores();
    playStateController(model);
}


function playStateController(model){


}

function generatePlayerGrid(model){
    var playerTable = createBoard(model.playerGrid, "playerTable");
    var playerHeaderTable = createHeader(10,10,);
    var playerGrid = document.getElementById('playerBoardContainer');
    var playerHeader = document.getElementById('playerBoardHeader');
    playerGrid.innerHTML = playerTable;
    playerGridClick(model);
}

function generateComputerGrid(model){
    var computerTable = createComputerBoard(model,"computerTable");
    var computerGrid = document.getElementById('computerBoardContainer');
    computerGrid.innerHTML = computerTable;
    computerGridClick(model);
}

function playerGridNonClick(model){
    //var playerGrid = document.getElementById('playerBoardContainer');
    //playerGrid.removeEventListener('click', playerGridNonClick , false);
        var cells = document.getElementsByClassName('playerTable');
        for (var i = 0; i < cells.length; i++){
            cells[i].removeEventListener("click", playerGridNonClick, false);
            };
        }
function placeShipsRandom(model) {
    var placeRandomButton = document.getElementById("placeRandom");
    placeRandomButton.addEventListener("click", function(e) {
        randomPlayerShipPlacer(model);
        generatePlayerGrid(model);
        clearSetupState(model);
    });
}
function setWinRecord(winner){
    myStorage = window.localStorage;
    var wins = myStorage.getItem(winner);
    console.log(winner);
    wins = parseInt(wins);
    wins++;
    wins.toString();
    myStorage.setItem(winner, wins);
    console.log(wins);
    getScores();

}
function playSound(){
    var sound = new Audio("assets/explosion.wav");
    sound.play();
    sound.currentTime=0;
    console.log("I tried");
}

function playSink() {
    var sound = new Audio("assets/sink.wav");
    sound.play();
    sound.currentTime=0;
    console.log("I tried");
}

function getScores(){
    myStorage = window.localStorage;
    if (myStorage.getItem("playerWins") == null){
        myStorage.setItem("playerWins", "0");
    }
    if (myStorage.getItem("computerWins") == null){
        myStorage.setItem("computerWins", "0");
    }
    var playerWins = myStorage.getItem("playerWins");
    var computerWins = myStorage.getItem("computerWins");
    var string = "Player Wins: " + playerWins + "&nbsp;&nbsp;" + "Computer Wins: " + computerWins;
    var board = document.getElementById('scoreBoard');
    board.innerHTML = string;
}
