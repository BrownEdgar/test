//1.Կա Օբյեկտ, այնպես անել որ "email" դաշտը փոխելու ժամանակ այն փոխի 
//միայն եթե նոր արժեքը լինի "string" տիպի, պարունակի "@", և վերջանա ".com"-ով:

/*const myObj = {
    mail: "gegam832@gmail.com",
    name: "Gegham",
    lastname: "Gevorgyan"
  }

  function changeMail(mail){
    (mail.toString() && mail.match(/@/g) && mail.endsWith(".com"))? 
    myObj.mail = mail : 
    myObj
   }
changeMail("mak8@mail.ru")
console.log(myObj)*/

//2.ՏՐՎԱԾ Է ՆԱԽԱԴԱՍՈՒԹՅՈՒՆ,փորձեք տպել նույն նախադասությունը բայց արդեն 
//առաջին բառը մեծատառ սարգած

/*function upperCas(b = "m") {
    let bar = b.match(/\D/g)
    let arr =[];
    for(let i = 0; i < bar.length; i++){
        if(bar[i] !==" "){arr.push(bar[i].toUpperCase())
    }else{
        break} 
}
    let resalt = arr.reduce((a,b) => a + b) + bar.reduce((a,b)=> a + b).slice(5) 

//const bar = b.charAt(0).toUpperCase() + b.slice(1);
console.log(resalt)
}

upperCas("barev es ekel em dexc gnelu")*/


//3.Կա "խառը" տիպերով լցված զանգված, գտնել բոլոր այն բառերը , 
//որոք պարունակում են մեծատառ

/*let arr = ["Vardan" , "baBken", 1 , 4 , true, "hndo"]
let m = arr.filter(elem => elem.toString().match(/[A-Z]/g))
console.log(m)*/


//4.կա բառ, փորձեք գտնել այդ բառում առկա թվերի քանակը, 
//եթե թիվ չկա վերադարձնել 0

/*function count(bar = "gugush") {
    let tiv = bar.match(/\d+/g)
    tiv === null ? console.log(0) : 
                   console.log(tiv.length)  
}

count("1var1dan 1958")*/



