function matchPassword() {
    var newPassword=document.getElementById("newPassword").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
    if(newPassword===confirmPassword)
    {
        var xhr=new XMLHttpRequest();
        xhr.withCredentials=false;
        var data=JSON.stringify({"newPassword":newPassword});
        xhr.addEventListener("readystatechange",function(){
            if(this.readyState===4)
            {
                console.log("Success. Password Successfully Changed");
               // window.location.replace("login.html"); Uncomment this and add the link you want to use to redirect to
            }
            else{
                console.log("")
            }
        });
        xhr.open("POST", ""); //server link for handling data to be added
        xhr.setRequestHeader("Authorization", "");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    }else{
        alert("Password does not match. Please enter again.");
        location.reload();
    }
}