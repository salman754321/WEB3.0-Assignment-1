
type User = { name: string, age: number, Designation: string , salary?:number , Hobbies?:string[]};
let user1: User = { 
    name: "Salman",
    age: 24,
    Designation: "Developer",
    salary: 100000 ,
    Hobbies:["Cricket" , "Football"] 
};
console.log(user1);

let user2 :User ={
    name: "Hanan",
    age: 24,
    Designation: "Developer",
    salary: 100000 ,
    // Hobbies Are Optional So We Can Skip them
}

console.log(user2);
