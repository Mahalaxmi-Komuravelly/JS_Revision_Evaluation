const inervalStore = (() => {
    let currentId = 0;
    let timers = {};
    function mySetInterval(callback, delay) {
        let id = ++currentId;
        function run(){
            timers[id] = setTimeout(() => {
            callback();
            if(timers[id]) run();
        }, delay)
        }
        run();
        return id;
    } 
        function myClearInterval(id) {
            clearTimeout(timers[id]);
            delete(timers[id])
        }
    
    return {mySetInterval, myClearInterval}
})();

const id = inervalStore.mySetInterval(()=>{
    console.log("Running...")
},1000);

setTimeout(()=> {
    inervalStore.myClearInterval(id);
    console.log("Stop Running");
}, 5000);