TicTacToe algorithm
IF you get three in a row win
After the first you click or enter a number, of you check for win cons
There are 3 types of win cons
Vertical Horizontal and diagonal
How do we properly display a board?
2d array
How do we use a 2d array to check for win con

Horizontal:
pretend we are 1d array first,
for loop through row, 
check placement, 
Check next array item in the row, 
If its a match, add counter
If counter is 3 game over

Vertical:
Loop through row
Find instance of input,
when found, go to next row,
for loop Check matching 2nd index, [1][0] == x
Increase counter
for loop check matching 2nd index [2][0] == x
If counter == 3 return true

Diagonal:
Find instance where item is at [0] or [2]
Checks [0][0], [1][1],[2][2] or [0][2],[1][1],[2][0]

Issues:
efficiency issues, every click we are checking all of the wincons when we don’t need to
dont need to check unless 5 moves have been made
Don’t need to check diagonal unless placement is [0][0], [0][2],[1][1],[2][0], or [2][2]