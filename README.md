#TicTacToe algorithm<br>
======================
if you get three in a row, win<br>
After the first click or you enter a number, you check for win cons<br>
There are 3 types of win cons<br>
Vertical, Horizontal, and diagonal<br>
How do we properly display a board?<br>
2d array<br>
How do we use a 2d array to check for win con?<br>

#Horizontal:<br>
==============
pretend we are 1d array first,<br>
for loop through row, <br>
check placement, <br>
Check next array item in the row, <br>
If its a match, add counter<br>
If counter is 3 game over<br>

#Vertical:<br>
============
Loop through row<br>
Find instance of input,<br>
when found, go to next row,<br>
for loop Check matching 2nd index, [1][0] == x<br>
Increase counter<br>
for loop check matching 2nd index [2][0] == x<br>
If counter == 3 return true<br>

#Diagonal:<br>
=============
Find instance where item is at [0] or [2]<br>
Checks [0][0], [1][1],[2][2] or [0][2],[1][1],[2][0]<br>

#Issues:<br>
=============
efficiency issues. every click, we are checking all of the wincons when we don’t need to<br>
Dont need to check unless 5 moves have been made<br>
Don’t need to check diagonal unless placement is [0][0], [0][2],[1][1],[2][0], or [2][2]<br>