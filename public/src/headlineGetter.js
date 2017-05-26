var request = new XMLHttpRequest();
var headlines
request.open('GET', 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
  } else {
  }
  headlinePrinter();
};

request.onerror = function() {
};

request.send();

  function headlinePrinter() {
    headlines = JSON.parse(request.response).response.results;
    var headlineDiv = document.getElementById('headlines');

  headlineDiv.innerHTML = '';

  for (var i = 0; i < headlines.length; i++) {
    var headline = headlines[i].webTitle;

    headlineDiv.innerHTML += '<a href="#' + i + '" class="list-group-item list-group-item-action flex-column align-items-start"><h4> ' + headline + '</h4></a>';
  }
};
