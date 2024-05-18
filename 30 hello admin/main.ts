let userName = ["Arfat", "Asif", "kamran", "admin", "hussain"]

userName.forEach(oneUser => {
    if(oneUser === "admin"){
        console.log(`hello ${oneUser},would you like to see a status report?`);
        
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again`);
        
    }
})
