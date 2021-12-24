// var str1: string = "Hello World"
// console.log(str1);


// class Hello1 {
//     hello(): void {
//         console.log("hello world");

//     }
// }

// var hello2 = new Hello1();

// hello2.hello();


// var globalnumber: number = 10;

// class NumberGlobal {
//     class_var = 13;
//     static s_val = 19;

//     num(): void {
//         var local_val = 21;
//         console.log(local_val);
//     }
// }
// console.log(globalnumber);
// var numberGlobal= new NumberGlobal();
//  console.log(numberGlobal.class_var);
//   console.log(NumberGlobal.s_val);
//   numberGlobal.num();


// interface inter1 {
//     x: number;
//     y: number;
//   }
//   interface inter1 {
//   z:string;
//   }

//   function f1(i1:inter1){
//       console.log(`${i1.x} ${i1.y}`)
//   }

//   function f2(i2:inter1){
//     console.log(`${i2.z}`)
// }

// const obj1 = {
//     x:7,
//     y:8,
//     z:"hare",
//     a:"ok"
// }

// f1(obj1);
// f2(obj1);



// function f1(i1:number,i2:string,i3?:string){
//     console.log("i1 "+i1);

//     console.log("i2 "+i2);

//     console.log("i3 "+i3);

//   }
//   f1(1,"subhransu");


// function addStrNum(input1: number | string, input2: number | string,input3:string ){
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number'||input3==='number_only') {
//     result = +input1 + +input2;
//     console.log(typeof(input1))
//   }
//   else {
//     result = input1.toString() + input2.toString();
//   }
//   // if(input3==='number_only'){
//   //   return +result;
//   // }
//   // else{
//   //   return result.toString();
//   // }
//   return result;
// }
// const age1=addStrNum(20,21,'number_only');
// console.log(age1);

// const str=addStrNum('subhransu','sekhar','string_only')
// console.log(str);
// const age2=addStrNum('20','21','number_only');
// console.log(age2);



// function addStrNum1(input1: number, input2: number){
//   return input1+input2;
// }

// function addStrNum2(input1: number){
//   console.log("result"+input1)
// }

// let fun1:(a:number,b:number)=>number;

// fun1=addStrNum1;
// fun1=addStrNum2;


// console.log(fun1(8,8));

// addStrNum2(addStrNum1(15,10));



// let arr1: (string | number)[] = ['apple', 2, 'orange', 3, 4, 5,'banana']; 
// let arr2: Array<string|number> = ['apple', 2, 'orange', 3, 4, 5,'banana']; 

// console.log(arr1[1]);
// console.log(arr2[3]);


// var tuple:[number,string]=[1,'subhransu'];


// console.log(tuple[0]);


// enum city{
//   pin=560102,
//   state="karnataka",
//   block='simulia'
// }

// function getState(cityName:string):city{
//   if(cityName==='bangalore'||cityName==='bangalore_urban'){
//     return city.state;
//   }
// }

// let myCity:city=getState('bangalore');
// console.log(myCity);


// enum city1{
//   pin=1,
//   state = Statepin('bangalore'),
//   block=10
//   }

//   function Statepin(cityName:string):number{
//     if(cityName === 'bangalore'){
//       return 560102;
//     }
//   }

//   console.log(city1);




// class Employee{
//   name :string;

// }
// interface IStudent extends Employee{
//   studentId:number;

// }
// let  std:IStudent={name:"subhransu",studentId:215};
// console.log(std);



// class Bike{
//   name:string;
//   constructor (name:string){
//     this.name=name;
//   }
//   run(speed:number){
//     console.log(this.name+"running in"+speed+"speed");
//   }
// }

// class Car extends Bike{

//   constructor (name:string){
//     super(name);

//   }
//   run(speed:number){
// super.run(speed)
//   }
// }

// class Train extends Car{

//   constructor (name:string){
//     super(name);

//   }
//   run(speed:number){
// super.run(speed)
//   }
// }


// let train=new Train("kalinga");
// train.run(200);

// let car=new Car("honda");
// car.run(130);



// interface IHr {
//   name: string;
//   display():void;
// }

// interface IEmployee {
//   empid: number;
// }

// class Employee implements IHr, IEmployee {
//  empid: number;
//   name: string;
  
//   constructor(empid:number,name:string) {
//       this.empid = empid;
//       this.name = name;
//   }

//   display():void{
//     console.log(this.name+"--->"+this.empid);
//   }
// }

