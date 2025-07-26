

/*
//22nd day
//promises
//1.pending 2.resolve 3.reject

function product(mob){
    return new Promise((resolve,reject)=>{
        console.log("Searching for the product..."); //product
        setTimeout(()=>{
            if(mob){
                resolve("Your product will be delivered in 2 days.");
            }
            else{
                reject("The product is out of stock!!");
            }
        },5000);
    });
}

product(true)
.then(msg=>console.log(msg)) //handling promising success
.catch(err=>console.log(err))*/
/*
//23rd day
function item(res){
     return new Promise((resolve,reject)=>{
        console.log("Searching for the dish..."); 
        setTimeout(()=>{
            if(res){
                resolve("Item is available.");
                console.log(10+20);
            }
            else{
                reject("Item is not available.");
            }
        },3000);
    });
}
function order(res){
     return new Promise((resolve,reject)=>{
        console.log("Searching for the restaurant..."); //product
        setTimeout(()=>{
            if(res){
                resolve("Restaurant is open , order your fav dish.");
                item(true)
                .then(msg=>console.log(msg)) //handling promising success
                .catch(err=>console.log(err)); 
            }
            else{
                reject("Restaurant is closed for the day!!");
            }
        },3000);
    });
}


order(10!==11)
.then(msg=>console.log(msg)) //handling promising success
.catch(err=>console.log(err))*/

/*
//mobile_recharge
function recharge(pay){
     return new Promise((resolve,reject)=>{
        console.log("Mobile recharge..."); 
        setTimeout(()=>{
            if(String(pay).length===10){
                resolve("Your recharge is successful.");
            }
            else{
                reject("Your recharge is failed due to payment issues !!");
            }
        },3000);
    });
}

let num=prompt("Enter ur cell number:");
recharge(num)  
.then(msg=>console.log(msg)) //handling promising success
.catch(err=>console.log(err));
*/

//train tickets travelling

function train(tkt1){
     return new Promise((resolve,reject)=>{
        console.log("Your ticket needs to be confirmed..."); 
        setTimeout(()=>{
            if(tkt1){
                resolve("Your ticket is confirmed and alloted seat no is 36.");
            }
            else{
                reject("Your ticket is not !!");
            }
        },3000);
    });
}


train(true)  
.then(msg=>console.log(msg)) //handling promising success
.catch(err=>console.log(err));
