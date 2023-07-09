let  Guests5:Array<String> = ["Hanan" , "Obaid" , "Amir"]

console.log(`Hello Mr. ${Guests5[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)

console.log(`Mr. ${Guests5[0]} will not be able to attend Dinner `)

Guests5 = Guests5.slice(1, Guests5.length)

Guests5.push("Arslan")
console.log(`Hello Mr. ${Guests5[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)


console.log("Hi! There is a Good News We have Found a New Big Table So inviting More Peoples")

Guests5.push("Naveed")

// Append 1 new name to list in the Middle
Guests5.unshift("Almas")

console.log(`Hello Mr. ${Guests5[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)



console.log(`Hello Mr. ${Guests5[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[3]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests5[4]}, I Would Like to invite you for Dinner at Tomarrow 10`)


console.log(`Total Number of Invited Guests are ${Guests5.length} `);
