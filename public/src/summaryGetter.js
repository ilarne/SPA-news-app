var request = new XMLHttpRequest();
request.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + storyUrl, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
  } else {
  }
};

request.onerror = function() {
};

request.send();
