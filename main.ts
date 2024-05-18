let guestList = ["Arfat", "kamran", "atif"];

let dontCome = guestList[1]

console.log(dontCome, "nai aha sakta");

guestList.splice(0, 1, "hussain");

console.log("Good news ! we found a big table for dinner");

guestList.unshift("asif")
guestList.push("sufiyan")
let middleIndex: number = Math.floor (guestList.length / 2)
guestList.splice(middleIndex, 0, "Ahmed")
console.log("updated list for guest");

guestList.forEach(guestList => console.log(`salam ${guestList} , would you like to dinner with me?`));

console.log("unfortunataly , the new dinner table wont arrive to timeso it can only invite two guest to dinner with me");

while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`sorry , ${removeGuest} i cant invite you to dinner`);
    
}

console.log("invitations to the last to guest");

guestList.forEach (lasttwo => console.log(`luckly ${lasttwo} you are still invited for the dinner`)
)

guestList.pop();
guestList.pop();

console.log("Empty list:",guestList);
