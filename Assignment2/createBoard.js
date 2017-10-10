function createBoard(x,y) {
    var table = '';
    var row = x;
    var col = y;
    var rcounter = 0;
    for(r = 0; r < row; r++){
        table += '<tr>';
        rcounter++;
        for(c = 0; c < col; c++){
            rcounter++;
            if (rcounter%2 == 0){
                table+= '<td class ="hit">' +  '</td>';
            }
            else {
                table+= '<td class ="miss">' + '</td>';
            }
        }
            table+= '</tr>';
    }
    return '<table>' + table + '</table>';
}
