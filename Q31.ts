let userNames1:Array<String> = []

if(userNames1.length === 0){
    console.log("No Users We Need to Find Some Users!");
}else{
for (let index = 0; index < userNames1.length; index++) {
    const element = userNames1[index];
    if (element === "Admin") {
        console.log("Hello Admin , Would you like to see a status report?");
    }
    else{
        console.log("Welcome " + element + " , Thank you for logging in again.");
    }
}
}
