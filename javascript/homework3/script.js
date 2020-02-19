function createNewUser() {
    let newUser={
        firstName: prompt('Enter name'),
        lastName: prompt('Enter surname'),
        getLogin(){
            return newUser.firstName.slice(0,1).toLowerCase() + newUser.lastName.toLowerCase();
        }
    };
    return newUser.getLogin();
}

alert(createNewUser());