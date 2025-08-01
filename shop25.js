//order process of a product from search to shipment

 let prod={"laptop":50000,"mobile":32000,"tab":15000,"mouse":5000,"keyboard":719,"hair dryer":799}
 
 //1.Product search

function pro(search){
    
     return new Promise((resolve,reject)=>{
        console.log("Product Searching 🔍..."); 
        setTimeout(()=>{
            if(prod.hasOwnProperty(search.toLowerCase())){
                resolve(`Product ${search} is found`);
            }
            else{
                reject(`Product is not found..`)
            }
        },3000);
    });
}

//2.Stock

function stock(search,stock){
     return new Promise((resolve,reject)=>{
        console.log("Stock check 🤓..."); 
        setTimeout(()=>{
            if(stock===1){
                resolve(`Stock is available `);
            }
            else{
                reject("❌Out of stock !!");
            }
        },3000);
    });
}

//3.place order
function porder(search,money){
     return new Promise((resolve,reject)=>{
         console.log("Payment status...💸");
        setTimeout(()=>{
            if (money === prod[search.toLowerCase()]) {
                resolve(`✅ Your payment is successful and "${search}" is ordered 👍🏻`);
            }
            else{
                reject("Your payment failed !!");
            }
        },3000);
    });
}

//4.shipment

function ship(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            
            resolve("🚚 Shipment process will start in a week.");
            
            
        },4000)
    })
}

async function data1(params) {

    const search = "tab";
    const stockAvailable = 1;
    const payment = 16000;

    try{
        console.log(await pro(search));
        console.log(await stock(search,stockAvailable));
        console.log(await porder(search,payment));
        console.log(await ship());
    }
    catch(err){
        console.log(err);
    }
}
data1();