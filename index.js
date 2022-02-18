let numbers = [1,2,3,4,5,6];
let numbers2 = [7,8,9,0,3465];

 let arr = [...numbers ,...numbers2,69,96];


 let gamers = {
     ign: "markeloff",
     age: 69
 }

 let moreGamers = {...gamers, rank: "supreme"};

 console.log(moreGamers);

// rest -> used to merge -> 

let something = (...numarr) => console.log(numarr);
something(1,2,3,4,5,6,7,8,9,76,6,6,435353453535); // rest operator does the same for objects.