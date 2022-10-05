 //Question 15
console.log(`Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
a new set of invitations. You’ll have to think of someone else to invite.`);
//implementation
const invited_persons = ["Mehtab", "Danish","Jamsheed"];
console.log(invited_persons[0])
invited_persons[0] = ["Kamran"];
invited_persons.map(name => console.log(`My friend ${name}, you are invited for the dinner.`));