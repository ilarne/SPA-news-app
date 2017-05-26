// function summary(newslink){
// var summaryRequest = new XMLHttpRequest();
// summaryRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/uk-news/live/2017/may/26/manchester-attack-arrest-police-search-accomplices-live', true);

// summaryRequest.onload = function() {
//   if (summaryRequest.status >= 200 && summaryRequest.status < 400) {
//     var data = JSON.parse(summaryRequest.responseText);
//     console.log(data.sentences)
//   } else {

//   }
// };

// summaryRequest.onerror = function() {
// };

// summaryRequest.send();

// function displaySummary(data) {
//     var news = document.getElementById(newslink);

//     news.innerHTML +=  `<p>${data.join(" ")}</p>`

//     }                       
// }