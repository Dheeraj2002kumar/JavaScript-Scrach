// ----------- scope -------------------
/*
1. global
2. function
3. block scope


*/

// global

// let global1 = "Narayan";  

// function scope(){
//     console.log(global1);
// }
// scope();

// console.log(global1)






// function scope

// function functionScope(){
//     let massage = "Hii developer...";
//     console.log(massage)
// }

// functionScope();





// // block scope
// if (true){

//     let block_scope = "Heloo...";
//     console.log(block_scope);

// }

// console.log(block_scope)



// febonacii sereas 

/**
 * 0
 * 1
 * 1
 * 2
 * 3
 * 5
 * 8
 * 
 */

function febonacii(n) {
    let a = 0;
    let b = 1;
    let sereis = [];

    // console.log(a);
    for (let i = 0; i < n; i++) {
        sereis.push(a)
        let c = a + b;



        a = b
        b = c
    }
    return sereis;

}

console.log(febonacii(20))