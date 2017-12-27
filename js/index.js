document.addEventListener('DOMContentLoaded',function(){
	var boardRows = new Array(3)

	// creating and styling the table
	board = document.createElement('table')
	body = document.querySelector('body')
	board.style.position = 'absolute'
	board.style.top = '35%'
	board.style.left = '40%'
	board.style.border = '1px solid black'
	board.style.width = '200px'
	board.style.height = '200px'
	body.append(board)

	// Creating the table elements and board state
	for (var rows = 0; rows < 3; rows++) {
		boardRows[rows] = new Array(3)
		row = board.insertRow(rows)
		row.style.border = '1px solid black'
		for (var cols = 0; cols < 3; cols++) {
			col = row.insertCell(cols)
			col.style.border = '1px solid black'
		}
	}

	function playerMove(){}
	function switchPlayer(){}
	function checkWinCon(){}
	function checkHorizontal(){}
	function checkVertical() {
		
	}
	function checkDiagonal() {
		
	}

})