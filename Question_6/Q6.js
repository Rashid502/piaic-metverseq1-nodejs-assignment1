//Question 6
console.log(`Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end 
             of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
             so the whitespace around the name is displayed. Then print the name after striping the white spaces.`);
//implementation
const person_name_6 = "       Rashid Pervaiz \t\n";
console.log(`Person name with spaces : ${person_name_6}`);
console.log(`Person name without spaces : ${person_name_6.trim()}`);