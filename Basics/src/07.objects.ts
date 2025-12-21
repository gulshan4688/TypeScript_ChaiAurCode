const chai = {
    name: "masala Chai",
    price: 20,
    isHot: true
}

// declaring object types 

let tea: {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "ginger tea",
    price: 25,
    isHot: true
}

// alias objects

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}


const adrakChai: Tea = {
    name: "adrak Chai",
    price: 23,
    ingredients: ["gingder", "chaiPatti"]
}





type cup = {
    size: string
}

let smallCup: cup = {
    size: "200ml"
}

let largeCup = {
    size: "300ml",
    isBig: true
}
smallCup = largeCup;



type brew = { brewTime: number }
const coffee = { brewTime: 8, beans: "arabica" }
const chaiBrew: brew = coffee;


type user = {
    username1: string;
    password1: string;
}

const u3: user = {
    username1: "mani",
    password1: "123"
}

type Item = { name1: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string;
    items: Item[];   // here items has Item[] type means in here we can put many elements inside this array which contains name1 and quantity 
    address: Address;
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updatedChai = (updates: Partial<Chai>) => {
    console.log("updating chai with ", updates);
}

updatedChai({price:25});
updatedChai({isHot:false});

type ChaiOrder ={
    name?: string;
    quantity?:number;
}
const placeOrder = (order : Required<ChaiOrder>) =>{
    console.log(order);
}

placeOrder({name:"mani",quantity:23});

type Chai1 ={
    name: string;
    price: number;
    isHot:boolean;
    ingredients: string[]
}

type basicChaiInfo = Pick < Chai1,"name" | "price" > ;  // only pick these properties from type while making the object 

const ChaiInfo:basicChaiInfo ={
    name: "lemon Tea",
    price : 30
}

type ChaiNew ={
    name: string;
    price: number;
    isHot:boolean;
    secretIngredient: string;
}

type PublicChai = Omit<ChaiNew , "secretIngredient" > ; // means while making an object of type PublicChai we dont have to use this "sercretIngredients"

const BestChai :PublicChai ={
    name: "lemon Tea",
    price : 30,
    isHot:true    
}  // above as u can see BestChai is of type PublicChai in which we can omit one variable 