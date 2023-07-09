let  Guests2:Array<String> = ["Hanan" , "Obaid" , "Amir"]

console.log(`Hello Mr. ${Guests2[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests2[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests2[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)

console.log(`Mr. ${Guests2[0]} will not be able to attend Dinner `)

Guests2 = Guests2.slice(1, Guests2.length)

Guests2.push("Arslan")
console.log(`Hello Mr. ${Guests2[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests2[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests2[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)

