import React from "react";

const Tnayin = () => {

    1. Գրել ֆունկցիա,որը գտնում է վերադարձնում է բառ/նախադասության մեջ մեր ուզած տառի հանդիպումների քանակը։ */

    /* const foo = (word, letter) => {
        let quantity = 0;
        const split = word.split("")
        split.map(function(item) {
            if(item === letter){
                quantity++
            }
        })
        console.log(quantity)
    }
    
    foo("Black hole", "l") */
    
    /* 2. Ստեղծել Shuffle ֆունկցիան, որը կստանա կամայական զանգված, "կխառնի" այն պատահական ձևով և կվերադարձնի այն։ */
    
    /* function Shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[random]] = [arr[random], arr[i]]
        }
        return arr;
    }
    
    console.log(Shuffle([10, true, "Hello", 24, "30", 99]))  */
    
    
    
    
    
    /* 3. Ստեղծել generatwr ֆունկցիան, որը կգեներացնեի մեզ համար պատահական "հայկական" հեռախոսահամար և կվերադարձնի այն մեզ օրինակ "077-985-021" տեսքով։
    Պայմաններ։ համարի համար կոդը դրտարկում ենք միայն [, 055, 077, 091, 093,094,098, 099 ] ցանկից։ */
    
    
    /* const generatwr = () => {
    
        let arr = ["055", "095", "077", "093", "094", "098", "091", "099"];
    
        let random = Math.floor(Math.random() * arr.length);
        
        let number = arr[random];
    
        let random1 = Math.floor(Math.random() * 900) + 100;
        let random2 = Math.floor(Math.random() * 900) + 100;
    
        console.log(number + "-" + random1 + "-" + random2);
        
    }
    
    generatwr()     */
    
    
    /* 4. Տրված է [1, 10] ասշմբողջ թվերի զանգված, որտեղ 1 <= N <= 10, պետք ՝ գտնել բոլոր այն թվերը, որոնք բաց են թողնված */
    
    
    /*  const Arr = ([x,y]) => {
        for(let i = x; i <= y; i++){
            console.log(i)
        }
    }
    
    Arr([1,10])  */
    
    
    
    /* 5. Տրված է "string" զանգված, պետք է գտնել և վերադարձնել բոլոր այն տառերը որոնք հանդիպում են բոլոր բառերի մեջ; */
    
    /* const arr = ["hello", "has", "bhas", "jah"];
    
    arr.map(function(item) {
        item.split(" ").filter(function(item) {
            
        })
    })
     */
    




    return(
        <div></div>
    )
}

export default Tnayin;