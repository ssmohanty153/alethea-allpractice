
//concat
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(array3);
//
// const array1 = [['a', 'b'], 'c'];
// const array2 = ['d', ['e', 'f']];
// const array3 = array1.concat(array2);
// console.log(array3);
//********************************** */


//copyWithin();start copying from 1 index but copy element from 3 index
// const arr1=[ 'a', 'b', 'c', 'd', 'e', 'f' ];
// console.log(arr1.copyWithin(-1));//[ 'a', 'b', 'c', 'd', 'e', 'a' ]
//console.log(arr1.copyWithin(1,3));//[ 'a', 'd', 'e', 'f', 'e', 'f' ]
//console.log(arr1.copyWithin(0, 3, 4));//[ 'd', 'b', 'c', 'd', 'e', 'f' ]

//********************************************************************* */
//entries provides all key value pair
// var arr1=[ 'a', 'b', 'c', 'd', 'e', 'f' ];
// var array1 = arr1.entries();

// for (x of array1) {
//     console.log(x);
// }
//
//[ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
// [ 3, 'd' ]
// [ 4, 'e' ]
// [ 5, 'f' ]

//every
// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(ages.every(checkAdult));//false
/*************************************************************** */
//every()
// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
//   console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

/***************************************************** */
//filter
 var ages = [32, 33, 16, 40];

// const res=ages.filter(x=>x>=18);
// console.log(res);//[ 32, 33, 40 ]

function age(x){
    return x>=18;
}
console.log(ages.filter(age));


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);//[ 'exuberant', 'destruction', 'present' ]

/************************************************** */
//find();
// const array1 = [5, 12, 8, 130, 44];
// const found1 = array1.find(element => element > 10);
// const found2 = array1.findIndex(element => element > 10);
// console.log(found1); 
// console.log(found2);

/**************************************************************** */
//flat();
// const arr1 = [0, 1, 2, [[3, 4]]];
// console.log(arr1.flat(2));//[ 0, 1, 2, 3, 4 ]

//
/************************************************************ */
//flatMap
// var arr = [1, 2, 3, 4];

// //console.log(arr.flatMap(x => [ x * 2]));//[ 2, 4, 6, 8 ]
// //console.log(arr.map(x => [x * 2]));//[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]
//console.log(arr.flatMap(x => [x, x * 2]));
//[
//     1, 2, 2, 4,
//     3, 6, 4, 8
//   ]

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));//a b c
/******************************************************************** */

//from
// var myArr = Array.from("ABCDEFG");
// console.log(myArr);

/*********************************************** */
//includes
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));//true
// console.log(array1.includes(2,2));//false

// console.log(array1.indexOf(1));//0
// console.log(array1.join());
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }
// console.log(array1.indexOf('a'));//0

// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt);
// console.log(x);//[ 2, 3, 4, 5 ]
//console.log(Array.of(1,2,3));

// var numbers = [4, 9, 16, 25];
// numbers.push(1);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

/******************************************************* */
//reduce
// var numbers = [175, 50, 25];
// function myFunc(total, num) {
//   return total + num;
// }
// console.log(numbers.reduce(myFunc))

// const array1 = [[0, 1], [2, 3], [4, 5]].reduce(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
//   );
//   console.log(array1);//[ 0, 1, 2, 3, 4, 5 ]
//   const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
//   );
//   console.log(array1);//[ 4, 5, 2, 3, 0, 1 ]
//   //
//   console.log(array1.reverse());//
//  // [ 1, 0, 3, 2, 5, 4 ]

/******************************************************* */
//const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(firstElement);//1
// console.log(array1);//[2,3]
// const firstElement = array1.unshift(1);
// console.log(array1);//[ 1, 1, 2, 3 ]

/************************************** */
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
// console.log(citrus);
/***************************************************8 */
//sort
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// const arr1=[ 1, 0, 3, 2, 5, 4 ,1000,1200,-8];
// console.log(fruits.sort());
// console.log(arr1.sort());
/************************************************* */
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);//[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// console.log(fruits.toString());//Banana,Orange,Lemon,Kiwi,Apple,Mango
/*********************************************************** */

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var iterator = fruits.valueOf();
// for (const value of iterator) {
//     console.log(value);
//   }
// Banana
// Orange
// Apple
// Mango
/************************************************************* */
//   const arr1=["babul","hari","ram"];
//   const arr2=arr1.map((name=>name.toUpperCase()));
//   console.log(arr2);