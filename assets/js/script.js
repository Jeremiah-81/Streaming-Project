
// Query selector to 'Input Bar' element
var searchFormEl = document.querySelector('#searchTerm');
//console.log(searchFormEl);

// Asynchronus function for doing FETCH, returns a 'Promise' that is
// resolved after function returns from call
async function doRequest(search) {
  //build out URL for database API
  //"1460f608" is Cliff's API key
  let url = new URL('http://www.omdbapi.com/');
  let params = {'apikey': '1460f608', 's': search};
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


// take data input from search and do API request
function handleSearchFormSubmit(event) {
  event.preventDefault();
  //console.log(event);
  var searchMovie = document.querySelector('#searchTerm').value;
  console.log(searchMovie);
  // check for blank input
  if (!searchMovie) {
    console.error('You need a search input value!');
    return;
  };
  // call function to process 'Promise' resolution JSON data
  doRequest(searchMovie).then(data => {
    console.log(data);
    //console.log(data.Title);
    //console.log(data.Poster);
    let info = document.getElementById('main');
    let title = document.createElement('h1');
    let img = document.createElement('img');
    //let plotText = document.createElement('p');
    //let runTime = document.createElement('h3');
    // loop through returned search array and display
    for (let i = 0; i < data.length; i++) {
    img.src = data[i].Poster;
    title.innerText = data[i].Title + ' - ' + data[i].Year;
    //plotText.innerText = data.Plot;
    //runTime.innerText = 'Running Time = ' + data.Runtime;
    info.appendChild(title);
    info.appendChild(img);
    //info.appendChild(runTime);
    //info.appendChild(plotText);
    };
  });
};

// add event listenr for 'search' input
searchFormEl.addEventListener('search', handleSearchFormSubmit);
