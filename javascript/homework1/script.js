let name = `Zaur`;
let age = 21;
name = prompt("Enter your name:");
while(name ===``){
    name = prompt("Name must be entered:");
}
age = +prompt("Enter your age:");
while(age === 0 || isNaN(age)){
    age = +prompt("Enter your age correctly:");

}

if (age<18){
    alert(`You are not allowed to visit this website`);
}
else if(age<22){
    if(confirm(`Are you sure you want to continue?`)){
        alert(`Welcome ` + name);
    }
    else {
        alert(`You are not allowed to visit this website`);
    }
}
else{
    alert(`Welcome `+ name);
}