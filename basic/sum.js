console.log("Hello World");

function sum(n){
    let result = 0;

    for (let i = 1; i<=n ; i++){
        result += i;
        
    } 
    return result;
}

console.log(sum(10)); 


function sum1(n){
    return ((n+1)*n)/2;
}

console.log(sum1(10)); 
