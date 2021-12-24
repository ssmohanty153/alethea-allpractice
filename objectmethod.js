// const obj1={'a':1,'b':10,'c':'abc'};

// console.log(Object.values(obj1));//[ 1, 10, 'abc' ]


// const obj1={'a':1,'b':10,'c':'abc'};
// console.log(Object.keys(obj1));//[ 'a', 'b', 'c' ]


// let obj1={
//     read(){
//         return 'read'
//     }
// };
// let obj2={
// write(){
//     return 'write';
// }
// };
// Object.setPrototypeOf(obj2,obj1);//{ write: [Function: write] }
//  console.log(obj2.read());
//  console.log(obj2.write());
//  console.log(obj1);//{ read: [Function: read] }
//  console.dir(obj1);//{ read: [Function: read] }


// const arr1 = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];

// const obj1 = Object.fromEntries(arr1);

// console.log(obj1)//





// const obj1={'a':1,'b':10,'c':'abc'};


// //var obj2=Object.seal(obj1);


// console.log(obj1.b);

// console.log(delete obj1.b);


// const obj1={'a':1,'b':10,'c':'abc'};

// // const obj2=Object.preventExtensions(obj1);

// // console.log(Object.isExtensible(obj2));//false

// obj1.d='9';

// console.log(obj1.hasOwnProperty('d'));//true



// const obj1={'a':1,'b':10,'c':'abc'};

// const obj2={'a':1,'b':10,'c':'abc'};

// const obj3=Object.is(obj1.a,obj2.b);

// console.log(obj3);//false


// const prototype1 = {};  
// const object1 = Object.create(prototype1);  
// const prototype2 = {};  
// const object2 = Object.create(prototype2);  
// console.log(Object.getPrototypeOf(object1) === prototype1);  
// console.log(Object.getPrototypeOf(object2) === prototype2); 


// const obj1={'a':1,'b':10,'c':'abc'};
// const obj2={'a':1,'b':'abc','c':101};

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2)



// const fruits={
//     apple:function(){
//         console.log(`this ${this.name} is ${this.test}`)
//     }
// }

// const orange =Object.create(fruits);
// orange.name='apple';
// orange.test='sweets';

// orange.apple();

// const obj1 = {};  
// Object.defineProperties(obj1,{  
//   pro1: {  
//     value: 'a',  
//     value: 'b',  
//     value: 'c',  
//     },  
//  pro2: {}  
// });  
// console.log(obj1.pro1);  //c


// const obj1 = {};  
// Object.defineProperty(obj1,'pro1',{    
//     value: 'a',  
//     value: 'b',  
//     value: 'c',   
// });  
// console.log(obj1.pro1);  


// const obj1={'a':1,'b':10,'c':'abc'};
// console.log(Object.entries(obj1)[2]);//[ 'c', 'abc' ]

// const obj1={'a':1,'b':10,'c':'abc'};

// const obj2=Object.freeze(obj1);

// obj2.a='12';
// console.log(obj2);//


// const obj1={'a':1,'b':10,'c':'abc'};

// const getOwnPro1 = Object.getOwnPropertyDescriptor(obj1, 'a'); 

// const getOwnPro2 = Object.getOwnPropertyDescriptors(obj1);
// console.log(getOwnPro1); //{ value: 1, writable: true, enumerable: true, configurable: true }
// console.log(getOwnPro2);




// const obj1={'a':1,'b':10,'c':'abc'}

// console.log(Object.getOwnPropertyNames(obj1)); //[ 'a', 'b', 'c' ]



// var obj1 = {};
// var a = Symbol('a');
// var b = Symbol.for('b');

// obj1[a] = 'local';
// obj1[b] = 'global';

// var objsym1 = Object.getOwnPropertySymbols(obj1);

// console.log(objsym1.length); // 2
// console.log(objsym1); //[ Symbol(a), Symbol(b) ]

 




// const obj1={'a':1,'b':10,'c':'abc'};
// const obj2={'a':1,'b':10,'c':'abc'};
// console.log(Object.is(obj1,obj2));//false





// var obj1={'a':1,'b':10,'c':'abc'};
// console.log(obj1.propertyIsEnumerable('a'));//true


// console.log(obj1[Object.keys(obj1)[Object.keys(obj1).length-1]]);//last value abc

const obj1={'a':1,'b':10,'c':'abc'};

console.log(Object.keys(obj1));

// console.log(Object.getOwnPropertyNames(obj1));


const person={
    name:'subhransu',
    age:18,
}