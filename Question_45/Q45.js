//Question 45
console.log(`Q45: Cars: Write a function that stores information about a car in a Object. The function should always receive 
                  a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the 
                  function with the required information and two other name-value pairs, such as a color or an optional feature. 
                  Print the Object that’s returned to make sure all the information was stored correctly.
`);
//implementation
function create_car_object(manufacturer, model, ...items) {
    let car_obj = { 
        manufacturer, 
        model
    }
    items?.map(item => car_obj[Object.keys(item)[0]] = item[Object.keys(item)[0]]);
    return car_obj;
}
let car = create_car_object("Honda", "Civic 2022", {color: "Red"}, {feature: "All"})
console.log(`Car : ${JSON.stringify(car)}`)

