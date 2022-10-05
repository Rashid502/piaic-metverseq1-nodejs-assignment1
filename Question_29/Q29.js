//Question 29
console.log(`Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
                  that check for certain fruits in your array.
                    • Make a array of your three favorite fruits and call it favorite_fruits.
                    • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
                        If the fruit is in your array, the if block should print a statement, such as You really like bananas!`);
//implementation
let favorite_fruits = ["Banana", "Apple", "Grapes"];
if (favorite_fruits.findIndex((fruit) => fruit === "Banana") != -1) {
  console.log(`I like Bananas.`);
}
if (favorite_fruits.findIndex((fruit) => fruit === "Apple") != -1) {
  console.log(`I like Apples.`);
}
if (favorite_fruits.findIndex((fruit) => fruit === "Grapes") != -1) {
  console.log(`I like Grapes.`);
}
if (favorite_fruits.findIndex((fruit) => fruit === "Pomigranade") == -1) {
  console.log(`Pomigranade is not in favorite_fruits array.`);
}
if (favorite_fruits.findIndex((fruit) => fruit === "Orange") == -1) {
  console.log(`Orange is not in favorite_fruits array.`);
}
