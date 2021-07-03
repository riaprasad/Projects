

const seats = document.querySelectorAll(".items");

const bookedSeatsElement = document.querySelector(".selected");
const remainingSeatsElement = document.querySelector(".remaining");

let bookedSeats = 0;
let remainingSeats = seats.length;
let spray = false;

bookedSeatsElement.textContent = bookedSeats;
remainingSeatsElement.textContent = remainingSeats;

seats.forEach(function (item) {
  item.addEventListener("mousedown", function (event) {
    spray = true;
    item.classList.toggle("booked");
    item.classList.contains("booked") ? bookSeats() : unBookSeats();
  });
  item.addEventListener("mouseup", function (event) {
    spray = false;
  });
  item.addEventListener("mouseover", function (event) {
    // console.log(spray);
    if (spray) {
      item.classList.toggle("booked");
      item.classList.contains("booked") ? bookSeats() : unBookSeats();
    }
  });
});

function bookSeats() {
  bookedSeats += 1;
  remainingSeats -= 1;

  bookedSeatsElement.textContent = bookedSeats;
  remainingSeatsElement.textContent = remainingSeats;
}
function unBookSeats() {
  bookedSeats -= 1;
  remainingSeats += 1;

  bookedSeatsElement.textContent = bookedSeats;
  remainingSeatsElement.textContent = remainingSeats;
}
