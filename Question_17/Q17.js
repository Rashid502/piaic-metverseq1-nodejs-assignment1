 //Question 17
console.log(`Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
  • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
    invite only two people for dinner.
  • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
    a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
  • Print a message to each of the two people still on your list, letting them know they’re still invited.
  • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
    actually have an empty list at the end of your program.`);
//implementation
const invited_persons = ["Mehtab", "Danish","Jamsheed"];
console.log(invited_persons[0])
invited_persons[0] = ["Kamran"];
invited_persons.unshift("Irfan");
invited_persons.splice(invited_persons.length / 2, 0, 'Tayyeb');
invited_persons.push("Atif");
console.log('Sorry guys the bigger dinning table not arrived, So I have to reduce invited to only two persons.')
let still_invited = [];
for(let i = invited_persons.length - 1; i >= 0; i--) {
    if(invited_persons.length > 2) {
        console.log(`Sorry ${invited_persons[0]}, you are not invited for dinner`);
        invited_persons.shift();
    } else {
        still_invited.push(invited_persons[0]);
        console.log(`${invited_persons[0]}, you are still invited for dinner`)
        invited_persons.shift();
    }
}