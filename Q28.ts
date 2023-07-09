let age1 : number = 24;

if(age1 < 2){
    console.log("The Person is a Baby");
}else if(age1 >= 2 && age1 < 4){
    console.log("The Person is a Toddler");
}else if(age1 >= 4 && age1 < 13){
    console.log("The Person is a Kid");
}else if(age1 >= 13 && age1 < 20){
    console.log("The Person is a Teenager");
}else if(age1 >= 20 && age1 < 65){
    console.log("The Person is an Adult");
}else if(age1 >= 65){
    console.log("The Person is an Elder");
}

