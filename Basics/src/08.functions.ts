function makeChai(drink:string, cup:number){
    console.log(`makeing ${cup} cups ${drink}`);
}

makeChai("coffee",5);

function getDrinkPrice(): number{  // here return type is number
    return 25;
}

function logChai():void{  // hum koi bhi data bahar ni denge bus log karenge 
    console.log("chai is ready");
}

function optionalChai(order?:string){
    if(typeof order === "string"){
        console.log("chai is ready");
    }else{
        console.log("no order recieved");
    }
}

optionalChai();