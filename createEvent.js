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
            details_fetch();
           window.location.replace("C:/Users/hp/Desktop/projects/Open_Event_frntend/Open-Event-FrontEnd-master/index.html");
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

function details_fetch() {
    
    var data="";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        let elem=this.responseText;
        let obj= JSON.parse(elem);
        console.log(obj);

            var display = document.getElementById('id');
            Object.keys(obj).forEach(function (key) {
            let details = obj[key];
            console.log(obj[key]);
            let eventID = details[0];
            let title = details[1];
            let eventType = details[3];
            let category = details[4];
            let venue = details[5];
            let time = details[6];
            let date = details[9];
            let description = details[11];
            var card = `<div class="card"><a href="eventDisplay.html"><img src="img2.png" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">${title}</h5><p class="card-text">${date} ${time}</p><p class="card-text">${description}</p><p class="card-text"><small class="text-muted">By Coding Club</small></p></div></div>`;
            display.innerHTML += card;
        });
        
    }
    });

    xhr.open("GET", "http://localhost:8080/returnDetails");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

}