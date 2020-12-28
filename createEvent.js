function printDate() {
    var elem=document.getElementById('startTime').value;
    console.log(elem);

    var email= document.getElementById("email").value;
    var title= document.getElementById("title").value;
    var description= document.getElementById("description").value;
    var category= document.getElementById("category").value;
    var event_type=document.getElementById("event_type").value;
    var price=document.getElementById("price").value;
    var venue=document.getElementById("venue").value;
    var startTime=document.getElementById("startTime").value;
    var endTime=document.getElementById("endTime").value;
    var startTime=document.getElementById("startTime").value;


    var dateTime=document.getElementById('startTime').value;
    var splittedDateTime=dateTime.split('T');
    var startDate=splittedDateTime[0];
    var startTime=splittedDateTime[1];
    dateTime=document.getElementById('endTime').value;
    splittedDateTime=dateTime.split('T');
    var endDate=splittedDateTime[0];
    var endTime=splittedDateTime[1];


    var data = JSON.stringify({"eventname":title,"eventtype":event_type,"category":category,"venue":venue,
    "starttime":startTime,"endtime":endTime,"fee":price,"email":email,"description":description,
    "date":startDate,"endDate":endDate});

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        var status_code=this.status;

        if(status_code==202){
            console.log("Success");
            window.location.replace("file:///C:/Users/hp/Desktop/projects/FRONTEND_PROJECT/index.html");
            }
        else
        {
            alert("Wrong email");
            location.reload();
        }

    }
    });

    xhr.open("POST", "http://localhost:8080/eventRegister");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    
}