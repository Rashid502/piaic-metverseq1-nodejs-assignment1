 //Question 19
console.log(`Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number of people you are inviting to dinner.`);
//implementation
const invited_persons = ["Mehtab", "Danish","Jamsheed"];
invited_persons[0] = ["Kamran"];
invited_persons.unshift("Irfan");
invited_persons.splice(invited_persons.length / 2, 0, 'Tayyeb');
invited_persons.push("Atif");
let still_invited = [];
for(let i = invited_persons.length - 1; i >= 0; i--) {
    if(invited_persons.length > 2) {
        invited_persons.shift();
    } else {
        still_invited.push(invited_persons[0]);
        invited_persons.shift();
    }
}
still_invited.map(name => console.log(`My friend ${name}, you are invited for the dinner.`));