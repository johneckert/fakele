function generateFakele() {
  const tiles = ["&#11035", "&#11035", "&#11035", "&#129001", "&#129000"];
  let board = [];
  let tries = Math.floor(Math.random() * 5);

  while (board.length <= tries) {
    board.push(createRow());
  }
  let lastRow = ["&#129001", "&#129001", "&#129001", "&#129001", "&#129001"];
  board.push(lastRow);
  return board;

  function createRow() {
    let row = [];
    while (row.length < 5) {
      row.push(tiles[Math.floor(Math.random() * tiles.length)]);
    }
    return row;
  }
}

function render() {

  let fakele = generateFakele();
  let main = document.getElementById("fakele");
  main.innerHTML = ""
  fakele.forEach(function (rowArr) {
    let row = document.createElement("div")
    let rowContent = "";
    rowArr.forEach(function (square) {
        rowContent += square
    });
    row.innerHTML = rowContent;
    main.appendChild(row);
  });
}
