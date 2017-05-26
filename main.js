var request = new XMLHttpRequest();
request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    presentNews(data.response.results)
  } else {
  }
};

request.onerror = function() {
};

request.send();


function presentNews(data) {
    data.forEach(function(element) {
    var newsList = document.getElementById('newsHeadlines');

  newsList.innerHTML +=   '<div id=' + element.id + '>'+
                           '<a href="#' + element.id + '"><header> ' + element.webTitle + '</header></a>'+
                           '</div>';

    })
}

showSummary();

function showSummary() {
    window.addEventListener("hashchange", getNewsID);
}

function getNewsID() {
    summary(window.location.hash.split('#')[1])
};

function summary(newslink){
    var summaryRequest = new XMLHttpRequest();
    var nl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://www.theguardian.com/' + newslink

    summaryRequest.open('GET', nl, true);

    summaryRequest.onload = function() {
        if (summaryRequest.status >= 200 && summaryRequest.status < 400) {
            var data = JSON.parse(summaryRequest.responseText);
            displaySummary(data.sentences, newslink)
        } else {

        }
    };

    summaryRequest.onerror = function() {
    };

    summaryRequest.send();

    function displaySummary(data, newslink) {
        var oldP = document.getElementById("newsSummary")
        oldP.setAttribute("hidden", true)
        var news = document.getElementById(newslink);
        news.innerHTML +=  `<p id="newsSummary">${data.join(" ")}</p>`

        }                       
}