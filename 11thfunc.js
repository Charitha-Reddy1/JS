var a=56;
console.log(a,typeof a);
var b="javasc day-2";
console.log(b,typeof b);
var c=22>20;
console.log(c,typeof c);
var d=11n;
console.log(d,typeof d) ;
var e=null;
console.log(e);
let fn='fullname';
console.log(fn,typeof fn);
let char='a';
console.log(char,typeof char);
//objects
let student={
    name:'deepika',age:23,isPass:true
}
console.log(student);
console.log(student.age);
console.log(student.name);
student['name']='ananya';
console.log(student.name);
console.log(student['age']+4);

//arrays
let flowers=['lily','dahlia','jasmine','tulip']
console.log(flowers);
console.log(flowers[3]);
//function
function add(){
    console.log(10+20);
}
add();

//prompt
// let username=prompt("What is ur name:");
// console.log("Hello, "+username+"!");

//types of functions
//named function
function multi(a,b){
    return a*b;
}
console.log(multi(1.6,4));
console.log(multi(21,4));

let m=9,n=33,p=m*n;
console.log("Value of "+m+"*"+n+" is "+p);

//assign var to a func
let divide=function(i,j){
    return i/j;
}
console.log(divide(40,30));

let sub=function(q,r){
    return q-r;
}

console.log(sub(36,3));

//*important* Arrow function
let greet=(gre) =>{
    console.log("hi hello "+gre);
};
greet('people');

//anonymous function

setTimeout(function (){
    console.log('delayed message');
},10)

//callback function
function sayHello(){
    console.log('HELLO');
}

function greetUser(callback){
    callback();
}

greetUser(sayHello);

//constructor function,used to create objects

function person(name,age){
    this.name=name;      
    this.age=age;
}
let stud=new person('alia',24);
console.log(stud.name);
console.log(stud.age);

//Invoke

(function(){
    console.log("Invoke function runs automatically.")
})();