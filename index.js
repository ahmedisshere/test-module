function sayHello(){
    console.log("markeloff");
}

function sayHello (){
    console.log("markelof");
  }
  
  sayHello();
  
  // arrow
  
  let saySomething = (name,age) => 
                 {
                   console.log(name,age);
                 }
  
  saySomething("rahim",29);

  class Vehicle {
  
    myVar = "yes";
   constructor(param,count){
     this.color =  param;
     this.passenger = count;
     
   }
   
   saySomething(){
     
     console.log(this.color);
   }
 }
 
 let object1 = new Vehicle("red",25);
 let object2 = new Vehicle("blue",69);
 
 console.log(object1);
 console.log(object2);
 
 object1.saySomething();
 object2.saySomething();

 /// inheritance ->
 