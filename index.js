// array map recap ->> 

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map((item) => {

    return item * item;
    
});

let cubes = numbers.map(item => item ** 3)

console.log(cubes);