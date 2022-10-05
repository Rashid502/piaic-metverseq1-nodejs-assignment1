//Question 43
console.log(`Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
                  the array of magicians’ names. Because the original array will be unchanged, return the new array and store
                  it in a separate array. Call show_magicians() with each array to show that you have one array of the original 
                  names and one array with the Great added to each magician’s name.
`);
//implementation
function make_great(magicians) {
    return magicians.map((magician) =>  `Great ${magician}`);
}
function show_magicians(magicians) {
    magicians?.map(magician => console.log(magician));
}
let magicians = ["David Copperfield", "Ricky Jay", "Harry Anderson"];
let greatMagicians = make_great(magicians);
console.log('Great Magicians array')
show_magicians(greatMagicians);
console.log('Original Array')
show_magicians(magicians);

