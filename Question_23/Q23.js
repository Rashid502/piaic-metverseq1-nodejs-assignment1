 //Question 23
console.log(`Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
                    prediction for the results of each test. Your code should look something like this:

                    let car = 'subaru';
                    console.log("Is car == 'subaru'? I predict True.")
                    console.log(car == 'subaru')
                    • Look closely at your results, and make sure you understand why each line evaluates to True or False.
                    • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.`);
//implementation
let car = 'Civic';
let marks = 80;
let isLogin = false;
let is_delivered = true;
let person = 'Rashid';
console.log('Test evaluated to true')
if(car == 'Civic') console.log(`car == 'Civic' ? ${car == 'Civic'}`)
if(marks == 80) console.log(`marks == 80 ? ${marks == 80}`)
if(isLogin == false) console.log(`isLogin == false ? ${isLogin == false}`)
if(is_delivered == true) console.log(`is_delivered == true ? ${is_delivered == true}`)
if(person == 'Rashid') console.log(`person == 'Rashid' ? ${person == 'Rashid'}`)
console.log('Test evaluated to false')
if(car != 'Civic') {} else console.log(`car != 'Civic' ? ${car != 'Civic'}`)
if(marks != 80) {} else console.log(`marks != 80 ? ${marks != 80}`)
if(isLogin != false) {} else console.log(`isLogin != false ? ${isLogin != false}`)
if(is_delivered != true) {} else console.log(`is_delivered != true ? ${is_delivered != true}`)
if(person != 'Rashid') {} else console.log(`person != 'Rashid' ? ${person != 'Rashid'}`)
