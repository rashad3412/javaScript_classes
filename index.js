//** create the class with the paramaters called make,model,year */
//** after we use this.(example) = example to initialize the parameters  */
//** create a funtion called getDescription to call each parameter for the car. */
//** we create the function we come outside the class and create and store the class in new varible called const carInfo = new(parameters) */
//** finally we move on create a sub class called Electric Car add additional property called range using this and super method */

class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getDescription(){
        return ` The car is a ${this.make} ${this.model} and the year of the car is ${this.year}`
    }
}

class ElectricCar extends Car{
    constructor(make, model, year, range){
        super(make, model ,year);
        this.range = range;
    }

    getDescription(){
        return ` The car is a ${this.make} ${this.model}, the year of the car is ${this.year} with ${this.range} miles on it.`
    }
}

const newCar = new ElectricCar("Tesla", "Model S", 2019, 300)

console.log(newCar.getDescription())