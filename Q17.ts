let  Guests4:Array<String> = ["Hanan" , "Obaid" , "Amir"]

console.log(`Hello Mr. ${Guests4[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)

console.log(`Mr. ${Guests4[0]} will not be able to attend Dinner `)

Guests4 = Guests4.slice(1, Guests4.length)

Guests4.push("Arslan")
console.log(`Hello Mr. ${Guests4[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)


console.log("Hi! There is a Good News We have Found a New Big Table So inviting More Peoples")

Guests4.push("Naveed")

// Append 1 new name to list in the Middle
Guests4.unshift("Almas")

console.log(`Hello Mr. ${Guests4[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)



console.log(`Hello Mr. ${Guests4[2]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[3]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[4]}, I Would Like to invite you for Dinner at Tomarrow 10`)


console.log("Sorry New Table Will Arrive Late So I Can Only Invite 2 Peoples ")

Guests4 = Guests4.slice(Guests4.length - 2, Guests4.length)

console.log(`Hello Mr. ${Guests4[0]}, I Would Like to invite you for Dinner at Tomarrow 10`)
console.log(`Hello Mr. ${Guests4[1]}, I Would Like to invite you for Dinner at Tomarrow 10`)

Guests4 = Guests4.slice(0, 0)

console.log(`Total Number of Invited Guests are ${Guests4.length} `);
console.log(Guests4);
