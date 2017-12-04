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
    console.log(cells.length);
    for (var i = 0; i < cells.length; i++){
        cells[i].addEventListener("click", function(e) {
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
        console.log(cells.length);
        for (var i = 0; i < cells.length; i++){
            cells[i].addEventListener("click", function(e) {
                console.log("IT WORKED!");

                var y = e.target.dataset.y;
                var x = e.target.dataset.x;
                var contents = "(" + x + "," + y + ")";
                this.innerHTML = contents;
                this.className += " hit";
                model.lastClickedComputerRow = parseInt(x);
                model.lastClickedComputerColumn = parseInt(y);

                });
            }
        }


function selectorEvent(){
    var e = document.getElementById("choiceSelect");
    e.addEventListener("change", function(e) {
        console.log(e);
        var value = e.target.selectedOptions[0].value;
        //console.log( e.target.options.selectedIndex.text);
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
        console.log(model.selectedShip);

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
    placeShipButton.addEventListener("click", function(e){
        var ship = model.selectedShip;
        var coordinates = model.lastClickedPlayerSquare;
        var row = model.lastClickedPlayerRow;
        var col = model.lastClickedPlayerColumn;
        var alignment = model.selectedOrientation;
        var playerGrid = model.playerGrid;
        placeShip(ship, row, col, alignment, playerGrid);
        var buttonId =  model.lastClickedButton+"Bttn";
        var buttonImg = model.lastClickedButton;
        disableButtons(buttonId,buttonImg);
        var setupComplete = isSetupStateComplete();
        if (setupComplete = true){

        }




    });
}

function disableButtons(buttonId, buttonImg){
    var button = document.getElementById(buttonId);
    button.disabled = true;
    button.className+= "disabledButton";
    buttonImg.className+= "disabledImg";
    document.getElementById(buttonImg).removeEventListener("click", shipButtonClick, true);

}

function isSetupStateComplete(){
        var completeCounter = 0;
        var buttons = document.getElementsByClassName("shipButtons");
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].disabled = true){
                completeCounter++;
            }
        }
        if (completeCounter = 5){
            return true;
        }
        else{
            return false;
        }

}
function beginPlayState(){

}
