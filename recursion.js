// Recursion
// function func() {
//   if () { //base case
//     return something;
//   } else { //recursive case
//     func()
//   }
// }

// Factorial
function factorial (n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial (n - 1);
  }
}

// call stack
// shows what order the functions are being called in
// and what happens at each step
factorial (4);
