function RateLimiter(limit, interval) {
    let count = 0;
    let timer = null;
    return function (){
        if(count < limit){
            count++;
            if(!timer){
                timer = setTimeout(() => {
                    count = 0;
                    timer = null;
                },interval)
            }
            return `Count: ${count}`
        }
        else{
           return "Limit exceeded" 
        }
    }
    
};

const checkLimit = RateLimiter(3,2000);
console.log(checkLimit());
console.log(checkLimit());
console.log(checkLimit());
console.log(checkLimit()); // Blocked call
