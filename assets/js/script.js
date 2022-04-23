// Global variables here
// Query selector to 'Input Bar' element
var searchFormEl = document.querySelector('#searchBtn');

// element selector for movie cards container
const cardClickedEl = document.getElementById("search-movie-cards");

// Asynchronus function for doing FETCH from OMDB API, 
// returns a 'Promise' that is resolved after function returns from call
async function omdbRequest(search) {
  //build out URL for database API
  //be sure to fill in YOUR API key below
  let url = new URL('https://www.omdbapi.com/');
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

// Asynchronus function to request movie sources from Watchmode API
// returns a 'Promise' that is resolved after function returns from call
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
// then render out HTML for cards to display search results
function handleSearchFormSubmit(event) {
    event.preventDefault();
    //console.log(event);
    var searchMovie = document.querySelector('#searchTerm').value;
    // this clears out any existing results in the container HTML
    var currentCards = document.getElementById('search-movie-cards');
    currentCards.innerHTML = '';
    // check for blank input here
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
        // if no cover image is returned, then use placeholder image instead
        if (postername === "N/A") {
            postername = "https://www.fillmurray.com/370/500";
        }
    // creates the 'card' HTML for each result returned
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
    <!-- Search streaming services and Modal toggle button -->
    <button id=${imdb} type="button"
  class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
  Show Streaming Sources
</button>
         
<!-- Main modal -->
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel${i}">
          Streaming Sources for ${movieTitle}
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="links-area${i}" imdb-id="${imdb}" class="modal-body relative p-4"></div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">Close</button>       
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

// parses through returned results from Watchmode API
function parseWatchmode(sourcesObj) {
    let moviesSource = [];
    let resultsIdx = 0;
    // loop through the object that is passed in to determine the format of each
    for (let i = 0; i < sourcesObj.length; i++) {
        if (sourcesObj[i].format === "HD") {
        moviesSource[resultsIdx] = {"name": sourcesObj[i].name, "format": sourcesObj[i].format, "type": sourcesObj[i].type, "url": sourcesObj[i].web_url};
        resultsIdx++;
        };
    };
    return moviesSource;// return an object array after the desired formats are picked out
};

//parse links and place on modal window
function showLinksModal(idNum, dataObj) {
    // selects the right container for the links on the modal popup
    let linksEl = document.querySelector('[imdb-id="' +idNum+ '"]');
    let indexObj = dataObj.length;
    // create a DIV for the links on the modal window
    let linksContain = document.createElement('div')
    for (let i = 0; i < indexObj; i++) {
        let linkTxt = dataObj[i].name;
        let linkURL = dataObj[i].url;
        let linkType = dataObj[i].type;
        let typeTxt = "Stream";// sets default link type
        // if the link type is "buy" this will change the text to that instead of the default
        if (linkType === "buy") {
            typeTxt = "Buy";
        };
        // this builds out the HTML link for the modal window
        let linkBaseHTML = `<a href="${linkURL}" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out" target="_blank">${typeTxt} from ${linkTxt}</a><br>`
        linksContain.innerHTML += linkBaseHTML;
        };
    // append the result to container in modal window
    linksEl.append(linksContain);
};

// function for click on returned movie search results
function handleStreamSourceSelect(event) {
    // selects the item "id" name that was clicked on
    let clickTarget = event.target.getAttribute("id");
    //console.log(clickTarget);
    // check that the targe returned is not a NULL (invalid)
    if (clickTarget === null) {
        console.log("NO DATA!");
        return;
    };
    // select the first two characters of the movie id
    let first = clickTarget.slice(0, 2);
    // make sure it's a valid IMDB id
    if (first != 'tt') {
        //console.log(clickTarget);
        return;
    } else {
        //console.log("imdb-id received");
        // do request to Watchmode API here
          watchmodeRequest(clickTarget).then(data => {
            //console.log(data);
            let myData = parseWatchmode(data);
            //console.log(myData);
            // after returned Watchmode API data is parsed into an object
            showLinksModal(clickTarget, myData);
        });
        
    
    };
};// end of handleStreamSourceSelect function

// add event listenr for 'search' input
searchFormEl.addEventListener('click', handleSearchFormSubmit);

// event listener for movie cards that were generated
cardClickedEl.addEventListener('click', handleStreamSourceSelect);
