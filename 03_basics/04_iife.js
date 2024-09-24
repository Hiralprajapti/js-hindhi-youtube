// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // name iife
    console.log(`DB CONNECTE`);  
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh")