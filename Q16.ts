let  Guests3:Array<String> = ["Hanan" , "Obaid" , "Amir"]

console.log(`Hello Mr. ${Guests3[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)

console.log(`Mr. ${Guests3[0]} will not be able to attend Dinner `)

Guests3 = Guests3.slice(1, Guests3.length)

Guests3.push("Arslan")
console.log(`Hello Mr. ${Guests3[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)


console.log("Hi! There is a Good News We have Found a New Big Table So inviting More Peoples")

Guests3.push("Naveed")

// Append 1 new name to list in the Middle
Guests3.unshift("Almas")

console.log(`Hello Mr. ${Guests3[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)



console.log(`Hello Mr. ${Guests3[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[3]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests3[4]}, I Would Like to invite you for Dinner at Tomarrow 10`)


