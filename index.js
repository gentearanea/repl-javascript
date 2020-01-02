function Elf(name, weapon) {
  console.log('start===',this)
  this.name = name;
  this.weapon = weapon;
  var a = 10;
  console.log('end===',this)
}

Elf.prototype.attack = function() {
  return this.name + ' attack with ' + this.weapon;
}

//thisが呼び出したスコープに制限される
// Elf.prototype.attack = () => {
//   return this.name + ' attack with ' + this.weapon;
// }

const elf1 = new Elf('cris', 'hammer')
console.log(elf1.attack())



//プロトタイプ
// function multiplyBy5(num) {
//   return num*5
// }

// multiplyBy5.__proto__
// Function.prototype
// multiplyBy5.__proto__.__proto__
// Object.prototype
// multiplyBy5.__proto__.__proto__.__proto__
// typeof Object
// typeof {}

// オブジェクトのプロパティを確認
// const obj = {name: "hey"}
// //obj.hasOwnProperty("name")
// function a() {}
// a.hasOwnProperty("name")
// a.name




// var a = {"aaa" : 10};
// var b = a; //{"aaa" : 10}
// a.aaa = 5;
// alert(a.aaa);
// alert(b.aaa);








// console.log(teddy)
// console.log(say1)
// console.log(say2())

// var teddy = 'bear'
// var say1 = function() {
//   console.log('aaaaaaaaaaaa')
// }

// function say2() {
//   console.log('bbbbbbbb')
// }

// one = undefined
// var one = 1;
// var one = 2;
// console.log(one)


// var dog = 'dog'
// function hoisting() {
//   console.log(dog)
//   var dog = 'cat'
//   console.log(dog)
// }
// hoisting();

// kaiseki
// var dog
// function hoisting()
// var dog

// zikkou
// var dog = 'dog'
// hosisting()
// var dog = undifined
// console.log(dog) // undifined
// var dog = 'cat'
// console.log(dog) //cat

// varで変数を宣言した時はglobal()に格納される
// var dog = undefined
// console.log(dog)
// var dog = 'dog' 

// console.log(sing())
// function sing() {
//   console.log('lalal')
// }

//即時関数
// (function(){
//   var j = 'j'
//   console.log('j')
// }())

// function x(){
//   var x1 = 'x1'
//   console.log('x1')
// }

// var y = function(){
//   var y1 = 'y1'
//   console.log('y')
// }

//x() //hoistingが起きるはず
//y() //hoistingは起きない
//関数スコープなのでむり　console.log(j)
//関数スコープなのでむり　console.log(x1)
//関数スコープなのでむり　console.log(y)

// const wizard = {
//   name: 'marlin',
//   health: 50,
//   heal(num1, num2) {
//     return this.health += num1 + num2
//   },
// }

// const archer = {
//   name: 'sirou',
//   health: 30,
// }

// console.log(wizard.name)
// console.log(wizard.health)
// console.log(archer.health)

// const healArcher = wizard.heal.bind(archer, 100, 30)
// healArcher()

// var a = 'a'
// var b = 'b'
// var a = b
// b = 'b'
// console.log(a)
// console.log(b)

//replacerにfunctionを指定した場合
// function replacer(key, value) {
//     if (typeof value === 'string') {
//         return undefined;
//     }
//     return value;
// }

// var obj = {
//     a: 1,
//     b: "Moji",
//     c: [1, 2, 3, 4],
//     d: {
//         "A": 1,
//         "B": 2
//     }
// };

// console.log(JSON.stringify(obj, replacer, "\t"));

//replacerに配列のみを指定した場合
//var replacer = ['a','d','A'];

// var obj = {
//     a: 1,
//     b: "Moji",
//     c: [1, 2, 3, 4],
//     d: {
//         "A": 1,
//         "B": 2
//     }
// };

// console.log(JSON.stringify(obj, replacer, "\t"));

// var obj = {
//     a: 1,
//     b: "Moji",
//     c: [1, 2, 3, 4],
//     d: {
//         "A": 1,
//         "B": 2
//     }
// };
//console.log(JSON.stringify(obj));
//console.log(JSON.stringify(obj,undefined,1));

// リストの使い方を間違えている場合
// const number = 100
// const string = "Jay"
// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;

// function change(number, string, obj1, obj2) {
//     number = number * 10;
//     string = "Pete";
//     obj1 = obj2; //obj1 = obj2
//     obj2.value = "c"; //obj2.value = c
// }
 
// change(number, string, obj1, obj2);

// // 参照渡しなのでobj2, obj3の値が変わってしまう
// //Guess the outputs here before you run the code: 
// console.log(number); 
// console.log(string);
// console.log(obj1.value);
// console.log(obj2)
// console.log(obj3)

//isを使って真理値を判定する。
// console.log(-0 === +0)
// Object.is(-0, +0)

// NaNの場合は===を使用する
// console.log(NaN === NaN)
// Object.is(NaN, NaN)


// function aaa(){
//   alert("test");
// }
// //aaa();

// alert(aaa);