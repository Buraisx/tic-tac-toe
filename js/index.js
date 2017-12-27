var boardRows = new Array(3)

document.addEventListener('DOMContentLoaded',function(){
	var player = 'X'

	// creating and styling the table
	board = document.createElement('table')
	body = document.querySelector('body')
	board.style.position = 'absolute'
	board.style.top = '35%'
	board.style.left = '40%'
	board.style.border = '1px solid black'
	board.style.width = '300px'
	board.style.height = '300px'
	body.append(board)
	
	//create board and gamestate
	for (var rows = 0; rows < 3; rows++) {
		boardRows[rows] = new Array(3)
		row = board.insertRow(rows)
		row.style.border = '1px solid black'

		for (var cols = 0; cols < 3; cols++) {
			col = row.insertCell(cols)
			col.style.border = '1px solid black'
			col.style.textAlign = 'center'
			col.onclick = function(){
				this.innerText = player
				boardRows[this.parentElement.rowIndex][this.cellIndex] = player
				checkHorizontal(this.parentElement.rowIndex)
				checkVertical(this.cellIndex)
				checkDiagonal()
				switchPlayer()
			}		
		}
	}//end of board creation

	function switchPlayer(){
		if (player === 'X') {
			player = 'O'
		}else{
			player = 'X'
		}
	}
	// check winning conditions
	function checkHorizontal(row){
		//Simple/Easy way to check for horizontal win, Another method is to loop through
		if (boardRows[row][0] === player && boardRows[row][1] === player && boardRows[row][2] === player){
			return true
		}
	}
	function checkVertical(col) {
		if (boardRows[0][col] === player && boardRows[1][col] === player && boardRows[2][col] === player){
			return true
		}
	}
	function checkDiagonal() {
		// if (true) {}	
	}
})