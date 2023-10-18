let name=prompt("Enter your name")
let currentYear=+prompt("Enter current year")
let birthYear=+prompt("Enter your year of birth")
let age=0;
if(currentYear>birthYear){
  age=currentYear-birthYear
}else{
  alert("Something gone wrong!!!")
}
console.log("Your name is "+name)
console.log("You was born in "+birthYear)
console.log("Your age is "+age)