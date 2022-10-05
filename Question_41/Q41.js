//Question 41
console.log(`Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
                  which prints the name of each magician in the array.
`);
//implementation
function show_magicians(magicians) {
    magicians?.map(magician => console.log(magician));
}
let magicians = ["David Copperfield", "Ricky Jay", "Harry Anderson"];
show_magicians(magicians);

