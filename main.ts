let guestList = ["Arfat", "kamran", "Asif"];

let dontCome = guestList[1]

console.log(dontCome, "nai aha sakta");

guestList.splice(0, 1, "hussain");

guestList.forEach(guestList => console.log(`salam ${guestList} , would you like to dinner with me?`));