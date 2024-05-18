function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));   
}

function make_great(magicians: string[]){
   return magicians.map(name => `The great ${name}`)

}

let magicians_names = ["harry porter", "arfat", "asif"]
let great_magicians =make_great(magicians_names)

console.log(great_magicians);
show_magicians(great_magicians)