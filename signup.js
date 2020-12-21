function hoverNavLink(id) {
    var elem = document.getElementById(id);
    elem.classList.add("text-primary");
}
function matchPassword(ID1,ID2) {
    var password=document.getElementById(ID1).value;
    var confirmPassword=document.getElementById(ID2).value;
    console.log(password);
    console.log(confirmPassword);
    if(password===confirmPassword)
    {
       return; 
    }
    else{
        alert("Please re-enter password");
    }
}