//    var employee:IHr = new Employee(215,"subhransu");

//    employee.display();



// class Hr {
//   name: string;
  
//   constructor(name: string) {
//       this.name = name;
//   }
// }

// class Employee extends Hr {
//   empid: number;
  
//   constructor(empid: number, name:string) {
//       super(name);
//       this.empid = empid;
//   }
  
//   displayEmpName():void {
//       console.log(this.name +  "-->" + this.empid);
//   }
// }

// let emp = new Employee(215, "subhransu");
// emp.displayEmpName(); 


// abstract class Hr {
//   name: string;
  
//   constructor(name: string) {
//       this.name = name;
//   }

//   display(): void{
//       console.log(this.name);
//   }
// }

// class Employee extends Hr { 
//   empCode: number;
  
//   constructor(name: string, code: number) { 
//       super(name);
//       this.empCode = code;
//   }
// }

// let emp: Hr = new Employee("James", 100);
// emp.display();





// abstract class Hr {
//   name: string;
  
//   constructor(name: string) {
//       this.name = name;
//   }

//   display(): void{
//       console.log(this.name);
//   }
//   abstract show(string):Hr;
// }

// class Employee extends Hr { 
//   empCode: number;
  
//   constructor(name: string, code: number) { 
//       super(name);
//       this.empCode = code;
//   }
//   show(name:string):Hr{
//     return new Employee("subhransu",215);

//   }
// }

// let emp: Hr = new Employee("subhransu sekhar", 100);
// emp.display();


// import { age, Employee } from "./export";
// let empObj = new Employee("subhranmsu", 215);
// empObj.displayEmployee();
// console.log(age);



// class Teacher {
//   readonly name: string;
//   readonly education: string = "btech";

//   constructor(theName: string,this) {
//     this.name = theName;
//     this.education=education;

//   }
// }

// let str = new Teacher("subhransu");
// console.log(str);
// console.log(str.education);
// //str.name = "radhe";
// //str.Education="mtech";



// class Circle {
//   static pi = 3.14;

//   static circleArea(radius:number) {
//       return (this.pi * radius * radius);
//   }

//   circumference(radius:number):number { 
//       return (2 * Circle.pi * radius);
//   }
// }

// Circle.circleArea(5); // returns 78.5

// let circleObj = new Circle();
// circleObj.circumference(5);


// function getArray<T>(items:T[]):T[]{
//   return new Array<T>().concat(items);
// }
// function gerArray2(newitems:any[]):any[]{
//   return new Array().concat(newitems);
// }

// let arr1=gerArray2([100,200]);
// let arr2=gerArray2(['subhransu','sekhar']);
// let arr3 = getArray<number>([100, 200]);
// let arr4=getArray<string>(['hare','krishna']);



// class Person{
//   firstname:string;
//   lastname:string;
//   age:number;
//  constructor(fname:string,lname:string,myage:number){
//    this.firstname=fname;
//    this.age=myage;
//    this.lastname=lname;

//  }
// }

// function display<T extends Person>(per:T):void{
//   console.log(per.firstname+""+per.lastname+""+per.age);
// }

// function displayvalue<T extends Person>(per:T):any{
//   return per.age+""+per.firstname+""+per.lastname;
// }

// var new1=new Person("subhransu","mohanty",19);
// display(new1);

// var new2=new Person("subhransu","mohanty",19);
// console.log(displayvalue(new2));


// interface Iprcesser<t,u>{
// key:t;
// value:u;
// }

// let value1:Iprcesser<number,string>={key:1,value:"subhransu"};
// let value2:Iprcesser<number,string>={key:2,value:"sekhar"};
// console.log(value2);

// console.log(value1);




// interface Iprocess<t,u>{
//   (key:t,value:u):void;
//   }
  
//   function numkey(key:number,value:number):void{
//     console.log(key+"--"+value)
//   };
// function strkey(key:string,value:number):void{
//   console.log(key+"--"+value)
//   };

//   let num:Iprocess<number,number>=numkey;
//   num(10,100);

//   let num2:Iprocess<string,number>=strkey;
//   num2('subhransu',10);




interface Iprocess<t,u>{
 process(key:t,value:u):void;
  }
  
  class Processor implements Iprocess<number,string>
  {
    process(key:number, val:string):void { 
      console.log(val+"-->"+key);
  }

  }

  let proc:Iprocess<number,string>=new Processor();
   proc.process(1,"subhransu");
