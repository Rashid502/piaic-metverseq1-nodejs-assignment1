 //Question 16
console.log(`Q16: More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
    • Start with your program from Exercise 15. Add a print statement to the end of your program 
      informing people that you found a bigger dinner table.
    • Add one new guest to the beginning of your array.
    • Add one new guest to the middle of your array. • Use append() to add one new guest to the end
      of your list. • Print a new set of invitation messages, one for each person in your list.`);
//implementation
const invited_persons = ["Mehtab", "Danish","Jamsheed"];
console.log(invited_persons[0])
invited_persons[0] = ["Kamran"];
console.log('I found a bigger dinner table.')
invited_persons.unshift("Irfan");
invited_persons.splice(invited_persons.length / 2, 0, 'Tayyeb');
invited_persons.push("Atif");
invited_persons.map(name => console.log(`My friend ${name}, you are invited for the dinner.`));