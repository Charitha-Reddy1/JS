 
/*
function pro(lappy){
     return new Promise((resolve,reject)=>{
        console.log("Product Searching 🔍..."); 
        setTimeout(()=>{
            if(lappy){
                const details={
                    name:'Asus',
                    price:"72,500",
                    features:['i7 intel processor,ram 16 GB,SSD 512,weight 1.5kg']
                }
                resolve(details);
            }
            else{
                reject("❌ Product not found !!");
            }
        },3000);
    });
}


async function pro1(params) {
    try{
        let details=await pro(true);
        console.log(`✅ product found ${brand}`);
        console.log(`BRAND OF LAPTOP:${details.brand}`);
        console.log(`price of laptop:${details.price}`);
        console.log(`features of laptop:${features.price}`);
    }
    catch(err){
        console.log(`⚠️ Invalid  product name,Error found !`);
    }
}

pro1();
*/
//login 
function login(uname,pword){
     return new Promise((resolve,reject)=>{
        console.log("Username Searching 🔍..."); 
        setTimeout(()=>{
            if(uname==='charitha' && pword==='herself'){
                resolve('🎉 Welcome to the office');
            }
            else{
                reject();
            }
        },3000);
    });
}

function data(){
    return new Promise((resolve,reject)=>{
        console.log("🔃 Fetching user details...");
        setTimeout(()=>{
            resolve("NAME:'Nireesha'\nROLE:'HR'\nEMAIL:'Usernamepw123@gmail.com'")
        },4000)
    })
}

async function data1(params) {
    try{
        console.log(await login('charitha','herself'));
        console.log(await data());
    }
    catch(err){
        console.log('❌ Check your username and password');
    }
}

data1();
