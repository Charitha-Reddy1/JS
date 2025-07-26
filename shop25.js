 const lap={
                    name:'Asus',
                    price:"72,500",
                    features:['i7 intel processor,ram 16 GB,SSD 512,weight 1.5kg']
                }
function pro(lap){
     return new Promise((resolve,reject)=>{
        console.log("Product Searching 🔍..."); 
        setTimeout(()=>{
            if(lap){
                resolve('Product is available');
            }
            else{
                reject("❌Product is not available !!");
            }
        },3000);
    });
}

function stock(sa){
     return new Promise((resolve,reject)=>{
        console.log("Stock check 🤓..."); 
        setTimeout(()=>{
            if(sa){
                resolve('Stock is present ');
            }
            else{
                reject("❌There's no stock of the product !!");
            }
        },3000);
    });
}

function order(pay,det){
     return new Promise((resolve,reject)=>{
         console.log("Payment status...💸");
        setTimeout(()=>{
            if(pay){
                resolve(`Your payment is successful and item is ordered👍🏻`);
            }
            else{
                reject("Your payment is failed ,retry later!!");
            }
        },3000);
    });
}

function ship(){
    return new Promise((resolve,reject)=>{
        //console.log("🔃 Fetching user details...");
        setTimeout(()=>{
            console.log(`Order is ready for shipment..`)
            console.log("Product details:", JSON.stringify(lap, null, 2));
            resolve("Shipment process started.");
        },4000)
    })
}

async function data1(params) {
    try{
        console.log(await pro(true));
        console.log(await stock(true));
        console.log(await order(true,lap));
        console.log(await ship());
    }
    catch(err){
        console.log(err);
    }
}
data1();