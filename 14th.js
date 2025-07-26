//default parameters

function mul(a,b=5){
    return a*b;
}
console.log(mul(2,4));
console.log(mul(3,));

//rest parameters
function restPar(a,...b){
    console.log(a);
    console.log(b);
}
restPar(1,12,23,66,47,59);

//scope parameters

function sub(){  
    var a=11;
    let m=23;
    const x=41;
    console.log(a,m,x);
}
sub();

//nested objects
let student={
    fname:"satya",
    id:1596,
    'movie lover':true,
    laptop1:{
        brand:'dell',
        ram:8,
        shade:'blue',
    }
}
console.log(student);
console.log(student.fname);
student.age=26;
console.log(student);
delete student.age;
console.log(student);
console.log(student['movie lover']);

//prompt
/*let car=prompt("Enter a car name:");
let carColl={
    [car]:5,
}
console.log(carColl);*/
console.log(student.laptop?.brand.length);

//function in object
// function createUser(name,age){
//     return{
//         name,
//         age,
//         greet(){
//             console.log("Good morning "+this.name);
//         }
//     }
// }

// let user1=createUser('sailesh',30);
// console.log(user1);
// console.log(user1.greet());

//create objects using constructor
function car(name,color){
    this.names=name;
    this.col=color;
}
let bmwCar=new car('bmw','orange');
console.log(bmwCar);
let cars=new car('Ford','Red');
console.log(cars);

//factory(no new keyword)
function createUser(name,age){
    return{
        name,
        age
    }
}
let user=createUser('rohan',22);
console.log(user);
