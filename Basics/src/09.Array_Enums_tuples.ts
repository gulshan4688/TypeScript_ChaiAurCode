

const chaiFlavours: string[] = ["masala", "ginger"];
const chaiPrices: number[] = [10, 15];

const rating: Array<number> = [4.5, 3.9];

type Chai = {
    type: string;
    price: number;
}

const ArrayOfChai: Chai[] = [
    { type: "masala", price: 10 },
    { type: "ginger", price: 25 }
]

// readonly array , only assinged once and cant be re-assigned further 

const cities: readonly string[] = ["mumbai", "delhi"];

const Array2D: number[][] = [
    [1, 2, 3, 4],
    [1, 2, 3, 4]
]


// now talking about the tuples 

let chaiTuple: [string, number]

chaiTuple = ["mani", 24];


//enums 

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size : cupSize = cupSize.LARGE; 

enum status {
    PENDING = 100,
    DONE,
    INITIATED
}
console.log(status.PENDING);

console.log(status.DONE);

enum chaiType {
    MASALA = "masala chai",
    GINGER = "ginger chai",
}

function whichChai (local : chaiType){
    console.log(`making ${chaiType}`);
    console.log(`making ${local}`);
}

whichChai(chaiType.GINGER);