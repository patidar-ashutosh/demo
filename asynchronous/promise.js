// Promise.all
/* In JavaScript, the Promise.all method is used to handle multiple promises concurrently.
It takes an array of promises as input and returns a new promise that resolves to an array 
of the resolved values when all the input promises are fulfilled. If any of the input promises
is rejected, the returned promise will be rejected with the reason of the first rejected promise. */


// Promise.allSettled
/* Promise.allSettled is a JavaScript method that takes an array of promises and returns a single promise
that is fulfilled with an array of objects, each representing the outcome of the corresponding promise
in the input array. The objects in the resulting array have a status property indicating whether the
promise was fulfilled or rejected, and a value or reason property containing the fulfillment value or rejection reason, respectively.

Unlike Promise.all, which rejects immediately if any of the input promises is rejected,
Promise.allSettled waits for all promises to settle (either fulfill or reject) and then returns a
result array containing the outcome of each individual promise. This makes it useful in scenarios
where you want to know the outcome of all promises, regardless of whether they were fulfilled or rejected. */


/* Promise.reject is a static method in JavaScript that returns a new Promise object that is rejected
with a specified reason or error.
Promise.resolve, which creates a Promise that is resolved with a specified value. */



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