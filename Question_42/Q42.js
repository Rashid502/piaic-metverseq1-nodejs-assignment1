//Question 42
console.log(`Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
                  that modifies the array of magicians by adding the phrase the Great to each magician’s name.
                  Call show_magicians() to see that the list has actually been modified.
`);
//implementation
function make_great(magicians) {
    magicians.forEach(function(magician, index) {
        this[index] = `Great ${magician}`;
      }, magicians);
}
function show_magicians(magicians) {
    magicians?.map(magician => console.log(magician));
}
let magicians = ["David Copperfield", "Ricky Jay", "Harry Anderson"];
make_great(magicians);
show_magicians(magicians);

