



// 5. Տրված է "string" զանգված, պետք է գտնել և վերադարձնել բոլոր այն տառերը որոնք հանդիպում են բոլոր բառերի մեջ;


// 1. Գրել ֆունկցիա,որը գտնում է վերադարձնում է բառ/նախադասության մեջ մեր ուզած տառի հանդիպումների քանակը։
//    Օր․՝ foo("Black hole", "l") => 2

// let str = "asdvkjsdvnksvkkkd"
// function findLetters(x,y){
//     let sum = 0
//     for(let i = 0;i<x.split('').length;i++){
//         if(x.split('')[i] === y){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(findLetters(str,"k"));


// 2. Ստեղծել Shuffle ֆունկցիան, որը կստանա կամայական զանգված, "կխառնի" այն պատահական ձևով և կվերադարձնի այն։

// let arr = ["a",'b',"c",'d',"e",'f',]
// function shuffle(x){
//     let arr1 = []
//     for(let i = 0;i<x.length;i++){

//         // arr1.push(x[Math.floor(Math.random()*x.length-1)])
//         if(arr1[Math.floor(Math.random()*x.length)] == undefined){
//             arr1[Math.floor(Math.random()*x.length)]=x[i]
//         }
//     }
//     return arr1
// }
// console.log(shuffle(arr));

// 3. Ստեղծել generatwr ֆունկցիան, որը կգեներացնեի մեզ համար պատահական "հայկական" հեռախոսահամար և կվերադարձնի այն մեզ օրինակ "077-985-021" տեսքով։Պայմաններ։ համարի համար կոդը դրտարկում ենք միայն [055, 077, 091, 093,094,098, 099 ] ցանկից։

// function randomNumber(){
//     let cod = ['055','077','091','093','094','098','099'];
//     let num = cod[Math.floor(Math.random()*6)]
//     let result = num + '-' + Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+ '-' +Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)
//     return result
// }

// console.log(randomNumber());

// 4. Տրված է [1, 10] ասշմբողջ թվերի զանգված, որտեղ 1 <= N <= 10, պետք ՝ գտնել բոլոր այն թվերը, որոնք բաց են թողնված

// function findNumber(x){
//     for(let i=x[0]+1;i<x[1];i++){
//         console.log(i);
//     }
// }
// findNumber([1,10])