
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
  //console.log(searchMovie);
  // check for blank input
  if (!searchMovie) {
    console.error('You need a search input value!');
    return;
  };
  // call function to process 'Promise' resolution JSON data
  doRequest(searchMovie).then(data => {
    console.log(data);
    let arrLen = data.Search.length;
    // loop through returned search array and display
    for (let i = 0; i < arrLen; i++) {
    let postername = data.Search[i].Poster;
    let movieTitle = data.Search[i].Title;
    let movieYear = data.Search[i].Year;
    let imdb = data.Search[i].imdbID;
    // creates the 'card' for each result returned
    var baseHTML = `<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
     <!-- Article -->
     <article imdb-id=${imdb} class="overflow-hidden rounded-lg shadow-lg">

         <a href="#">
             <img alt="Poster" id="img-${i}" class="block h-auto w-full" src="${postername}">
         </a>

         <header class="flex items-center justify-between leading-tight p-2 md:p-4">
             <h1 class="text-lg">
                 <a class="no-underline hover:underline text-black" href="#">
                     ${movieTitle}
                 </a>
             </h1>
             <p class="text-grey-darker text-sm">
                 (${movieYear})
             </p>
         </header>

     </article>
     <!-- END Article -->

 </div>`;

      // add the card into HTML here
      var cardContain = document.getElementById("search-movie-cards");
      cardContain.innerHTML += baseHTML;
      
    };
  });
};

// add event listenr for 'search' input
searchFormEl.addEventListener('search', handleSearchFormSubmit);
