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
function gridClick(grid){
    var className = grid;
    var cells = document.getElementsByClassName(className);
    console.log(cells.length);
    for (var i = 0; i < cells.length; i++){
        cells[i].addEventListener("click", function(e) {
            console.log("IT WORKED!");

            var y = e.target.dataset.y;
            var x = e.target.dataset.x;
            var contents = "(" + x + "," + y + ")";
            this.innerHTML = contents;
            this.className += " hit";

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

function shipButtonClick(){
    var buttons = document.getElementsByClassName("shipButtons");
    for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
        var name = this.id;
        var header = document.getElementById("shipChoice");
        header.innerHTML = name;

    });
}
}

function inputBlur(){
    var e = document.getElementById("nameInput");
    console.log(e);
    e.addEventListener("input", function(e){
        var name = e.target.value;
        var header = document.getElementById("nameChoice");
        header.innerHTML = name;
    })
}

function orientationButtonClick(){
    var buttons = document.getElementsByClassName("orientationButtons");
    for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
        var name = this.id;
        var header = document.getElementById("orientationChoice");
        header.innerHTML = name;


        });
    }
}


function moveSignature() {
      var elem = document.getElementById("signatureImg");
      var pos = 250 ;
      var id = setInterval(frame, 2);
      function frame() {
        if (pos == 0) {
          clearInterval (id);
        } else {
          pos--;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
        }
      }
    }
