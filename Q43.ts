function show_magicians3(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians3: string[] = ["Dynamo", "David Blaine", "Criss Angel", "David Copperfield", "Penn & Teller"];
show_magicians3(magicians2);

function make_great2(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}

let great_magicians = make_great2(magicians3);
show_magicians3(great_magicians);
console.log("Unchanged Array");

show_magicians3(magicians3);

