
//  const firstName = "shajjad";
//  const lastName = "hossan";
//  const age = 25;
//  const profession = "web desiner&developer";
// function sayBio(){
//     return (`my name: ${firstName} ${lastName} may age: ${age} my profession ${profession}`);
// }
// document.write(sayBio());
// function modify(strings,...values){
//      console.log(arguments);
//     let str = '';
//     strings.forEach(string, i => {
//         str += `${string}${values[i]}`
//     });
//     return str;
// }
//  const html = modify`
//  <h1>My Bio</h1>
//  <p>i am a programmer</p>
//  <p>my name: ${firstName} ${lastName} may age: ${age} my profession ${profession}</p>
//  `;
//  document.body.innerHTML= html;

// const add = (sum1,sum2) => sum1+sum2;
// console.log(add(44,56));

// where not to use arrow function..............
// this keyword con't work at arrow function.............
// for using this keyword we have to used simple function....... 
// can't use var variables .............


// Array helper ------------
// map 
// const marks = [35,56,35,63,66];
// const totalMrk = marks.map (mark =>{
//     return mark*2
    //const totalMrk = marks.map (mark => mark*2);


    // forEach

// let dbl = [];
// marks.forEach(mark=> dbl.push (mark*5));
// console.log(dbl);

// find 
// const marks = [35,53,63,43,33];
// const result = marks.find(mark => mark>= 43);
// const result = marks.findIndex(mark => mark>= 43);
// const result = marks.every(mark => mark>= 43);
// const result = marks.some(mark => mark>= 43);
// const result = marks.filter(mark => mark>= 43);
// const result = marks.reduce(mark => mark >= 43);
// console.log(result);

// if else method..................................

// var year = 2020;

// if(year%4===0){
//     if(year % 100 ===0){
//         if(year % 400===0){
//          console.log(`the year ${year} is a leap year`);
//         }else{
//          console.log(`the year ${year} is not a leap year`);
//         }
//         console.log(`the year ${year} is not a leap year`); 
//     }else{
//         console.log(`the year ${year} is a leap year`);
//     }
//     console.log(`the year ${year} is a leap year`);
// }else{
//     console.log("the year"+year+ "is not a leap year");
// }





// truthy and falsy values in javascript.........
// falsy value: 0, " ", undefined,null,false,nan.......
// otherwise every value is truthy value.....


// conditional (ternary) operator.......
// varablename = (condition)? value1:value2 ;
// let age=22;
// console.log(age>=18)? "you can voted" : "you cannot voted" ;




// switch Statement..................

// var area = "circle";//"triangle",rectangle;
// var PI = 3.1416 , l=5, b=4, r=3;
// if(area=="circle"){
//     console.log(`the area of the circle is : ${PI*r**2}`);
// }else if(area=="triangle"){
//     console.log(`the area of the triangle is : ${l*b}/2`);
// }else if (area=="rectangle"){
//     console.log(`the area of the rectangle is : ${l*b}`);
// }else{
//    console.log("please enter the valid data");
// }

// here is the switch statement................
// var area = "circle";//"triangle",rectangle
//  var PI = 3.1416 , l=5, b=4, r=3;
// switch(area){
//     case 'circle':
//     console.log(`the area of the circle is : ${PI*r**2}`);
//     break;
//         case 'triangle':
//         console.log(`the area of the triangle is : ${l*b}/2`);  
//         break;
//           case 'rectangle':
//             console.log(`the area of the rectangle is : ${l*b}`);
//             break;
//               default:
//                 console.log("please enter the valid data"); 
// }



// while loop....................
// var num= 0;
// // block scope.....
// while(num<=10){
//     console.log(num);
//     num++;
// }
 


// Do-while loop...............
// var num= 0;
// do{
//     console.log(num);
//     num++;
// } while(num<=10);



// for loop..........
// for(initalizer,condition,iteration){
    // code to be executed
// }
// for(let a=0; a<=20; a++){
//     console.log(a);
// }
// for(let a = 1; a<=10; a++){
//     let tableOf = 8;
//     console.log(`${tableOf} * ${a} = ${tableOf*a}`);
// }



// function in javascript.........................
// function sum(){
//     let a=10, b=30;
//     let total = a+b;
//     console.log(total);
// }
// // sum();
//        function sum(a,b){//parametars...
//         let total = a+b;
//         console.log(total);
//       }
//      sum(49,69); //arguments...
//      sum(56,87);
//      sum(647,867);
//in function we can reuse code and difine the function one time but it may use many times ...
//function expression....
// function sum(a,b){
//     return total = a+b;
// }
// var funExp = sum(48,24);
// console.log(`the sum of two no is ${funExp}`);

