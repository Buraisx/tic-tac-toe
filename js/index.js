var boardRows = new Array(3)

document.addEventListener('DOMContentLoaded',function(){
	var player = 'X'
	var won = false
	// creating and styling the table
	board = document.createElement('table')
	display = document.createElement('div')
	body = document.querySelector('body')
	//board
	board.style.position = 'absolute'
	board.style.top = '35%'
	board.style.left = '40%'
	board.style.border = '1px solid black'
	board.style.width = '300px'
	board.style.height = '300px'
	//display
	display.style.position = 'absolute'
	display.style.top = '25%'
	display.style.left = '40%'
	display.style.fontSize = '32px'
	display.innerText = `Player: ${player}'s turn`
	body.append(board)
	body.append(display)
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
				if (checkWon()){
					switchPlayer()
				}

				this.onclick = null
			}		
		}
	}//end of board creation
	function checkWon(){
		if (won === true){
			display.innerText = `Player:${player} has won!! Congratulate them for this amazing feat`
			return false
		}
		return true
	}
	//switch Player to next one
	function switchPlayer(){
		if (player === 'X') {
			player = 'O'
		}else{
			player = 'X'
		}
		display.innerText = `Player:${player}'s turn`

	}
	// check winning conditions
	function checkHorizontal(row){
		//Simple/Easy way to check for horizontal win, Another method is to loop through
		if (boardRows[row][0] === player && boardRows[row][1] === player && boardRows[row][2] === player){
			won = true
		}
	}
	function checkVertical(col) {
		if (boardRows[0][col] === player && boardRows[1][col] === player && boardRows[2][col] === player){
			won = true
		}
	}
	function checkDiagonal() {
		if(boardRows[0][0] === player && boardRows[1][1] === player && boardRows[2][2] === player || boardRows[0][2] === player && boardRows[1][1] === player && boardRows[2][0] === player){
			won = true
		}
		

	}
})