//arithmetic
//console.log(4+4);
//comparison
// console.log(5 == "5");
// console.log(5 === "5");
//ternary operator
// let age=12;
// let statas=(age>18)?"Can vote":"Cannot vote";
// console.log(statas);
/*//loops
for(let i=1;i<51;i++){
    console.log(i);
}
//while loop
let i=0;
while(i<=3){
    console.log("while loop "+i);
    i++;
}
//for loop with arrays
let fruits=['grape','watermelon','muskmelon'];
for(let fruit of fruits){
    console.log(fruit);
}
//for loop using objects
let student={name:'lahari',age:21,course:'data science'};
for(let i in student){
    console.log(student[i]);
}

//number guessing
let numb=73;
let userNum=prompt("Enter number:");
while(userNum!=numb){
    if(userNum>numb){
        console.log("Too high try again");
      
    }
    else if(userNum<numb){
        console.log("Too low try again");
        
    }
   userNum=prompt("Enter number:");
}
console.log("Correct Guess !!");

//even numbers from 1 to 100
console.log("~Even numbers upto 100~");
for(i=1;i<51;i++){
    console.log(2*i);
}
console.log("~0dd numbers upto 100~");
for(i=0;i<50;i++){
    console.log(2*i+1);
}
console.log("~numbers divisible by 3 and 5~")
for(i=1;i<101;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}
console.log("~a+ if grades is bw 90 to 100~");
let grade=prompt("Enter marks");
if(grade>89 && grade<101){
    console.log("A+ grade");
}
else{
    console.log("Other grade");
}
console.log("~Prime numbers (1-100)~");
let count=0;
let i,j;
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++;
}
if(count==2)
console.log(j);
count=0;
}
console.log("~9 table~");
for(i=1;i<16;i++){
    console.log("9 * "+i+" = "+9*i);
}*/
//arrays
let arr=[12,343,45,143,42];
let arr1=['fam','jam','scam','mam'];
let res=arr.concat(arr1);
console.log(res);
console.log(res.length,res[3]);
console.log(arr.pop());
arr.push(34)
console.log(arr);
let res1=arr1.toString();
console.log(res1);
arr[1]=434;
console.log(arr);
arr.unshift(1);
arr1.shift();
console.log(arr+"\n"+arr1);