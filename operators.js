
let x=11;
let y=9;
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x**y);
console.log(x%y);
let a=2;
a+=4;
console.log(a)
a-=3;
console.log(a)
a*=3;
console.log(a)
a/=3;
console.log(a)
a**=3;
console.log(a)
let b=10;
let c="10";
console.log(a==b)
console.log(a!=b)
console.log(a!==b)
console.log(a===b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)
let age=20;
console.log(age>=20 && age<=20);
console.log(age>=20 || age<=20);
console.log(!(age>=20))
let firstname="Alladl";
let lastname="Bhavana";
let fullname=firstname+" "+lastname;
console.log(fullname)
let corectname=`hello ${firstname} ${lastname} ,welcome`;
console.log(corectname)
//ternary operators
let myAge=19;
if(myAge>=18){
 console.log("eligible")
}
else{
    console.log("no")
}
let result=myAge>=18 ? "eligible" : "no";
console.log(result)
//increment and decrement operators
let d=5;
console.log(d++)
console.log(d)
console.log(++d)
console.log(--d)
console.log(d)

console.log(d--)
console.log(d)
console.log(d)
console.log(typeof d)
let day=9;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid choice");
        break;
}
let n=10;
for(let i=0;i<=n;i++){
    console.log(i)
}
let i=0;
let m=10;
while(i<m){
    console.log(i)
    i++;
}
let colors=["hi","hello","nope"]
for(let i=0;i<colors.length;i++){
    console.log(i);
}
for(let color in colors){
    console.log(color);
}
let erson={
    name : "bhavama",
    age :19
}
for(let key in erson){
    console.log(`{key}:${erson[key]}`);
}
//continue
let l=3
for(let j=0;j<=l;j++){
    if(j===3){

        continue;
    }
    else{
        break;
    }
    console.log(l)
}