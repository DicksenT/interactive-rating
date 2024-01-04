let numList = document.getElementsByClassName("number");
let user = document.querySelector(".userRating");
for (let i = 0; i < numList.length; i++) {
  numList[i].addEventListener("click", function () {
    for (j = 0; j < numList.length; j++) {
      numList[j].classList.remove("active");
    }
    this.classList.toggle("active");
    console.log(this.innerHTML);
    user.innerHTML = this.innerHTML;
  });
}
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const thx = document.querySelector(".thx");
btn.addEventListener("click", function () {
  container.style.display = "none";
  thx.style.display = "block";
});
