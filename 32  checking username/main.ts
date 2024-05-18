let current_users = ["usman", "ali", "areeb" ,"zain", "usama"]

let new_users = ["hamza", "ayesha", "ali", "zain", "atif"]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user)
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken`);
    }else{
        console.log(`this username ${new_one_user} is available`);
        
    }
})