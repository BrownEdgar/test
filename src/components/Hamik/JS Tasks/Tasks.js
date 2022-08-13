// 1. Գրել ֆունկցաիա,որը ստանում է թիվ և վերադարձնում է այդքան օր հետո եղած ամսաթիվը ???

// let date = new Date()
// console.log(date.getDate()-30);
// ?????


// 3. Գրեք ֆունկցիա, որը շրջում է փոխանցած բառը,առանց մեթոդ օգտագործելու

let str = 'asdfg'

function reverseString(x){
    let z = ''
    for(let i = x.length-1 ;i>=0;i--){
          z+=x[i]
    }
    return z
}
console.log(reverseString(str));

// 4. կա զանգված, ստուգեք արդյոք այդ զանգվածի առաջին 10 էլեմենտների մեջ կա 3 հատ "1" թվանշանը

// let arr = [1,2,3,4,1,5,'a','c','v','t','u','q',1,1,]

// function checkForOne (x) {
//     let sum = 0;
//     for(let i =0;i<10;i++){
//         if(x[i]==1){
//             sum++
//         }
//     }
//     if(sum == 3){
//         return true
//     }else{return false}
// }

// console.log(checkForOne(arr));

// 5. կա օբյեկտ սուրճի տեսականիով, և իր գներով, ստեղծել ֆունկցիա, որը ստանալոց գումարի չափը, առաջարկում է բոլոր հնարավոր սուրճերը որոնք կարելի է գնել այդ գումարով, 0 հակառակ դեպքում,  ?????

// let coffe = {
//     latte:1500,
//     espresso:2000,
//     arabica:1000,
// }

// let cofSort = (x) =>{
//       for  (let key in coffe){
//         if(x >= coffe.key)
//              {console.log(key)}
//         else
//              {console.log(0);}
       
//     }
// }

// cofSort(1600)

// 6. Շրջել զանգվածը առանց մեթոգ օգտագորխշծելու ?????????

// let arr = ['a','b','c','d','e','f','g']
// function reverseArray(x){
//     let z = []
//     for(let i =x.lenght-1,j=0;i>=0;i--,j++){
//        z[j]=x[i]
//     }
//     return z
// }

// console.log(reverseArray(arr));

// 7. Ստեղծել զանգված լատինական պատահական 15 տառերով(ձեռքով չանեք, կոդով պետք է պատահական ստանաք 15 տառ), հետո, ստուգել, թե արդյոք այդ տառերով հնարավոր է ստանալ, «developer» բառը,

// let letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
// let str = 'developer'
// function randomLet(x){
//     let z=[]
//     for(let i = 0;i<15;i++){
//         z.unshift(x[Math.floor(Math.random()*26)])
//     }
//     return z
// }

// let d = ['d','e','v','e','l','o','p','e','r']
// console.log(str.match('e'));
// console.log(d.includes(str.split('')));
// console.log(randomLet(letters).includes(str.split('')));


// 8. Ստեղծել 2 օբյեկտ, ժառանգել մեկը մյուսից , փորձել օգտագործել առաջին պշբյեկտի ֆունկցիան երկրորդ օգյեկտի համար(կոնտեքստ)

// let obj = {
//     name:"Mike",
//     age:25,
//     fun:function(){
//         console.log(this.age);
//     }
// }
// let obj1= Object.create(obj)
// obj1.fun()


// 9. կա  թվային զանգված,որտեղ միայն մեկ թիվ կրկնվում է 2 անգամ, գտնել այդ թիվը

// let  arr = [1,1,3,4,5,];

// function findSame(x){
//    return  x.filter((item, index) => x.indexOf(item) !== index)
// }

// console.log(findSame(arr));

// 10. Տրված են 2 հատ զանգված, գտնել դրանց մեջ կրկնվող էլեմենտները

// let arr1 = ['a','b','c','d','e'];
// let arr2 = ['c','e'];

// let same = arr1.filter(function(x) {
//   return arr2.indexOf(x) != -1;
// });

// console.log(same);


