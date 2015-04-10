function Grid (height, width) {
  this.width = width;
  this.height = height;
  this.cells = [] //this will be an array of arrays
}

function Cell (x,y, active){
  this.x = x;
  this.y =y ;
  this.active === false;
}

/*
Grid proto createCells
  for loop var rownum from 0 to height from grom grid property
    create new var row assigned empty array
    push row into cells in grid property
    for loop var colnum from 0 to width from grid property
      create new var cell and assign it an instance of the cell function (class) with rownum and col num as arguments
      push cell into current row
*/

Grid.prototype.createCells = function() {        
  for (var rownum=0; rownum < this.height; rownum++) {             //go through every column (ther is 6 of them)
    var row=[];                                                    //create an empty array called row, even though we are looping 6 times the array remains constant
    this.cells.push(row);                                          //cells is an empty array defined above, there is 6 of them, so push 6 cells array into the row array
    for (var colnum=0;colnum < this.width; colnum++) {             //go through every col (there will be 7 in each row)
      var cell = new Cell(rownum,colnum)                           //create a var called cell and assign it the coords of it
      row.push(cell);                                              //push into the row array every single cell
    }
  }
};


//A prototype which renders the grid
Grid.prototype.renderGrid = function() {
  for (var i=0; i < this.height; i++) {
    var row = $("<div class='row'></div>");
    $( '#grid').append(row);
    for (var j=0;j < this.width; j++) {
      var cell = $("<div class='cell'></div>");
      row.append(cell);
    }
  }
};


Grid.prototype.CheckActiveCell = function(x,y) {

switch (new Date().getDay()) {
    case 0:
        ((x + 1), y) === Cell.active;
        break;
    case 1:
        ((x + 2), y) === Cell.active;
        break;
    case 2:
        ((x + 3), y) === Cell.active;
        break;
    case 3:
        ((x + 4), y);
        break;
    case 4:
        day = ((x - 5), y);
        break;
    case 5:
        day = ((x - 6), y);
        break;
    }


}






Grid.prototype.CellActiveRED = function() {
  $('.cell').click(function(e) {
  $(this).addClass('red');
   });
}
}

Grid.prototype.CellActiveBlue = function() {
  $('.cell').click(function(e) {
  $(this).addClass('blue');
   });
}
}






