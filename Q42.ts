function show_magicians2(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians2: string[] = ["Dynamo", "David Blaine", "Criss Angel", "David Copperfield", "Penn & Teller"];
show_magicians2(magicians2);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}


make_great(magicians2);
show_magicians2(magicians2);


