const cart = ['shirt', 'paint', 't-shirt'];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.catch(function(error){
    console.log(error.message);
})
.then(function(orderId){
    return payment(orderId);
})
.catch(function(error){
    console.log(error.message);
})
.then(function(paymentId){
    console.log(paymentId);
})
.catch(function(error){
    console.log(error.message);
})
.finally(() => {
    // This code will be executed regardless of success or failure
    console.log('Finally block');
});

// console.log("this is new code");

function createOrder(cart){
    
        return new Promise(function(reslove, reject){
        if(validateOrder()){
            reslove("12345");
        }
        else{
            const error = new Error("This is error to create order");
            reject(error);
        }
    });

}

function payment(cartId){

    return new Promise(function(reslove, reject){
        if(validatePayment()){
            reslove("the payment is done");
        }
        else{
            reject(new Error("The payment in not completed"));
        }
    });

}

function validateOrder(){
    return false;
    // return true;
}

function validatePayment(){
    return false;
}