//anonymous function expression.........
// var funExp = function(a,b){
//     return total = a+b;
// }
// // console.log(funExp(13,53)); 
// var sum = funExp(23,45);
// var sum1 = funExp(27,457);
// console.log(`the sum of the num is ${sum}`);


//block scope and globle scope variable.................
// function biodata(){
//     let myFirst = "nishad";
//     console.log(myFirst);
//     if(true){
//         let mylast= "shajjad";
//         console.log(mylast);
//         console.log(myFirst);
//     }
//     console.log(mylast);//it can't work becouse let and const are block scop vareable 
//     //but var is globle scop variable so it works in anywhere;
// }


// efault parameters ......................
// function mult(a,b=6){
//     return a*b;
// }
// console.log (mult(34));


// Arrow function..................
//const sum = (a,b) => //{
     //`the sum of the num is ${a+b}`; //no need to write return for one line of  coad.....
//}no need to use this braches; for one line of coad;
// console.log(sum(23,43)); 


// array .,.......................
//let myFriend = ['prottoy','shakib','faruq','faisal',true,45];//array depends on index num.........
//   traversal in an array......................... 
//  let myFriend = ['prottoy','shakib','faruq','faisal',true];
// console.log(myFriend[1]);//index num 0,1,2,3,4........
// console.log(myFriend[myFriend.length - 1]);


// for in loop .............
// for(let i=0; i<myFriend.length; i++){
//     console.log(myFriend[i]);
// }
// for(let elements in myFriend){
//     console.log(elements);
// }//its display index num..................


// for of loop................... 
// for(let a of myFriend){
//     console.log(a);
// }//its display elements..................


// for each loop....................
// myFriend.forEach(function(element,index,array){
//   console.log(`${element} ${index} ${array}`);
// })
// myFriend.forEach((a,b,c) =>{
//     console.log(`${a} ${b} ${c}`);  
// })


//searching and filter in an array............

// let myFriend = ['prottoy','shakib','faruq','faisal',true];
// console.log(myFriend.indexOf('shakib'));


// perform crud ...........
//push..........
// let animals =['cow','dog','cat','bird','fish','rabbit'];
// animals.push('goats','pigs','chiken');
// console.log(animals);//its returns new length of the array;
// unsift add element first in an array ..............
// let animals =['cow','dog','cat','bird','fish','rabbit'];
//  animals.unshift('goats','pigs','chiken');
// console.log(animals);
//pop......use form last element  remove of an array;;;;;...........
// let animals =['cow','dog','cat','bird','fish','rabbit'];
//  animals.pop();
// console.log(animals);
//shift ------ use form first element remove of an array......
// let animals =['cow','dog','cat','bird','fish','rabbit'];
//  animals.shift('goats','pigs','chiken');
//  console.log(animals);



//splice method...........
//let month =['jan','march','april','june','july'];
//sol1,,,,,
 // let newMonth = month.splice(5,0,'december'); 
// let newMonth = month.splice(month.length,0,'december');
// console.log(month);
//sol2,,,,,
// let indexOfMonth = month.indexOf('march');
// if(indexOfMonth !== -1){
//     let updateMonth = month.splice(1,1,'March');
//     console.log(month);
// }else{
//     console.log('no such data found');
// }


// Map(), reduce().....................
//const array1 = [1,2,3,4,5,34,24];
// let newArr = array1.map((cur, index,arr) => {
//     return cur>4;
// })
// console.log(array1);
// console.log(newArr);
// let nerArr = array1.map((a,b,c) =>{
//     return `index no = ${b} and the value is ${a} belong to ${c}`
// }) //we con use filter(),reduce() map is chainable ..................
// console.log(nerArr);

