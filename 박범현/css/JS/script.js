
// scope 변수의 범위
// global 전역 범위: 함수, 블록 밖에서 선언
// block 블록 범위: 블록 안에서 선언 {}
// function 함수 점위: 함수 안에서 선언



// global 전역 범위 어디서든지 접근 가능
// var car = '제네시스';

// if (true) { // {}
//     console.log(car)
// }

// f()
// function f() {
//     console.log(car)
// }



// { // 블록안에서 선언
//     var car = '제네시스'
// }

// if (true) { // block 블록범위
//     var car = '제네시스'
// }

// console.log(car)



// f()
// function f() {
//     // function 함수범위
//     var car = '제네시스'
// }

// 함수밖에서 접근 불가
// console.log(car)

// 전역 범위
// var car = '제네시스'

// f()
// function f() {
//     //함수 범위
//     var car = '스타리아'
//     // 함수 범위 안에서 부터 찾는다
//     console.log(car)
// }

// console.log(car)



// global 전역범위
// let car = '제네시스'

// { // for, if 로 생각
//     console.log(car)
// }

// {
//     // 블록범위
//     let car = '제네시스'
// }

// // let은 안됀다
// console.log(car)

// let person;

// if (true) {
//     // define 정의
//     person = 'adult'
// }

// console.log(person)

// if (true) {
//     // block 블록범위
//     let person = 'adult'
// }

// console.log(person)

// global 전역 범위
// let car = '제네시스'

// f()
// function f() {
//     console.log(car)
// }

// f()
// function f() {
//     //함수 범위
//     let car = '제네시스'
// }

// console.log(car)


// 전역범위
// constant 상수
// 가장 엄격
// const car = '제네시스';

// const car = '제네시스'

// { // for, if
//     console.log(car)
// }

// if (true) { // block 블록 범위
//     console.log(car)
// }


// const 는 선언하고 정의가 안됀다
// const car;

// { // block, for, if
//     car = '제네시스'
// }

// console.log(car)


// {
//     // 블록 범위, for, if
//     const car = '제네시스'
// }

// if (true) { // 블록 범위, for if
//     const car = '제네시스'
// }
// console.log(car) //둘다 블록 밖에서 접근 불가



// global 전역 범위
// const car = '제네시스'

// function f() {
//     // 함수안에서 접근 가능
//     console.log(car)
// }
// f()

// global 전역 범위
// const car = '제네시스'

// f()
// function f() {
//     // function 함수 범위
//     const car = '스타리아'
//     // 함수범위 안에서 먼저 찾는다
//     console.log(car)
// }

// console.log(car)

// { // for, if
//     const car = '제네시스'
// }

// {
//     const car = '스타리아'
// }

// {
//     const car = '캐스퍼'
// }

// 블록밖에서 접근 불가
// console.log(car)

// {
//     var car = '제네시스'
// }
// {
//     var car = '스타리아'
// }
// {
//     let car = '캐스퍼'
// }
// console.log(car)



// 함수의 정의
// function declaration 함수선언식
// function expresssion 함수표현식



// 함수선언식: function + 함수이름 + ()
// function f() {
//     console.log(".")
// }

// f()

// Hoisting 함수의 정의가 더 올라간다
// f()
// function f() {
//     console.log("제네시스")
// }


// 함수 표현식
// 변수에 익명함수(function + ())를 담는다
// const f = function () {
//     console.log('제네시스')
// }

// f()



// 함수표현식에서는 Hoisting이 되지 않은다
// Hoisting: 함수의 정의가 더 올라간다
// f()

// var f = function () {
//     console.log('제네시스')
// }



// 함수표현식
// var f = function () {
//     console.log('제네시스')
// }

// arrow function: () => {}
// var f = () => {
//     console.log('제네시스')
// }

// hoisting이 되지 않는다
// hoisting: 정의가 더 올라간다
// f()


// var f = (data) => { // parameter
//     console.log(data)
// }

// f("제네시스") // argument


// var f = (data1, data2) => { // params1, params2
//     console.log(data1)
//     console.log(data2)
// }

// f('제네시스', '스타리아') // args1, args2


// params가 하나인 경우에 () 생략 가능
// var f = data => {
//     console.log(data)
// }

// f('제네시스')


// 한줄일 경우 {} 생략 가능
// var car = data => console.log(data)

// car('제네시스')


// && 연산자
// ternary 삼항연산자

// const car = '제네스시'

// // 참 && 실행
// car && console.log(car)


// const car = null; //ok
// const car = nudefined;
// const car ; // error

// null은 조건에서 false가 된다
// 실행이 안되고 그냥 넘어간다
// car && console.log(car)


// const age = 20;

// // 조건 ? 참 : 거짓일 경우
// const person = age > 18 ? 'abult' : 'kids';

// console.log(person)



