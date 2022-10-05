 //Question 24
console.log(`Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
  • Tests for equality and inequality with strings
  • Tests using the lower case function
  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
    to, and less than or equal to
  • Tests using "and" and "or" operators
  • Test whether an item is in a array
  • Test whether an item is not in a array`);
//implementation
let car = 'Civic';
let marks = 80;
let isLogin = false;
let is_delivered = true;
let person = 'Rashid';
let items = ['car'];
if(car == 'Civic') console.log(`car == 'Civic' ? ${car == 'Civic'}`)
if(car != 'Civic') {} else console.log(`car != 'Civic' ? ${car != 'Civic'}`)
if(car.toLocaleLowerCase() == 'civic') console.log(`car.toLocaleLowerCase() == 'civic' ? ${car.toLocaleLowerCase() == 'civic'}`)
if(marks != 50) console.log(`marks != 50 ? ${marks != 50}`)
if(marks == 50) console.log(`marks == 50 ? ${marks == 50}`)
if(marks > 50) console.log(`marks > 50 ? ${marks > 50}`)
if(marks < 500) console.log(`marks < 500 ? ${marks < 500}`)
if(marks >= 50) console.log(`marks >= 50 ? ${marks >= 50}`)
if(marks <= 500) console.log(`marks <= 500 ? ${marks <= 500}`)
if(marks >= 50 && marks <= 500) console.log(`marks >= 50 && marks <= 500 ? ${marks >= 50 && marks <= 500}`)
if(marks >= 50 || marks <= 500) console.log(`marks >= 50 || marks <= 500 ? ${marks >= 50 || marks <= 500}`)
if(Array.isArray(items)) console.log(`Array.isArray(items) ? ${Array.isArray(items)}`)
if(!Array.isArray(person)) console.log(`!Array.isArray(person ? ${!Array.isArray(person)}`)