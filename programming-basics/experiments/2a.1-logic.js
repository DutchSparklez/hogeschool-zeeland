// 1: Determine the result of the following expressions 
console.log(true && 2 >= 2);            // true
console.log(2 >= 2 && false);           // false
console.log(2 >= 3 && false);           // false
console.log(0.5 == 1.5 ^ true);         // true
console.log(1 <= 1.0 || true);          // true

// 2: Determine the results of the following expressions
console.log(false ^ !(1.5 == 0.5));     // true
console.log(!(1 >= 1) || true);         // true
console.log(3 >= 1 || 2 <= 1);          // true
console.log(!(0.5 >= 0.5) || 3 <= 0.5); // false
console.log(1.0 >= 1.0 || 1.0 >= 1.5);  // true

console.log(1 >= 3 || !(0.5 == 0.5));   // false
console.log(0.5 <= 2 || !(2 >= 0.5));   // true
console.log(1 <= 1.5 || 3 >= 1);        // true
console.log(!(2 < 1.5 && 1.0 <= 3));    // true
console.log(true ^ false || true);      // true