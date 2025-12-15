let promise:any = "42";

let thing:number = (promise as string).length;
console.log(thing)


// define an type 
 type book ={
    name : string
 }

 let b1 : book ={name:"maths"};
 let b2 : book ={name:"english"};