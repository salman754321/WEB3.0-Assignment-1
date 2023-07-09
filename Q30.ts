let userNames:Array<String> = ["Salman" , "Admin" , "Ali" , "Ammar" , "Ahsan" , "Aatif"]


for (let index = 0; index < userNames.length; index++) {
    const element = userNames[index];
    if (element === "Admin") {
        console.log("Hello Admin , Would you like to see a status report?");
    }
    else{
        console.log("Welcome " + element + " , Thank you for logging in again.");
    }
}