function Grid (height, width) {
  this.width = width;
  this.height = height;
  this.cells = []
}

function Cell (x,y){
  this.x = x;
  this.y =y ;
}

Grid.prototype.createCells = function() {        
  for (var rownum=0; rownum < this.height; rownum++) {             //go through every column 
    var row=[];                                                     //create an empty array and put every column inside column
    this.cells.push(row);                                           //cells is an empty array defined above, push this empty array into the row array
    for (var colnum=0;colnum < this.width; colnum++) {             //go through every row
      var cell = new Cell(rownum,colnum)                      //create a var called cell and assign it coords
      row.push(cell);                               //push into the row array every single cell
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





// GameView.prototype.listenKeyPress = function(callback){
// $('body').keypress(callback);
// }

