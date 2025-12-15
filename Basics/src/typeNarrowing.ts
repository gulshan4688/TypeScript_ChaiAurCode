function makingOfChai(order: string | number) {
    if (typeof order === 'string') {
        return `your order is ${order}`
    } else {
        return `your order number is ${order}`;
    }
}

console.log(makingOfChai(54))


// Truthiness
function serveChai(msg?: string) {
    if (msg) {
        return `your message is ${msg}`;
    } else {
        return `your chai is being served`;
    }
}

console.log(serveChai());


// exhautive checks 
// kind of a switch case 
function orderOfChai(order: 'small' | 'medium' | 'large' | number) {
    if (order === 'large') return `Your order is large`
    if (order === 'small' || order === 'medium') return `make extra chai `
    return `your order is #${order}`;

}
console.log(orderOfChai('small'));

// talking about classes

class kulhadd {
    serve() {
        return `serving kulhadd chai`
    }
}
class cutting {
    serve() {
        return `serving cutting chai`
    }
}

function serve(chai: kulhadd | cutting) {
    if (chai instanceof kulhadd) return chai.serve();

}
// console.log(serve());

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

// how to use this validation function isChaiOrder

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `your order is ${item.type} and with sugar ${item.sugar} spoon`;
    }
    else return `the input is string`;
}
// first make object 
const order1: ChaiOrder = {
    type:"masala Chai",
    sugar:34
};
console.log( serveOrder(order1));


// playing more with types 

type masalaChai ={type:"masala", spicynessLevel:number}
type gingerChai = {type:"ginger", amount:number}
type eliachiChai = {type:"elaichi", aroma:number}

type whichChai = masalaChai | gingerChai | eliachiChai ;

function MakeChai(order:whichChai){
    if(order.type === "masala") return `this is masala chai`
    if(order.type === "elaichi") return `this is eliachi chai`
    if(order.type === "ginger") return `this is ginger chai`
}

let orderachai :masalaChai = {
    type: "masala",
    spicynessLevel:4
}
console.log(MakeChai(orderachai));