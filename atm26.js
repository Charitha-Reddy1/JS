//ATM

//otp
let balance=35000;

function verification(otp){
    return new Promise((resolve,reject)=>{
        console.log("Verfying otp..");
        setTimeout(()=>{
            if(otp===1596){
                resolve(`Your otp is verified and correct ✅`)
            }
            else{
                reject(`Invalid OTP, Try again `);
            }
        },2000)
    })
}

//Acc balance checking

function chebal(){
    return new Promise((resolve,reject)=>{
        console.log("Checking account balance..");
        setTimeout(()=>{
            
           resolve(`Your current balance is :${balance}`)
        })
    })
}

//Withdrawal

function wd(amount){
    return new Promise((resolve,reject)=>{
        console.log("Withdraw amount needed..");
        setTimeout(()=>{
            if(amount<=balance){
                resolve(`Withdraw amount :${amount}✅ Balance-amount:${balance-amount}`)
                balance=balance-amount;
            }
            else{
                reject(`Insufficient balance..`);
            }
        },2000)
    })
}

function printre(){
    return new Promise((resolve,reject)=>{
        console.log("Printing receipt..");
        setTimeout(()=>{
          
                resolve(`Transaction successfully completed,collect your cash`)
           
        },2000)
    })
}

async function atm(){
    try{
       console.log(await verification(1596));
       console.log(await chebal());
       console.log(await wd(3000));
       console.log(await printre());
    }
    catch (err) {
        console.log(err);
    }
}

atm();

async function atm1(){
    try{
       console.log(await verification(1597));
       console.log(await chebal());
       console.log(await wd(6000));
       console.log(await printre());
    }
    catch (err) {
        console.log(err);
    }
}

atm1();