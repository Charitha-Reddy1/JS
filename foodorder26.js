//order process of a product from search to shipment

 let prod={"burger":139,"pizza":159,"pasta":279,"noodles":149,"biryani":299}
 
 //1.Item search

function fi(search){
     return new Promise((resolve,reject)=>{
        console.log("Food item Searching 🔍..."); 
        setTimeout(()=>{
            if(prod.hasOwnProperty(search.toLowerCase())){
                resolve(`Your dish ${search} is found`);
            }
            else{
                reject(`Dish is not found..`)
            }1
        },3000);
    });
}





//2.place order
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

//3.delivery

function ship(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            
            resolve("🚚Food will be delivered in an hour.");
            
            
        },4000)
    })
}

async function data1(params) {

    const search = "pizza";
    const payment = 159;

    try{
        console.log(await fi(search));
        console.log(await porder(search,payment));
        console.log(await ship());
    }
    catch(err){
        console.log(err);
    }
}
data1();