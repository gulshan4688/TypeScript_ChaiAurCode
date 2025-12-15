// this is a way normal way to pass parameters but what if they are repeating them selves
function makeChai(order:{type:string; sugar: number; strong: boolean}){
    console.log(order);
}

function serveChai(order:{type: string; sugar:number; strong: boolean}){
    console.log(order);
}

type ChaiOrder = {
    type:string;
    sugar: number;
    strong: boolean;
};

// but let us create this and we can use this ChaiOrder type function like an order parameter 

function makeChai2(order : ChaiOrder){
    console.log(order);
}
function serveChai2(order:ChaiOrder){
    console.log(order);
}


type teaRecipe = {
    water:number;
    milk:number;
}

class MasalaChai implements teaRecipe{
    water = 100;
    milk = 50;
}

type cupSize = "small" | "large" ;

// A class can only implement an object type or intersection of object types with statically known members.ts(2422)
// class Chai implements cupSize{

// }

// eg how 
interface  ChaiOrder2 {
    type:string;
    sugar: number;
    strong: boolean;
};

// now we have this variable like cupSize  "type cupSize = "small" | "large" ;", if we want to make this as Interface than 

interface cupSize2{
    size: "small" | "medium" | "large" ;
}

// so to declare any interface we need to declare it like an object we cant just write interface anywhere

//  time to implement intereface in a class 

class Chai2 implements cupSize2 {
    size: "small"| "medium" | "large" = "large";
}

type Response = { ok:true; } | { ok:false; }

// class myRes implements Response {
//     ok : boolean = true;
// }

// class gives error while implementing as type , classes only needs Interfaces 

// union of types
type teaType = "masala" | "ginger" | "lemon";

function orderChai3(t : teaType){
    console.log(t);
}

type baseChai = {
    teaLeaves : number
} 

type extra = {
    masala : number
}

type masalaChai = baseChai & extra;

const cup : masalaChai = {
    teaLeaves : 2,
    masala : 1
}

// optoinal values 
type User = {
    username : string ;
    bio? : String 
}
const u1 : User ={
    username : "mani"
}
const u2 : User = {
    username : "mani2",
    bio: "hnji kaise hai app log "
}

// its not mandatory to put both values , its our choice

type config = {
    readonly appName : string
    version : number
}

const cfg : config = {
    appName : 'massterji',
    version : 1
}

// cfg.appName = "yoyo"  // its readonly 