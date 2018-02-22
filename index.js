var sentiment = require('sentiment');
 
var r1 = sentiment('You are such a lazy dumbass');
console.dir(r1.score);        // -4

var r2 = sentiment('You could stand to improve with what you are doing.');
console.dir(r2.score);        // 2

var r3 = sentiment('You are the god of all that is amazing, also I love cats!');
console.dir(r3.score);        // 8