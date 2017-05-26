var headlineDiv


function headlinePrinter(headlines, headlineDiv) {
  headlines = headlines
  headlineDiv = headlineDiv

  headlineDiv.innerHTML = '';

  for (var i = 0; i < headlines.length; i++) {
    var headline = headlines[i].webTitle;

    headlineDiv.innerHTML += '<a href="#' + i + '" class="list-group-item list-group-item-action flex-column align-items-start"><h4> ' + headline + '</h4></a>';
  }
};
