function square(x){
    return x*x
};

let squarefx = function square(x){
    return x*x
};

let square = (x) => x*x;


let greater = (x,y) => {
    if(x>y){ 
        return console.log(`${x} is greater`);
    }
    return console.log(`${y} is greater`);
}

// arrays and array methods  ... 
const arr = [1,2,3,4,5];
const square = (x)=> x*x; // function to find square 
const even = (x)=> x%2==0; // function to find number being even
const callback_function = (accumulater,currentvalue)=>{return accumulater + currentvalue;}
const starting_value = 0;

// array methods 
arr.map(square)     // output's new array as [1,4,9,16,25]
arr.filter(even);  // output [false, true, false, true, false]
arr.reduce(callback_function,starting_value) // output 15





// creating a promise ... 
const callback_function = (resolve,reject)=>{
    if (True){
        resolve('everything worked');
    } else {
        reject(Error('nothing worked'));
    }
};
const promise = new Promise(callback_function); 

// chaining method ...
callbackmethod_for_success = (result) => console.log(result);
callbackmethod_for_error = (error) => console.log(error);

promise.then(
    callbackmethod_for_success,
    callbackmethod_for_error
);

// Remember fetch method for accessing the api's itself is a promise so u can write like ... 
const url = 'www.google.com/v1/some_api_call'; // FYI .. this is not a real api ...  
fetch(url).then(
    callbackmethod_for_success,
    callback_method_for_error
);

// or you can do something like -- 
fetch(url).then(callbackmethod_for_success).catch(callback_method_for_error)

// async function similar to above but in a different way .. 
async (url) => { 
    try { 
        const response = await fetch(url); 
        console.log(await response.text());
    } catch (err){
        console.log('fetch failed', err);
    }
};



// rest operator 
const arr = [1,2,3,4,5];
const sum = (...args) => {
    let total_sum=0; 
    for (let arr_items of args) {
        total_sum+=arr_items;
    } 
    return total_sum;} 
sum(...arr) // output 15

// spread operater  
const extended_arr = [...arr,6,7,8,9,10];
console.log(extended_arr); // output [1,2,3,4,5,6,7,8,9,10]