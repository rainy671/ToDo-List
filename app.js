let addform = document.addfrm;
let ul = document.querySelector("ul");

addform.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = addform.add.value;
  let text = addform.add;
  let i = document.createElement("i");
  let li = document.createElement("li");

  i.classList = "far fa-trash-alt delete";
  li.classList =
    " list-group-item d-flex justify-content-between align-items-center";
  li.innerText = item;
  ul.appendChild(li);
  li.appendChild(i);
  text.value = "";
  i.addEventListener("click", () => {
    li.remove();
  });
});

let dlt = document.querySelectorAll("i");
let dltli = document.querySelectorAll("li");
let litag = Array.from(dltli);
let itag = Array.from(dlt);
itag.forEach((y) => {
  y.addEventListener("click", () => {
    y.parentElement.remove();
  });
});
let searchItem = (text) => {
  let listItems = ul.children;
  for (let li of listItems) {
    if (li.innerText.toLowerCase().indexOf(text) == -1)
      li.classList.add("filtered");
    else li.classList.remove("filtered");
  }
};

let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});
