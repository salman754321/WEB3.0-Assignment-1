let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru') // True

console.log("Is car == 'audi'? I predict False.")

console.log(car == 'audi') // False

let age = 24;

console.log("Is age == 24? I predict True.")

console.log(age == 24) // True

console.log("Is age == 25? I predict False.");

console.log(age == 25) // False


console.log("Is age > 20? I predict True.");

console.log(age > 20) // True

console.log("Is age < 20? I predict False.");

console.log(age < 20) // False

let user = {
    name: "Salman",
    age: 24,
}

let user3 = user;

console.log("Is user == user3? I predict True.");

console.log(user == user3) // True 

let user4 = {
    name: "Salman",
    age: 24,
}

console.log("Is user == user4? I predict False.");

console.log(user == user4) // False Because JS Compares Objects By Reference Not by Value


console.log(`Is ${user.name} != ${user4.name}? && ${user.age} != ${user4.age} I predict False.`);

console.log(user.name != user4.name && user.age != user4.age) // False

console.log(`Is ${user.name} == ${user4.name}? && ${user.age} == ${user4.age} I predict True.`);    

console.log(user.name == user4.name && user.age == user4.age) // True


