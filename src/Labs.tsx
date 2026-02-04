//lab2
let ex1:string="hello";
let ex2:number=34;
ex1=99;
ex2="hi";

//lab6
function calculateSquare(a:number):number{
    return a*a;
}

console.log(calculateSquare(4));

function even(num:number):boolean{
    return num%2==0;
}
console.log(even(10));
//lab5
function greetUser(name:string,title:string="Mr./Ms."){
    if(title)
    {
        return "Hello, {title}!"
    }
    else{
        return "Hello, {name}!"
    }
}
greetUser("User")

type Operation = (a: number, b: number) => number

const add: Operation = (a, b) =>a + b
const multiply: Operation = (a, b) => a * b

console.log(add(5, 3))
console.log(multiply(5, 3))

//lab7

function greetUser1(name:string,title?:string){
    if(title)
    {
        return "Hello, {title}!"
    }
    else{
        return "Hello, {name}!"
    }
}
greetUser1("User")

//lab7-2

let addNumbers = (a: number, b: number): number => a + b
console.log(addNumbers(2,3));

//lab8

type Point={
    x:number;
    y:number;
}
function printPoint(pt:Point){
    console.log(pt);

}
printPoint({x:10,y:20})

//lab9-1
function move(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Moving ${direction}`)
}

move("up")
move("left")

//lab9-2

function formatValue(x: string | number) {
 if (typeof x === "string") {
 console.log(x.toUpperCase());
 } else {
 console.log(Math.round(x));
 }
}
formatValue("hello")
formatValue(34.5)

//lab10-1
interface User {
  readonly id: number
  name: string
  age?: number
}

const user: User = {
  id: 101,
  name: "Balaji",
  age: 20
}

console.log(user.id)
console.log(user.name)
console.log(user.age)

user.id = 102
//lab10-2

interface Calculator {
  add(a: number, b: number): number
  multiply(a: number, b: number): number
}

const calculator: Calculator = {
  add(a, b) {
    return a + b
  },
  multiply(a, b) {
    return a * b
  }
}

console.log(calculator.add(5, 3))
console.log(calculator.multiply(5, 3))
//lab11-1
interface Student {
  name: string
  marks: number
}

interface StudentList {
  [index: number]: Student
}

const students: StudentList = [
  { name: "Balaji", marks: 85 },
  { name: "Ravi", marks: 78 },
  { name: "Anu", marks: 92 }
]

students.forEach(s => {
  console.log(s.name, s.marks)
})

//lab11-2

type PointType = {
  x: number
  y: number
}

interface PointInterface {
  x: number
  y: number
}

function printPoint(point: PointType | PointInterface): void {
  console.log(point.x, point.y)
}

printPoint({ x: 10, y: 20 })


//lab12-1

enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

function printStatusOrDirection(value: Direction | Status): void {
  console.log(value)
}

let d: Direction = Direction.Up
let s: Status = Status.SUCCESS

printStatusOrDirection(d)
printStatusOrDirection(s)

console.log(d)
console.log(s)


//lab12-2

let element: unknown = document.getElementById("username")

function printInputValue(): void {
  const input = element as HTMLInputElement
  console.log(input.value)
}
//lab13-1

class Student {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const s1 = new Student("Balaji", 20)
console.log(s1.name)
console.log(s1.age)

//lab13-2

class Student {
  public name: string
  private rollNo: number

  constructor(name: string, rollNo: number) {
    this.name = name
    this.rollNo = rollNo
  }

  showRollNo(): void {
    console.log(this.rollNo)
  }
}

const s2 = new Student("Balaji", 101)
console.log(s2.name)
s2.showRollNo()
s2.rollNo

//lab14-1

class Student {
  readonly id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

const s = new Student(1, "Balaji")
console.log(s.id)
console.log(s.name)

s.id = 2


//lab14-2


class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound(): void {
    console.log("Animal sound")
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }

  makeSound(): void {
    console.log("Woof! Woof!")
  }
}

const animal = new Animal("Generic Animal")
animal.makeSound()

const dog = new Dog("Buddy", "Labrador")
dog.makeSound()



