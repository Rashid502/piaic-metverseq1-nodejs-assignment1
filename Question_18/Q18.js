 
//Question 18
console.log(`Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
                    • Store the locations in a array. Make sure the array is not in alphabetical order.
                    • Print your array in its original order.
                    • Print your array in alphabetical order without modifying the actual list.
                    • Show that your array is still in its original order by printing it.
                    • Print your array in reverse alphabetical order without changing the order of the original list.
                    • Show that your array is still in its original order by printing it again.
                    • Reverse the order of your list. Print the array to show that its order has changed.
                    • Reverse the order of your list again. Print the list to show it’s back to its original order.
                    • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
                    • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.`);
//implementation
const favorite_places = ["Switzerland", "Saudi Arabia" , "US", "Turkey", "Brazil"]
favorite_places.map(place => console.log(place))
const alphabetical_sorted = favorite_places.slice().sort((a, b) => {
                                 return a === b ? 0 : a < b ? -1 : 1;
                            })
console.log("Array sorted in Alphabetical order.")
alphabetical_sorted.map(place => console.log(place))
console.log("Original Array.")
favorite_places.map(place => console.log(place))
const reverse_alphabetical_sorted = favorite_places.slice().sort((a, b) => {
                                        return a === b ? 0 : a > b ? -1 : 1;
                                    })
console.log("Array sorted in reverse Alphabetical order.")
reverse_alphabetical_sorted.map(place => console.log(place))
console.log("Original Array.")
favorite_places.map(place => console.log(place))
console.log("Reverse the order of your list. Print the array to show that its order has changed.")
favorite_places.reverse().map(place => console.log(place))
console.log("Reverse the order of your list again. Print the list to show it’s back to its original order.")
favorite_places.reverse().map(place => console.log(place))
console.log("Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.")
favorite_places.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
}).map(place => console.log(place))
console.log("Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.")
favorite_places.sort((a, b) => {
    return a === b ? 0 : a > b ? -1 : 1;
}).map(place => console.log(place))