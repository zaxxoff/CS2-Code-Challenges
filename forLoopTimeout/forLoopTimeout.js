// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
<<<<<<< HEAD
}

/* put the for loop in the callback function and wrapping console.log(i) in it.  It doesn't work
in its current state as expected because nothing is blocking the incrementing of i from happening and by the time console.log(i) executes, we have already reached the end of the loop
*/
=======
}
>>>>>>> d1daab308de663dad2c7129e60c72bbb70519b4c
