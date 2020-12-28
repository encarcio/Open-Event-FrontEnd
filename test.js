function createEventCard() {
    var obj = {
        "1": [
            "AW6X9Y9EVeQv5EGNQdGbcl6iT",
            "Comic Reading",
            3,
            "Fun",
            "Offline",
            "Rnsit",
            "14:00",
            "18:00",
            "free",
            "28/12/2020",
            null,
            null
        ],
        "2": [
            "fWwMWwG3IqDy0cBE5qqo9aHEm",
            "Writing",
            1,
            "Online",
            "Fun",
            "later",
            "19:06",
            "19:07",
            "0",
            "2020-12-28",
            "2020-12-29",
            "It's an event which is just and event"
        ],
        "5": [
            "Mt7lSxul3deN6Va4WBMkpcpPt",
            "Anime Watching",
            3,
            "Super Fun",
            "Online",
            "Fun Club",
            "14:00",
            "18:00",
            "free",
            "28/12/2020",
            "28/12/2020",
            "It's a very fun event which is basically about nothing and we also don't know why we are creating the event"
        ],
        "4": [
            "KRfbRg2lN1ghWJIW3sYJ7Qx4N",
            "Anime Watching",
            3,
            "Super Fun",
            "Online",
            "Fun Club",
            "14:00",
            "18:00",
            "free",
            "28/12/2020",
            "28/12/2020",
            null
        ]
    }
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