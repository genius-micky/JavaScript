// Immediately Invoked Function Expression (IIFE)

(   // name IIFE
     function chai(){
    console.log(`DB Connected`);
    
}()
);

// (function definition)(execution call) 

// so, to remove pollution of global scope we use IIFE

( (name) => {
    console.log(`DB connected ${name}`);
    
})('mickey')