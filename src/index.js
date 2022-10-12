import './less/index.less'

// Your code goes here!

//mouseenter

const headerATags = document.querySelector('header');
headerATags.addEventListener("mouseenter", evt => {
  evt.target.style.fontStyle = "italic";
  evt.target.style.textDecoration = "underline";
});

//mouseleave

headerATags.addEventListener("mouseleave", evt => {
  evt.target.style.fontStyle = "normal";
  evt.target.style.textDecoration = "none";
});

//keydown

document.addEventListener("keydown", evt => {
  evt.target.style.backgroundColor = "lavender";
});

//keyup

document.addEventListener("keyup", evt => {
  evt.target.style.backgroundColor = "white";
})

//mouseover
const h4 = document.querySelector('header h2');
h4.addEventListener("mouseover", evt => {
  evt.target.style.fontSize = "5rem";
  evt.target.style.color = "purple";
});
//mouseover
const contentSectionH4 = document.querySelector('.content-section h2');
contentSectionH4.addEventListener("mouseover", evt => {
  evt.target.style.fontSize = "5rem";
  evt.target.style.color = "purple";
});


//mouseleave
h4.addEventListener("mouseleave", evt => {
  evt.target.style.fontSize = "3.2rem";
  evt.target.style.color = "black";
});

//mouseleave
contentSectionH4.addEventListener("mouseleave", evt =>{
  evt.target.style.fontSize = "3.2rem";
  evt.target.style.color = "black";
})

//dblclick
const busImage = document.querySelector('.intro img');
busImage.addEventListener("dblclick", evt => {
  evt.target.style.borderWidth = "10px";
  evt.target.style.borderColor = "lavender";
  evt.target.style.borderStyle = "inset";
});

//click

const boatImage = document.querySelector('.content-destination img');
boatImage.addEventListener("click", evt => {
  evt.target.style.borderWidth = "10px";
  evt.target.style.borderColor = "lavender";
  evt.target.style.borderStyle = "inset";
});


//preventDefault

Array.from(document.links).forEach(link => {
  link.addEventListener("click", e => {
    window.location.href = 'https://unsplash.com/s/photos/vacation';
    e.preventDefault();
  })  
})