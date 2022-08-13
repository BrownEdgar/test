import React from "react";

const Tnayin = () => {

/* 6. Շրջել զանգվածը առանց մեթոգ օգտագորխշծելու */

/* const reverseArr = (arr) => {
   for(let i = arr.length-1; i >= 0; i--){
        console.log(arr[i])
   }
}

reverseArr([1,2,3,4,5,6]) */


/* 3. Գրեք ֆունկցիա, որը շրջում է փոխանցած բառը,առանց մեթոդ օգտագործելու */

/* const reverseString = (str) => {
    const x = str.split(" ")
    x.map(function(item){
        for(let i = item.length-1; i >= 0; i--){
            document.write(item[i]+" ")
        }
    })
}

reverseString("Hello World") */



/* 4. կա զանգված, ստուգեք արդյոք այդ զանգվածի առաջին 10 էլեմենտների մեջ կա 3 հատ "1" թվանշանը */


/* const arr = [1,45,4,8,9,1,1,21,35,47,98,1,29,10]

for(let i = 0; i <= 10; i++){
    if(arr[i] == 1){
        let newArr = []
        let push = newArr.push(arr[i])
        console.log(newArr.length)
    }
}
 */



/*  const market = [
    {id:1, sku:64856,category:"office",price:453000,city:"germany",discount:"12%"},
    {id:2, sku:45876,category:"office",price:853000,city:"USA",discount:"10%"},
    {id:3, sku:21876,category:"office",price:253000,city:"USA",discount:"15%"},
    {id:4, sku:76248,category:"office",price:353000,city:"germany",discount:"20%"},
]  */
/* գտնել ամենազեխչված ապրանքը */
/*  let minDiscount = Math.min(...market.map(item => item.discount));
    let maxDiscount = Math.max(...market.map(item => item.discount));
    
    console.log("min: " + minDiscount);
    console.log("max: " + maxDiscount); */


/* 
    market.sort(function(a,b){
        //if (a.price > b.price) return 1;
        if (a.discount > b.discount) return 1;
        //if (a.price < b.price) return -1;
        if (a.discount < b.discount) return -1;
    });
    
    console.log(market);  */


    function makeid() {
        let text = "";
        let possible = "abcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < 10; i++){
            let random = text += possible.charAt(Math.random() * possible.length);
        }

        return text;
      }
      
      console.log(makeid());




    return(
        <div></div>
    )
}

export default Tnayin;