# Streaming-Project

## Description

This project uses HTML, CSS and JavaScript to query multiple APIs to retrieve data for movies and TV shows that are available to stream.

## Installation

TODO - Add installation notes here

## Usage

TODO - Add project usage here

<h2><u>Screenshots:</u></h2>

TODO - Add screen shots here

## Credits

TODO - Project credits here

## License

MIT License

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



//comments
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./assets/css/normalize.css" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Streaming Project</title>
  </head>
  <body>
    <header>
      <!-- Navbar -->
      <nav
        id="navBar"
        class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between"
      >
        <div class="px-6 w-full flex flex-wrap items-center justify-between">
          <div class="flex items-center">
            <button
              class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
              <li class="nav-item">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >Features</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >Pricing</a
                >
              </li>
              <li class="nav-item mb-2 lg:mb-0">
                <a
                  class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  >About</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Navbar -->

      <!-- Background image -->
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover"
        style="
          background-position: 50%;
          background-image: url('https://wallup.net/wp-content/uploads/2019/09/859165-poster-movie-film-movies-posters-748x421.jpg');
          height: 350px;
        "
      >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style="background-color: rgba(0, 0, 0, 0.75)"
        >
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 id="header" class="text-5xl font-bold mt-0 mb-6">
                Stream Seeker
              </h1>
              <h3 class="text-3xl font-bold mb-8"></h3>
            </div>
          </div>
        </div>
      </div>
      <!-- Background image -->
    </header>
    <!--Search Bar-->
    <div id="searchB" class="flex justify-center">
      <div class="mb-3 xl:w-96">
        <div
          class="input-group relative flex flex-wrap items-stretch w-full mb-4"
        >
          <input
            type="search"
            id="searchTerm"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Movie Title"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            id="searchBtn"
            class="btn inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-darkred-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  </div>
  <!--Info Card-->
  <div class="how to change flex justify-center">
    <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
      <!-- <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src=C:\Users\terra\streaming-project\Streaming-Project\assets\VirtualMovie-1.png alt="" /> -->
      <div class="p-6 flex flex-col justify-start">
        <h5 class="text-gray-900 text-xl font-medium mb-2">THAT'S ENTERTAINMENT</h5>
        <p class="text-blue-700 text-base mb-4">
          This is a web site desined to help you find what kind of movie or show you want to watch based on a catagory of your choosing.
        </p>
        <p class="text-red-600 text-xs">GRAB SNACK AND START WATCHING!</p>
=======
    <!--Info Card-->
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" id="img-1"class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"> -->
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" id="img-2"class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" id="img-3"class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" id="img-4"class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" id="img-5"class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" id="img-6"class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
>>>>>>> 61a94f73949690cd10fb0da6b5b12bd8fe8beda3
      </div>
  </div>
  
    <script src="./assets/js/script.js"></script>
  </body>
</html>

