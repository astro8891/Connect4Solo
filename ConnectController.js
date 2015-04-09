$(document).ready(function() {
  var grid = new Grid(6,7);

  grid.createCells();
  console.log(grid.cells);
  grid.renderGrid();
  grid.createCells();
  clicky();
});

