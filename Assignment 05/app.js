const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");
const item = document.querySelector("li");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = e.target.add.value;

  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${text}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  addForm.reset();
});

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    }
  });

function filterTodos(searchText) {
    const lowerCaseSearchText = searchText.toLowerCase();
    for (let i = 0; i < list.children.length; i++) {
      const li = list.children[i];
      if (!li.textContent.toLowerCase().includes(lowerCaseSearchText)) {
        li.classList.add("filtered");
      } else {
        li.classList.remove("filtered");
      }
    }
  }

search.addEventListener("keyup", function (e) {
  //   console.log(e);
  const searchText = e.target.value;
  filterTodos(searchText);
});
