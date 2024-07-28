const arrows = document.querySelectorAll(".arrow"); //arrows is a nodelist
const movieLists = document.querySelectorAll(".movie-list"); //movieLists is a nodelist

arrows.forEach((arrow, i) => { //i is the index of the current arrow in arrows nodelist
  const itemNumber = movieLists[i].querySelectorAll("img").length; //number of images in a movie list
  let clickCounter = 0; //number of times the arrow is clicked
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270); //Number of items in the current window width
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) { //check if there are more characters left to show - number of hidden items greater or equal to 0
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;//current X value of the transform property.First element X
    } 
    else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

/*Select all elements with the class arrow and movie-list.
For each arrow, calculate the number of items (img tags) in the corresponding movie-list.
On arrow click:
Calculate the number of items that can fit in the current window width.
Increase the clickCounter.
If there are more items to show (i.e., some items are still hidden), translate the movie-list left by 300 pixels.
If no more items to show, reset the movie-list position and clickCounter.*/

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

/*
Select the toggle button (with the class toggle-ball) and other items to be toggled.
On toggle button click:
Toggle the active class on all selected items and the toggle button itself.
*/