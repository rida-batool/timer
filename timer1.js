//process.stdout.write('\x07');

let args = process.argv.slice(2);

//console.log(newArray); //10 3 5 15 9 
const timer = function(sec) {
  //checking if there are no arguments eneterd and inNaNchecks if it is a number
  if (sec < 0 || isNaN(sec)) {
    return;  //Ignoring the empty input
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sec * 1000);
  console.log(`Timer set for ${sec}`);
};
// passing each element of array to the timer function as interval
for (const item of args) {
  timer(item);
}






