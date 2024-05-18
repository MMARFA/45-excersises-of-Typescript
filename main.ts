let guestList = ["Arfat", "kamran", "Asif"];

let dontCome = guestList[1]

console.log(dontCome, "nai aha sakta");

guestList.splice(0, 1, "hussain");

console.log("Good news ! we found a big table for dinner");

guestList.unshift("Atif")
guestList.push("sufiyan")
let middleIndex: number = Math.floor (guestList.length / 2)
guestList.splice(middleIndex, 0, "Ahmed")
console.log("updated list for guest");

guestList.forEach(guestList => console.log(`salam ${guestList} , would you like to dinner with me?`));