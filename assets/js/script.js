// Global Variables
// Query selector to 'Input Bar' element
var searchFormEl = document.querySelector('#searchBtn');

// element selector for movie cards container
const cardClickedEl = document.getElementById("search-movie-cards");

// Asynchronus function for doing FETCH, returns a 'Promise' that is
// resolved after function returns from call
async function omdbRequest(search) {
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
  };
};

// function to requesr movie sources from Watchmode API
async function watchmodeRequest(search) {
  //build out URL for database API
  //be sure to fill in YOUR API key below
  let url = new URL('https://api.watchmode.com/v1/title/' + search + '/sources/');
  let params = {'apiKey': 'LlQFg2M4CQsNVfd2kPtNc8gdCx4dGxvwKvxbOyBu'};
  url.search = new URLSearchParams(params);
  // put URL sent to 'fetch' into console window
  //console.log(url.href); 
  // call fetch here, wait for reply
  let resp = await fetch(url.href);
  // make sure response is not an error
  if (resp.ok) {
      let myReply = await resp.json();
      //console.log(myReply);
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
  var currentCards = document.getElementById('search-movie-cards');
  currentCards.innerHTML = '';
  //console.log(searchMovie);
  // check for blank input
  if (!searchMovie) {
    console.error('You need a search input value!');
    return;
  };

  // call function to process 'Promise' resolution JSON data
  omdbRequest(searchMovie).then(data => {
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
     <article id="cardPoster" class="overflow-hidden rounded-lg shadow-lg">

         <div>
             <img alt="Poster" id="img-${i}" class="block h-auto w-full" src="${postername}">
         </div>

         <header class="flex items-center justify-between leading-tight p-2 md:p-4">
             <h1 class="text-lg">
                 <p id="movieTitle" class="no-underline text-black">
                     ${movieTitle}
                 </p>
             </h1>
             <p class="text-grey-darker text-sm">
                 (${movieYear})
             </p>
         </header>
         <!-- Modal toggle -->
         <button id=${imdb} class="modalBtn block text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
           Streaming Sources
         </button>
         
         <!-- Main modal -->
         <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
             <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                 <!-- Modal content -->
                 <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     <!-- Modal header -->
                     <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                         <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                             Terms of Service
                         </h3>
                         <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                         </button>
                     </div>
                     <!-- Modal body -->
                     <div class="p-6 space-y-6">
                         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                           
                         </p>
                         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                             
                         </p>
                     </div>
                     <!-- Modal footer -->
                     <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                         <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                         <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                     </div>
                 </div>
             </div>
         </div>
     </article>
     <!-- END Article -->

 </div>`;

      // add the card into HTML here
      var cardContain = document.getElementById("search-movie-cards");
      cardContain.innerHTML += baseHTML;
      
    };// end of 'for' loop

  }); // end 'then.'
}; // end function 'handleSearchFormSubmit'

function parseWatchmode(sourcesObj) {
    let moviesSource = [];
    let resultsIdx = 0;
    for (let i = 0; i < sourcesObj.length; i++) {
        if (sourcesObj[i].format === "HD") {
        moviesSource[resultsIdx] = {"name": sourcesObj[i].name, "format": sourcesObj[i].format, "url":  sourcesObj[i].web_url};
        resultsIdx++;
        };
    };
    return moviesSource;
};

// function for click on returned movie search results
function handleStreamSourceSelect(event) {
    let clickTarget = event.target.getAttribute("id");
    if (clickTarget === null) {
        console.log("NO DATA!");
        return;
    };
    let first = clickTarget.slice(0, 2);
    //console.log(first);
    if (first != 'tt') {
        console.log(clickTarget);
        return;
    } else {
        //console.log("imdb-id received");
        // do request to Watchmode API
        watchmodeRequest(clickTarget).then(data => {
            //console.log(data);
            let myData = parseWatchmode(data);
            console.log(myData);
        });
        
    };
};// end of handleStreamSourceSelect function

// add event listenr for 'search' input
searchFormEl.addEventListener('click', handleSearchFormSubmit);

// event listener for movie cards that were generated
cardClickedEl.addEventListener('click', handleStreamSourceSelect);
