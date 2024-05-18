let userName = ["Arfat", "Asif", "kamran", "admin", "hussain"]
userName = []
if (userName.length === 0) {
    console.log("your array is empty we need to find some user!");
}else{

userName.forEach(oneUser => {
    if(oneUser === "admin"){
        console.log(`hello ${oneUser},would you like to see a status report?`);
        
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again`);
        
    }
})
}