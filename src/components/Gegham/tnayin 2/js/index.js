//1.Գրել ֆունկցիա,որը գտնում է վերադարձնում է բառ/նախադասության մեջ մեր
// ուզած տառի հանդիպումների քանակը։ Օր․՝ foo("Black hole", "l") => 2

/*function foo(w, i) {
   let m = w.split("").filter(elem => i.includes(elem)).length;
console.log(m)
}
foo("Black hole", "l")*/


//2.Ստեղծել Shuffle ֆունկցիան, որը կստանա կամայական զանգված, "կխառնի" այն
// պատահական ձևով և կվերադարձնի այն։

/*function Shuffle(params) {
    let arr = params.sort((a,b) => Math.random((a + b)) - 0.45)
    console.log(arr)
}
Shuffle([111, 5, 8, 9, 25, "wlllll",85, 45, 255, 1, 1, 25, 265, "cbl"])*/


//3.Ստեղծել generator ֆունկցիան, որը կգեներացնեի մեզ համար պատահական "հայկական" 
//հեռախոսահամար և կվերադարձնի այն մեզ օրինակ "077-985-021" տեսքով։Պայմաններ։ համարի համար կոդը 
//դրտարկում ենք միայն [, 055, 077, 091, 093,094,098, 099 ] ցանկից։

/*function generator(params) {
    let k = Math.floor(Math.random()*900 + 100)
    let d = Math.floor(Math.random()*900 + 100)
    let f = Math.floor(Math.random()*6);
    let h = params[f];
    console.log(("0"+ h + "-" + k + "-" + d) )
    
}
generator([55, 77, 091, 093, 094, 098, 099 ])*/


//4.Տրված է [1, 10] ասշմբողջ թվերի զանգված, որտեղ 1 <= N <= 10, պետք ՝ 
//գտնել բոլոր այն թվերը, որոնք բաց են թողնված

/*let arr = [1,10];
let arry = [];
for (let i = -9; i < 10; i++) {

    console.log(i)
    
}???????????????????????*/


//5.Տրված է "string" զանգված, պետք է գտնել և վերադարձնել բոլոր այն տառերը 
//որոնք հանդիպում են բոլոր բառերի մեջ;

/*const arr =["javap", "jvmika", "jvreact", "jvgago", "jvardush"];
//let arr1 = arr[0].match(/\D/g);
let arr1 = arr[0].split("");
    if (arr[0].includes(arr1[0])) {
       console.log(arr1[0])
    }


console.log(arr[0].includes(arr1[0]))*/
