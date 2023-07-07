let now_grid_page = 0;

function changeToGrid() {
  const list_button = document.getElementsByClassName("list_button")[0];
  const grid_button = document.getElementsByClassName("grid_button")[0];
  const list_container = document.getElementsByClassName("list_container")[0];
  const grid_container =
    document.getElementsByClassName("grid_container")[now_grid_page];
  const left_list_button =
    document.getElementsByClassName("left_list_button")[0];
  const right_list_button =
    document.getElementsByClassName("right_list_button")[0];
  const left_grid_button =
    document.getElementsByClassName("left_grid_button")[0];
  const right_grid_button =
    document.getElementsByClassName("right_grid_button")[0];

  // 버튼 색상 바꾸기
  list_button.src = "./images/list_off.png";
  grid_button.src = "./images/grid_on.png";

  // 그리드, 리스트 전환
  list_container.style.display = "none";
  grid_container.style.display = "grid";

  // 버튼 바꾸기
  left_grid_button.style.display = "block";
  right_grid_button.style.display = "block";
  left_list_button.style.display = "none";
  right_list_button.style.display = "none";
  showButton();
}

function changeToList() {
  const list_button = document.getElementsByClassName("list_button")[0];
  const grid_button = document.getElementsByClassName("grid_button")[0];
  const list_container = document.getElementsByClassName("list_container")[0];
  const grid_container =
    document.getElementsByClassName("grid_container")[now_grid_page];
  const left_list_button =
    document.getElementsByClassName("left_list_button")[0];
  const right_list_button =
    document.getElementsByClassName("right_list_button")[0];
  const left_grid_button =
    document.getElementsByClassName("left_grid_button")[0];
  const right_grid_button =
    document.getElementsByClassName("right_grid_button")[0];

  // 버튼 색상 바꾸기
  list_button.src = "./images/list_on.png";
  grid_button.src = "./images/grid_off.png";

  // 그리드, 리스트 전환
  list_container.style.display = "block";
  grid_container.style.display = "none";

  // 버튼 바꾸기
  left_grid_button.style.display = "none";
  right_grid_button.style.display = "none";
  left_list_button.style.display = "block";
  right_list_button.style.display = "block";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function appendList() {
  const grid_container_list = document.getElementsByClassName("grid_container");
  const shuffledArr = shuffleArray(pressObjArr);

  shuffledArr.forEach((element, idx) => {
    const id = Math.floor(idx / 24);
    const newImg = document.createElement("img");
    const li = document.createElement("li");
    newImg.src = element.imgSrc;
    newImg.id = element.id;
    li.appendChild(newImg);
    li.className = "item";
    grid_container_list[id].appendChild(li);
  });
}
function right_grid_button_click() {
  const curPage = document.getElementById(`page${now_grid_page}`);
  now_grid_page += 1;
  if (now_grid_page > 3) {
    now_grid_page = 3;
  }
  const nextPage = document.getElementById(`page${now_grid_page}`);
  curPage.style.display = "none";
  nextPage.style.display = "grid";
  showButton();
}
function left_grid_button_click() {
  const curPage = document.getElementById(`page${now_grid_page}`);
  now_grid_page -= 1;
  if (now_grid_page < 0) {
    now_grid_page = 0;
  }
  const nextPage = document.getElementById(`page${now_grid_page}`);
  curPage.style.display = "none";
  nextPage.style.display = "grid";
  showButton();
}

function showButton() {
  const left_grid_button =
    document.getElementsByClassName("left_grid_button")[0];
  const right_grid_button =
    document.getElementsByClassName("right_grid_button")[0];
  switch (now_grid_page) {
    case 0:
      left_grid_button.style.display = "none";
      right_grid_button.style.display = "block";
      return;
    case 3:
      left_grid_button.style.display = "block";
      right_grid_button.style.display = "none";
      return;
    default:
      left_grid_button.style.display = "block";
      right_grid_button.style.display = "block";
  }
}

function updateToday() {
  let today = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };

  today = today.toLocaleDateString("ko-KR", options);

  const dateHtml = document.getElementsByClassName("date")[0];
  dateHtml.innerHTML = today;
}

updateToday();
appendList();
