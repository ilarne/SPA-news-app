var request = new XMLHttpRequest();
var div = document.getElementById('headlines');

request.open('GET', 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
  } else {
  }
  var stories = JSON.parse(request.response).response.results;
  headlinePrinter(stories, div);
};

request.onerror = function() {
};

request.send();


var request = new XMLHttpRequest();
var div = document.getElementById('headlines');

request.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/brother-partner-zone/2017/may/26/achieving-more-with-less-how-managed-print-services-help-schools-slash-costs', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
  } else {
  }
};

request.onerror = function() {
};

request.send();