// Destructing 구조분해할당
// Spread Operator
// Obejct 와 Array의 표현을 간단하게 만든다



// Destructing

// const cars = ['제네시스', '스타리아', '캐스퍼'];

// // index를 통해 접근
// const car1 = cars[0];
// const car2 = cars[1];
// const car3 = cars[2];

// console.log(car2)


// const cars = ['제네시스', '스타리아', '캐스퍼',];

// const [car1,, car3] = cars

// console.log(car1) // ok
// // console.log(car2) // error
// console.log(car3) // ok

// const [car1, car2] = cars

// console.log(car1) //ok
// console.log(car2) //ok
// console.log(car3) // error

// const [,,car3] = cars

// console.log(car3)


// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;

//     return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7)

// console.log(add)
// console.log(subtract)
// console.log(multiply)
// console.log(divide)



// Object destructing

// const car = {
//     brand: '현대',
//     model: '제네시스',
//     color: 'black',
//     cost: 500
// }

// f(car)
// function f(data) {
//     console.log(data.brand)
//     console.log(data.model)
//     console.log(data.color)
//     console.log(data.cost)
// }


// const car = {
//     brand: '현대',
//     model: '제네시스',
//     color: 'black',
//     cost: 500
// }

// f(car)
// function f({ vrand, model, color, cost}) {
//     console.log(brand)
//     console.log(model)
//     console.log(color)
//     console.log(cost)
// }



// spread operator
// ...

// const cars = ['제네시스', '스타리아', '아이오닉']
// const more = ['캐스퍼']

// concat()

// const result = [ ...cars, ...more ] 

// console.log(result)


// const cars = ['스타리아', '제네시스', '아이오닉', '캐스퍼']
// // destruncting + spread operator
// const [car1, car2, ...rest] = cars

// console.log(rest)


// const car1 = {
//     brand: '현대',
//     madel: '제네시스'
// }

// const car2 = {
//     color: 'black',
//     cost: 500
// }

// // 간략되 방식
// const car = { ...car1, ...car2 }

// // 예전 방식
// // const car = {
// //     brand: car1.brand,
// //     model: car1.model,
// //     color: car2.color,
// //     cost: car2.cost
// // }

// console.log(car)


// const car1 = ['제네시스','스타리아']
// const car2 = ['아이오닉','캐스퍼']

// 예전 방범
// array1.concat(array2) array1과 array2를 합친다
// Concatenating (순차)
// const car = car1.concat1(car2)

// 새로 배운 방범
// const car = [ ...car1, ...car2 ]

// console.log(car)


// 예전 방범
// const cars = ['스타리아', '제네시스', '캐스퍼', '아이오닉']

// slice, splice

// const rest = cars.slice(2)

// console.log(rest)


// 새로배운 방범
// const cars = ['스타리아', '제네시스', '캐스퍼', '아이오닉']

// const [car1, car2, ...rest] = cars

// console.log(rest)



// Callback and Promise
// Asynchronous (비동기) vs Synchronous (동기)

// Error handling: try catch


// Uncaught ReferenceError
// console.log(car)


// try {
//     console.log(car)
// } catch (err) { // Uncaught
//     console.error(err)
// } finally { // 무조건 실행되는 부분, 없어도 된다
//     console.log('끝')
// }


// let age = 11

// try {
//     if(age > 18) {
//         console.log('성인')
//     } else if (age > 15 && age > 13) {
//         console.log('청소년')
//     } else {
//         // custom error
//         throw "어린이"
//     }
// }
// catch(err) {
//     console.error(err)
// }
// finally { // 생략 가능, 모조건 실행되는 부분
//     console.log('끝')
// }


// prototype 기반 언어 - JavaScript
// class 기반 언어 - C++, Java
// 공통적인 부분 inheritance 상속

// const car = {
//     name: '제네시스',
//     sound: function () {
//         return '부릉'
//     }
// }
// console.log(car)
// console.log(car.sound())


// const fruit = 'apple'

// console.log(fruit.__proto__)

// console.log(fruit.toUpperCase())


// String의 instance를 만든다
// const fruit = 'apple'
// const fruit = new String("apple");

// console.log(fruit)


// class User { // syntax sugar
//     constructor(username) {
//         this.username = username
//     }
// }

// const user = new User("car")

// User class의 인스턴스
// console.log(user)

// console.log(new Date())


// class User {
//     constructor(username) {
//         this.username = username
//     }
// }

// class UserBusiness extends User {
//     constructor(username, location) {
//         super(username)
//         this.location = location
//     }
// }

// // UserBusiness class의 instance
// const userBusiness = new UserBusiness("현대자동차", "서울")

// console.log(userBusiness)


// var fruit = new String('apple')

// console.log(fruit.__proto__)


// new: 인스턴스를 만든다
var fruit = new String('apple')