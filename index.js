const theme = document.querySelector(".theme-btn")
const

const addBlog = function (blog) {
    [...].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
}();

// Referencing Old Code
// Selecting all elements

const movieTitle = document.getElementById('title');
const poster = document.querySelector('#poster');
const runTime = document.getElementById('runtime');
let showTime = document.getElementById('showtime');
const tickets = document.getElementById('tickets');
const description = document.querySelector('#film-info');
const numAvailableTickets = document.getElementById('ticket-num');
const button = document.querySelector('#buy-ticket');

const url = 'http://localhost:3000/films';

function fetchFirstMovie(id) {
  fetch(`${url}/${id}`)
  .then(response => response.json())
  .then(data => {
    poster.src = data.poster;
    movieTitle.innerHTML = data.title;
    runTime.innerHTML = `${data.runtime} minutes`;
    showTime.innerHTML = data.showtime;
    description.innerHTML = data.description;
    numAvailableTickets.innerText = data.capacity - data.tickets_sold;

    //  Deliverable 3: Buy Movie Ticket and decrease available tickets
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if(numAvailableTickets.innerText > 0) {
        numAvailableTickets.innerText--;
      } else {
        button.innerText = 'Sold Out';
      }     
    });
  });
}

// Deliverable 2: See a Menu of all Movies/Films.
const nav = document.getElementById('films');

function listAllMovies() {
  fetch(`${url}`)
  .then(response => response.json())
  .then(films => {
    nav.innerText = '';
    films.forEach(film => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      li.innerText = film.title.toUpperCase();
      li.addEventListener('click', () => {
        fetchFirstMovie(film.id);
      });
      li.appendChild(link);
      nav.appendChild(li);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchFirstMovie(1);
  listAllMovies(); 
});
