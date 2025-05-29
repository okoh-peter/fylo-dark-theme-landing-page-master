function sayHello(){
    alert("Welcome!")
};





const firstName = "John";
const lastName = "Doe"
const occupation = "Teacher";
const birthYear = 2020;
const currentYear = 2025;

const age= currentYear - birthYear;

if(age >=70){
    console.log(`${firstName} ${lastName} is a ${occupation} and he is ${currentYear - birthYear} year old, he is too old to drive`)
}

else if(age >=18 ){
console.log(`${firstName} ${lastName} is a ${occupation} and he is ${currentYear - birthYear} year old, he can drive`)
} 

else{
    console.log(`${firstName} ${lastName} is a ${occupation} and he is ${currentYear - birthYear} year old, he cannot drive`)

}