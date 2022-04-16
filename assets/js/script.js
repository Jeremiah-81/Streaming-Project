

// Asynchronus function for doing FETCH, returns a 'Promise' that is
// resolved after function returns from call
async function doRequest() {
  //build out URL for database API
  //"1460f608" is Cliff's API key
  let url = new URL('http://www.omdbapi.com/');
  let params = {'apikey': '1460f608', 'i': 'tt1877830'};
  url.search = new URLSearchParams(params);
  // put URL sent to 'fetch' into console window
  console.log(url.href); 
  // call fetch here, wait for reply
  let resp = await fetch(url.href);
  // make sure response is not an error
  if (resp.ok) {
      let myReply = await resp.json();
      return myReply;
  } else {
      return `HTTP error: ${resp.status}`;
  }
};

// call function to process 'Promise' resolution JSON data
doRequest().then(data => {
  //console.log(data);
  //console.log(data.Title);
  //console.log(data.Poster);
  let info = document.getElementById('main');
  let title = document.createElement('h1');
  let img = document.createElement('img');
  let plotText = document.createElement('p');
  let runTime = document.createElement('h3');
  img.src = data.Poster;
  title.innerText = data.Title + ' - ' + data.Year;
  plotText.innerText = data.Plot;
  runTime.innerText = 'Running Time = ' + data.Runtime;
  info.appendChild(title);
  info.appendChild(img);
  info.appendChild(runTime);
  info.appendChild(plotText);
});
