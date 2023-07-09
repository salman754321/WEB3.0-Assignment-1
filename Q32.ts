let currentUsers:Array<String> = ["Salman" , "Admin" , "Ali" , "Ammar" , "Ahsan" , "Aatif"]
let newUsers:Array<String> = ["salman" , "Ahsen" ,  "Amir" , 'ali' , 'AMMAR']


for (let index = 0; index < currentUsers.length; index++) {
    currentUsers[index] = currentUsers[index].toLowerCase()
}

for (let index = 0; index < newUsers.length; index++) {
    if (currentUsers.indexOf(newUsers[index].toLowerCase()) !== -1) {
        console.log("Sorry " + newUsers[index] + " , That username is taken.");
    }else{
        console.log("Great " + newUsers[index] + " , That username is available.");
    }
}

