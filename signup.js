function hoverNavLink(id) {
    var elem = document.getElementById(id);
    elem.classList.add("text-primary");
}
function matchPassword(ID1,ID2) {
    var password=document.getElementById(ID1);
    var confirmPassword=document.getElementById(ID2);
    if(!(password===confirmPassword))
    {
        alert("Please re-enter password");
    }
}