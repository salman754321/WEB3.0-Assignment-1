function make_Car(make:String, model:String, ...otherInfo:any) {
    let Car:any ={}
    Car["make"] = make
    Car["model"] = model
    for(let i = 0; i < otherInfo.length; i++){
       let obj = otherInfo[i]
       let key = Object.keys(obj)[0]
       Car[key] = obj[key]
    }
    return Car
}

console.log(make_Car("Honda", "Accord", {year:2020}, {colour:"Black"}));
console.log(make_Car("Honda", "Accord", {year:2020}, {colour:"Black"}, {engine:"V6"}));
console.log(make_Car("Honda", "Accord", {year:2020}, {colour:"Black"}, {engine:"V6"}, {transmission:"Automatic"}));
