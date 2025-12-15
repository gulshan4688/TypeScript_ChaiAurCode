type ChaiOrder = {
    type:string;
    sugar: number;
    strong: boolean;
};

// this is a way normal way to pass parameters but what if they are repeating them selves
function makeChai(order:{type:string; sugar: number; strong: boolean}){
    console.log(order);
}

function serveChai(order:{type: string; sugar:number; strong: boolean}){
    console.log(order);
}