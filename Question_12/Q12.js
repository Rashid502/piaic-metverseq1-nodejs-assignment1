 //Question 12
console.log(`Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name.`);
//implementation
const names = ["Jamsheed", "Tayyeb","Irfan","Danish","Kamran"];
names.map(name => console.log(`Dear ${name}, I feel really blessed to have you as my friend.`));