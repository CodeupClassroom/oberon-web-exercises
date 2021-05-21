// // For Loops Exercises
//
// // // // TWO
// function showMultiplicationTable(num){
//     // starting at 1, stopping at 10, iterate 1 by 1
//     var string;
//     for(let i = 1; i<=10; i++){
//         // solution variable holding result of  num * i
//         let solution = num * i;
//         string = `${num} * ${i} = ${solution}`;
//     }
//     return string;
// }

// console.log(showMultiplicationTable(7));

function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(` ${num} * ${i} === ${num * i}` );
    }
}
showMultiplicationTable(7);





//
//  // // THREE
// for(let i = 0; i <= 10; i++){
//     var randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20);
//     console.log(`${randomNum}  at iteration: ${i}`);
//     if(randomNum % 2 === 0){
//         console.log(`${randomNum} is even`);
//     } else {
//         console.log(`${randomNum} is odd`);
//     }
// }
//
//
// // // // FOUR (NESTED LOOPS)
//

// for(let i = 1; i<= 9; i++){
//     console.log(i.toString().repeat(i));
// }




// for(let i = 0; i<=9; i++){
//     var string = '';
//     // // inner loop
//     for(let x = 1; x <= i; x++){
//         // console.log(x, i);
//         string += i + " "
//         // console.log(string);
//     }
//     console.log(string);
// }
//
//
// // // FIVE
for(let i = 100; i >= 5; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}

console.log(`-------------`)

for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}
