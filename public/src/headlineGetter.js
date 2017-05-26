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
