class Chai {
    flavour : string;
    // price : number

    // constructor(flavour : string , price : number){
    //     this.flavour = flavour;
    //     this.price = price;
    // }

    constructor(flavour : string ){
        this.flavour = flavour;
        console.log(this.flavour);
    }
    // constructor(price : number){
    //     this.price = price
    //     console.log(this.price);
    // }
}

// const masalaChai = new Chai("masala", 3);
const masalaChai = new Chai("masala");

console.log(masalaChai.flavour);
// console.log(masalaChai.price);


class Chai2{
    public flavour : string = "Masala"
    private secretIngredients : string = "caradomon"

    reveal(){
        return this,this.secretIngredients;
    }
}

const c = new Chai2();

console.log("secreat ingrdient is :", c.reveal());



class Shop {
    protected shopName : string = "Chai Corner";
}

class Branch extends Shop{
    getName (){
        return this.shopName;
    }
}

const s = new Branch();

console.log(s.getName());


class ModernChai{
    private _sugarLvl = 2 ;
    get sugar(){
        return this._sugarLvl;
    }

    set sugar(value : number){
        if(value > 5) throw new Error("too sweet");

        this._sugarLvl = value;
    }
}

const mc = new ModernChai();

console.log(mc.sugar);
mc.sugar = 4;
console.log(mc.sugar);


// how to access static values,
// they can be accessed directly through class , no need to create any object 

class EkChai{
    static shopName = "another Chai Corner "

    constructor( public flavour : string ){ }
}
console.log(EkChai.shopName);


// abstract classes are used to define the any class that will use this abstract class a blueprint that
// that it can only contain these methods and properties or these classes will only contain this m and p ,
abstract class Drink {
    abstract make() : void ;
}

class Chai3 extends Drink{
    make(){
        console.log("this Chai3 class extends Drink which is an abstract class");
    }
}

const c3 = new Chai3();

c3.make();

// COMPOSITION 

class Heater{
    heat() {}
}

class makeChai{
    constructor(private heater : Heater){ }
    
    make(){
        this.heater.heat;
    }

}
