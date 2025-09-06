
let person={
    name:"bhavana",
    age:18

}
console.log(person.name);

const {name,age}=person; //destructuring assignment
console.log(name)
console.log(age)
let fruits=["apple","banana"]
console.log(fruits[0])
//array methods
let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num); //transform each element
console.log(square)
let evens=numbers.filter((num)=>num%2==0);//filter values based on condition
console.log(evens)
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)
let mark=[
    {
    name:"bhavana",
    marks:19
    },
    {
        name:"alladi",
        marks:20
    }
]
let max=0;
let topper="";
for( let person of mark){
    if(person.marks>max){
        max=person.marks;
        topper=person.name;
    

    }
    
}
console.log(`topper is ${topper} and marks are ${max}`)
