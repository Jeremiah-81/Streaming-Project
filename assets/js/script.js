
// Query selector to 'Input Bar' element
var searchFormEl = document.querySelector('#searchBtn');
//console.log(searchFormEl);

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
  }
};

async function watchmodeRequest(search) {
  //build out URL for database API
  //be sure to fill in YOUR API key below

  let url = new URL('https://api.watchmode.com/v1/title/' + search + '/sources/');
  let params = {'apiKey': 'LlQFg2M4CQsNVfd2kPtNc8gdCx4dGxvwKvxbOyBu'};
  url.search = new URLSearchParams(params);
  // put URL sent to 'fetch' into console window
  console.log(url.href); 
  // call fetch here, wait for reply
  let resp = await fetch(url.href);
  // make sure response is not an error
  if (resp.ok) {
      let myReply = await resp.json();
      console.log(myReply);
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
     <article id=cardPoster imdb-id=${imdb} class="overflow-hidden rounded-lg shadow-lg">

         <a href="#">
             <img alt="Poster" id="img-${i}" class="block h-auto w-full" src="${postername}">
         </a>

         <header class="flex items-center justify-between leading-tight p-2 md:p-4">
             <h1 class="text-lg">
                 <p id="movieTitle" class="no-underline text-black" href="#">
                     ${movieTitle}
                 </p>
             </h1>
             <p class="text-grey-darker text-sm">
                 (${movieYear})
             </p>
         </header>
<<<<<<< Updated upstream
         <!-- Modal toggle -->
         <button id="modalBtn" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
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
=======
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
          class="btn-close box-content w-4 h-4 p-1 background-color red text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
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
>>>>>>> Stashed changes
     </article>
     <!-- END Article -->

 </div>`;

      // add the card into HTML here
      var cardContain = document.getElementById("search-movie-cards");
      cardContain.innerHTML += baseHTML;
      
    };
    // Watchmode lookup
    watchmodeRequest(data.Search[0].imdbID);
  });
};

// add event listenr for 'search' input
searchFormEl.addEventListener('click', handleSearchFormSubmit);
