//Question 35
console.log(`Q35: Animals: Think of at least three different animals that have a common characteristic. Store the names
                  of these animals in a list, and then use a for loop to print out the name of each animal.
                     • Modify your program to print a statement about each animal, such as A dog would make a great pet.
                     • Add a line at the end of your program stating what these animals have in common. You could print a
                       sentence such as Any of these animals would make a great pet!`);
//implementation
let animals = ["Goat", "Markhor", "Sheep"]
animals.map(animal => console.log(animal))
animals.map(animal => console.log(`A ${animal} is beautiful animal.`))
console.log(`I like Goat very much. They are one of the cleanliest animals and are much more selective feeders than cows, 
             sheep, pigs, swine and even dogs. Goats are very intelligent and curious animals. Their inquisitive nature is 
             exemplified in their constant desire to explore and investigate anything unfamiliar which they come across.`)
console.log(`I like Markhor very much. Markhors are the largest of the wild goat species. They have broad hooves and striking 
             spiral horns that can grow to 5 feet long in mature males; female horns are smaller, around 2 feet. The markhor's 
             coat is reddish gray with a dark stripe running the length of its back.`)
console.log(`I like Sheep very much. The sheep is usually stockier than its relative the goat (genus Capra); its horns, when 
             present, are more divergent; it has scent glands in its face and hind feet; and the males lack the beards of goats. 
             Sheep usually have short tails.`)


