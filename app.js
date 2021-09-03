// Data Types
// Primitive and nonprimitive 


let brand
console.log(brand)



//non-primitive

let arr = [1,2,3,4,5]
arr.push("hello")
arr.unshift(true)
console.log(arr)
console.log(typeof arr)



let Name = "Biprajit"
let age=19
console.log(Name.toUpperCase())

//const name = "Biprajit"



// coersion in js 


// Arithmetic operators
  const a = 10
  const b = 31
  console.log(a+b)
  console.log(a-b)
  console.log(a*b)
  console.log(a/b)
  console.log(b%a)


const c = 'b'
const d ='a'
console.log(c+d)


// Assignment operators
// =



// comparion operators

const e = 24
const f = 30
const g = 24
console.log(e>f)
console.log(e<f)
console.log(e==g)

console.log('----------------------------------------------------------')


const h = 11
const i = '11'
console.log(h==i)
console.log(h===i)



//Logical operators



const a1 = 2
const b1 = 3
console.log('a===b',a===b)
console.log('a==b',a==b)
console.log ('a!=b',a!=b)

console.log("Truth Table for AND")
console.log('  ')
console.log('false && false',false && false)
console.log('false && true',false && true)
console.log('true && false',true && false)
console.log('true && true',true && true)

console.log('----------------------------------------')


console.log("Truth Table for OR")
console.log('  ')
console.log('false || false',false || false)
console.log('false || true',false || true)
console.log('true || false',true || false)
console.log('true || true',true || true)


const a2 = 50 
const b2 = 30
const c2  = 20 
console.log (a2>b2 && b2>c2)
console.log (a2<b2 && b2>c2)
console.log (a2>b2 || b2>c2)
console.log (a2<b2 || b2>c2)

console.log('----------------------------------------------------')

// conditional statements

//checks whether number is or not 

const x = 0
if (typeof x === 'number')
{
 if (x === 0)
 {
     console.log("neither even nor odd")
 }
 else if  (x%2 === 0)
 {
     console.log("number is even")
 }
 else
 {
     console.log("number is odd")
 }
}
else{
    console.error("not a number")
}