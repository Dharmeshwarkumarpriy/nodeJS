// immediately Invoked function Expressions (IIFE)

function one(){
    console.log('DB CONNECTED');
}
one();

(function one1(){
    console.log('DB CONNECTED');
})();

(() => {
    console.log('DB CONNECTED TWO');
})();

(function two() {
    // named IIFE
    console.log(`DB CONNECTED TWO`);
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("dharmy")