//Question 37
console.log(`Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
                  reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of
                  any size with a different message.`);
//implementation
function make_shirt(size = "large", message = "I love JavaScript") {
    console.log(`Shirt size is ${size} and message is ${message}`);
}
make_shirt("medium");
make_shirt("large");
make_shirt("small", "I love Typescript.");
make_shirt("XL", "I love Programming.");

