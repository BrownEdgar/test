// Homework

// 3. Գրեք ֆունկցիա, որը շրջում է փոխանցած բառը,առանց մեթոդ օգտագործելու
// const words ='barev';
// for (let i = 0; i < words.length; i += 1) {
//   const index = (words.length - 1) - i;
//    console.log(words[index]);
// }


// 4. կա զանգված, ստուգեք արդյոք այդ զանգվածի առաջին 10 էլեմենտների մեջ կա 3 հատ "1" թվանշանը
// const array = [ 1, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 33]
// const newArray = array.slice(0, 10).includes(1*3)
// console.log(newArray);


// 6. Շրջել զանգվածը առանց մեթոգ օգտագորխշծելու
// const words = ['barev', 'gexecik', 'or'];
// for (let i = 0; i < words.length; i += 1) {
//   const index = (words.length - 1) - i;
//    console.log(words[index]);
// }
 

// 9. կա  թվային զանգված,որտեղ միայն մեկ թիվ կրկնվում է 2 անգամ, գտնել այդ թիվը
// const array = [1, 2, 2, 4].filter((e, index, arr) => arr.indexOf(e) !== index)
// console.log(array)


// 10. Տրված են 2 հատ զանգված, գտնել դրանց մեջ կրկնվող էլեմենտները
// let arr1 = ["Hello", "Sun", "diamond", "shine"]
// let arr2 = ["Hello world", "Sun", "diamond2", "shine"]
//     compare = function(arr1, arr2) {
//       return arr1.filter(function(n) {
//         return arr2.indexOf(n) !== -1;
//       });
//     };

// console.log(compare(arr1, arr2));

// 2. ունենալ  [{id:1, sku:64856,category:"office",price:453000,city:"germany",discount:"12%"}], զանգվածը
//    - սորտավորել ըստ զեղչի
//    - սորտավորել ըստ գնի
//    - գտնել ամենազեխչված ապրանքը
// const arr=[
//     {id:1, sku:64856,category:"office",price:453000,city:"germany",discount:"15%"},
//     {id:2, sku:64857,category:"office1",price:433000,city:"Armenia",discount:"14%"},
//     {id:3, sku:64858,category:"office2",price:423000,city:"Russia",discount:"16%"}
// ]
// let result=arr.sort((a, b) => a.discount > b.discount ? 1 : -1);
// console.log(result);

// let result1=arr.sort((a, b) => a.price > b.price ? 1 : -1);
// console.log(result1);

// let result2=arr.sort((a, b) => b.discount - a.discount)[0];
// console.log(result2.id);


// 8. Ստեղծել 2 օբյեկտ, ժառանգել մեկը մյուսից , փորձել օգտագործել առաջին պշբյեկտի ֆունկցիան երկրորդ օգյեկտի համար(կոնտեքստ)
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show());
