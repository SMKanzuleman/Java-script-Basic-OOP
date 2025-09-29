//prototype → lives on constructor functions/classes; it’s the blueprint object holding shared methods for all future instances.
//__proto__ → lives on instances/objects; it’s the hidden link that connects them back to their constructor’s prototype.
let arr=[1,2,3,4,5,6,7,7];
console.log(arr.__proto__==Array.prototype);//true
console.log(arr.__proto__);
//Factory Functionis used to create Objects.but its disadvantage is if you create 1000 objects, you also create 1000 copies of the same functions → wastes memory.
function createUser(name,age){
    return{
        name:name,
        age:age,
        talk(){
            console.log("I am ",name)
        }
    }
}

let p1 = createUser("Adam", 123);
let p2 = createUser("Ahmad", 456)
// p1.talk();
// p2.talk();

//Constructor cannot return anything
function User(n,a){
    this.name=n;
    this.age=a;
}
User.prototype.speak=function (){
    console.log("I am", this.name); 
}
// Classes
// extend allow class to access function from parent
// Super is used to call the constructor of parent
class Userr {
    constructor(n,a){
        this.name=n,
        this.age=a
        console.log("Parent Constructor")
    }
    spoke(){
        console.log("I am", this.name); 
    }
}
class Student extends Userr{
    constructor(n,a){
        console.log("Child Constructor")
        super(n,a)
    }
}
// let U1=new Userr("KAnzulEman",18)
// let U2=new Userr("Bilal",19)
// U1.spoke();
let s1=new Student("Syed KanzulEman",18);
let s2=new Student("Syed KanzulEman",18);
//this si concept of OOPs