// sol1 .........
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((a) =>{
//      return Math.sqrt(a);
// })
// console.log(arrSqr);

// sol2 
//  let arr = [2,3,4,6,8];
//  let arr2 = arr.map((x)=>{
//      return x*2;
//  }).filter((x) =>{
//      return x>10;
//  }).reduce((a,b)=>{
//     return a +=b; 
//  })
//  console.log(arr2);

//reduce method.........
//flatten an array means to convert the 3d or2d array..
// it takes 4 arguments 
// 1.accumulator
// 2.current value 
// 3,index 
// 4 . array 
//for display a single value ........sum,average,percentange..
// let arr = [5,6,2];
// let sum = arr.reduce((accumulator,curElem,index,arry) =>{
//     return accumulator += curElem;//*=,,,,,,
// })
// console.log(sum);
// let arr = [5,6,2];
//  let sum = arr.reduce((accumulator,curElem,index,arry) =>{
//      return accumulator += curElem;
//  },7)
//  console.log(sum);
// const arr =[
//    [1,2,3],
//    [4,5,6],
//    [7,8,9],
//    [10,11,12,[13,14,15]]
// ];
// let flatArr = arr.reduce((accum,curVal) =>{
//     return accum.concat(curVal);
// })
// console.log(flatArr);



// string in javascript.............................. 
// let myName= "shajjad Hossan Nishad";
// console.log(myName.length);
// let anyStn = "I am a web devaloper and i am 'JS' specialist";
// console.log(anyStn);
//let myName= "shajjad Hossan Nishad  Hossan Shajjad Nishad";
// console.log(myName.indexOf("Hossan"));
// console.log(myName.lastIndexOf("Nishad"));
// let sData = myName.search("Nishad");
// console.log(sData);


// extracting string parts ..........
// slice (start,end)
// substring (stard, end)
// substr(start, length)

// slice method .......
// its takes 2 position start and end.....
// let str= "apple, bannana, kiwi";
// let res = str.slice(0,5);
// console.log(res);
// let myTweet = "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrqwwwwwwwwwwwwwwwwwwwwwwwwwfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffrjh,;dsghk;sdj;gkjs;dkgsdkgl;kgl;kg;lsdfkg;ljg;ejktgkljkg;klsjdgkgkjskfljdfjasdklfjdfjaslkfjasklfjkajfklajflkjasfkjakjflkajsflkjflkjasdfkljaslkdfjlkasdjfkasjfkljasflkjfkljfklajsfkajsflkjafjwortojhwngjlfngljsnagajf;kajiiwtrjljknsajfkasj;kjfk;ajf"
// let myActual = myTweet.slice(0,100);
// console.log(myActual);
// var str = "apple,bannana,kiwi";
// let res = str.substring(0,5);
// console.log(res); it can't work in negitive value..........
// var str = "apple,orange,kiwi";
// let sub = str.substr(0,5);
// console.log(sub);
// let myBio = 'I am shajjad hossan nishad shajjad';
// let replaceData = myBio.replace('shajjad','Shajjad');
// console.log(replaceData);//it can't cange old data it's creat new data;
          

// let str ="hello world";
// console.log(str.charAt(5));
// let str = "hellow world";
// console.log(str.charCodeAt(0));
// var str = "Shajjad Hossan";
// console.log(str[5]);
// let myName = "shajjad Hossan";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// let str = "              hellow world             ";
// console.log(str.trim());
  

 // converting a string to an Array; 
// var txt = "a,b,c,d,e,f,g,h";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));


// date and time methods in js .............
//new date(),,,,,,,,,,,,,,``
// let currDate = new Date();
// console.log(currDate);
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toString());
// console.log(Date.now());
//var d = new Date(2021,2,17);//minimum to be two elements....
// console.log(d.toLocaleDateString());
// var d = new Date(16377777465762);
// console.log(d.toLocaleDateString());
// var currDate = new Date();
// console.log(currDate.getFullYear());
// console.log(currDate.getFullMonths());
// console.log(currDate.getFullDay());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());
//console.log(currDate.getHours());
//time methods/////.... 
// let curTime = new Date();
// console.log(curTime.setHours());
// console.log(curTime.setMilliseconds());
// console.log(curTime.setMinutes());
// console.log(curTime.setSeconds());
// console.log(curTime.setMonth());
// function myFunc(){
//     var d = new Date();
//     d.setHours(6);
//     document.getElementById("demo").innerHTML=d;
// }
// (function(){
//     setInterval(())
// })
// var d = new Date().toLocaleTimeString();
// document.getElementById(demo1).innerHTML= t;


// javascript math Object; 
// console.log(Math.PI);
// let num = 10.343;
// console.log(Math.round(num));// .5=1,0.49=0;;;;;;
// console.log(Math.pow(2,4));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-44.53));//its can't display negative value;
// console.log(Math.abs(4-7));
// console.log(Math.ceil(4.4));//its display upper value..
// console.log(Math.floor(4.66));//its display lower value....
//console.log(Math.trunc(-555.55));



//Dom in Javascript;................................
// function goBack(){
//     window.history.back();
// }
// alert(location.href);
//  if(confirm("want to visit webpage?")){
//      location.href = "https://www.youtube.com"
//  }
//const childd = document.querySelector('.child_two').style.color="orange";

// const goBack = () => {
//     document.getElementById('head').innerHTML = "welcome to javascript"
// }
// const goBack = () => {
//     const headchang = document.getElementById('head');
//     headchang.innerHTML = "heyy! everyone."
// }
    







