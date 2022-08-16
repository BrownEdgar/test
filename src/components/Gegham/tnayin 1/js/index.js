//1. Գրել ֆունկցաիա,որը ստանում է թիվ և վերադարձնում է այդքան օր հետո եղած ամսաթիվը
/*function foo(n = 0) {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + n)
    console.log(newDate)
}
foo(25)*/

//2. ունենալ  [{id:1, sku:64856,category:"office",price:453000,city:"germany",discount:"12%"}], զանգվածը
  // - սորտավորել ըստ զեղչի
   //- սորտավորել ըստ գնի
   //- գտնել ամենազեխչված ապրանքը

  /*const arr = [
    {id:1, 
     sku:64856,
     category:"office",
     price:453000,
     city:"germany",
     discount:"12%"},
    {
     id:2, 
     sku:64858888,
     category:"office",
     price:460000,
     city:"armenia",
     discount:"15%"}
    ]
//let gin = arr.sort((x,y) => x.price - y.price);
let zexch = arr.sort((a,b) => a.discount.match(/\d+/g) - b.discount.match(/\d+/g));

//console.log(gin)
console.log(zexch)
console.log(zexch[0].sku)*/

//3. Գրեք ֆունկցիա, որը շրջում է փոխանցած բառը,առանց մեթոդ օգտագործելու

/*function foo(w) {
    let z = '';
    for (let i = w.length - 1; i >= 0; i--)
      z += w[i];
      
    console.log(z)
  }
  foo("gago")*/

//4. կա զանգված, ստուգեք արդյոք այդ զանգվածի առաջին 10 էլեմենտների մեջ կա 3 հատ "1" թվանշանը

/*const arr = [111, 5, 8, 9, 25, "wlllll",85, 45, 255, 1, 1, 25, 265, "cbl"];
let m = arr.slice(0, 10).toString().match(/1/g).length;
m >= 3? console.log("ka") : console.log("chka")*/

//5. կա օբյեկտ սուրճի տեսականիով, և իր գներով, ստեղծել ֆունկցիա, որը ստանալոց գումարի չափը, 
//առաջարկում է բոլոր հնարավոր սուրճերը որոնք կարելի է գնել այդ գումարով, 0 հակառակ դեպքում,
/*const obj = {
    arabika: 4500,
    neskafe: 4500,
    bu: 100,
    americano:8000,
    buchino: 520,
    chibo:4500
}

function foo(gumar = 1) {
   for(let key in obj){
    if(obj[key] === gumar){
        console.log(key)
    }
   }
}

foo(4500)*/

//6. Շրջել զանգվածը առանց մեթոգ օգտագորխշծելու

/*let arr = [1, 2, 3, 4, 5 ,6];
let h = [];
for (let i = 0; i < arr.length; i++) {
    h[i] = arr[(arr.length - 1) - i]
}
console.log(h)*/

//7. Ստեղծել զանգված լատինական պատահական 15 տառերով(ձեռքով չանեք, կոդով պետք է պատահական ստանաք 15 տառ),
// հետո, ստուգել, թե արդյոք այդ տառերով հնարավոր է ստանալ, «developer» բառը,

/*let pat = [...Array(15)].reduce(a => a + String.fromCharCode(i++),'',i=97);
    if(pat.match(/d/g).length === 1 && pat.match(/e/g).length === 3 && pat.match(/v/g).length === 1
    && pat.match(/l/g).length === 1 && pat.match(/o/g).length === 1 && pat.match(/p/g).length === 1
    && pat.match(/r/g).length === 1){
        console.log("ka")
    }else{
        console.log("chka")
    }*/


//8. Ստեղծել 2 օբյեկտ, ժառանգել մեկը մյուսից , փորձել օգտագործել առաջին պշբյեկտի ֆունկցիան երկրորդ օգյեկտի համար(կոնտեքստ)





//9. կա  թվային զանգված,որտեղ միայն մեկ թիվ կրկնվում է 2 անգամ, գտնել այդ թիվը

/*let arr = [1, 4, 5, 8, 2 ,1];
let k = arr.sort((a,b) => a - b);
let m=[];
for (let i = 0; i < k.length; i++) {
    if(k[i] === k[i+1] ){ 
       m.push(k[i+1]) 
    } 
    
}
console.log(Number(m))*/


//10. Տրված են 2 հատ զանգված, գտնել դրանց մեջ կրկնվող էլեմենտները

/*let arr1 = [1, 2, 3, 5, 6 ,4];
let arr2 = [1, 4, 5, 8, 2 ,1];
console.log(arr1.filter(elem => arr2.includes(elem)))*/
