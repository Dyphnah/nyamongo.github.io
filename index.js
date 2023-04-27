const picture = document.querySelector(".blog");
const title = document.querySelector(".blog-text");
const author = document.createElement("blog-text, h4");
const content =document.querySelector(".blog-text, p");
const contactForm = document.querySelector("contact-form");
const themeButton = document.querySelector(".theme-btn");

const url = 'http://localhost:3000/blog';

// add a new blog from json file
function fetchNewBlog(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(blog => {
      picture.src = data.picture;
      content.innerHTML = data.content;
      title.innerHTML = data.title;
      author.innerHTML = data.author;
        }     
      )};

//change theme
function toggleTheme (light, dark) {
document.querySelector(".theme-btn").addEventListener("click", () => {
 document.body.classList.toggle("light-mode");
})} 

// form submission

const button = document.querySelector('.main-btn');
button.addEventListener('click', () => {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const subject = document.querySelector('input[type="text"]').value;
  const message = document.querySelector('textarea').value;
  const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
  window.location.href = `mailto:nyandukodyphnah4@gmail.com?subject=${subject}&body=${body}`;
});



document.addEventListener('DOMContentLoaded', function() {
    fetchNewBlog(1);
    toggleTheme(); 
    
 });

