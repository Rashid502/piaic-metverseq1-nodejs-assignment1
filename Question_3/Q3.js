//Question 3
console.log(`Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.`);
//implementation
const person_name = "rashid pervaiz";
console.log(`Upper Case Name: ${person_name.toLocaleUpperCase()}`);
console.log(`Lower Case Name: ${person_name.toLocaleLowerCase()}`);
console.log(`Title Case Name: ${person_name.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())}`);