import "./style.css";

let state = {};

function render() {
  //     <header class="header">
  //     <div class="header__left">
  //       <h1 class="logo">Hollixton</h1>
  //       <nav>
  //         <ul class="left__nav-list">
  //           <li class="nav-list__item">Girls</li>
  //           <li class="nav-list__item">Guys</li>
  //           <li class="nav-list__item">Sale</li>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div class="header__right">
  //       <nav>
  //         <ul class="right__nav-list">
  //           <li class="nav-list__item">
  //             <span class="material-symbols-outlined"> search </span>
  //           </li>
  //           <li class="nav-list__item">
  //             <span class="material-symbols-outlined"> person </span>
  //           </li>
  //           <li class="nav-list__item">
  //             <span class="material-symbols-outlined"> shopping_bag </span>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>
  let appEl = document.querySelector("#app");
  if (appEl === null) return;
  appEl.textContent = "";
  let headerEl = document.createElement("header");
  headerEl.className = "header";

  let leftDivEl = document.createElement("div");
  leftDivEl.className = "header__left";

  let titleEl = document.createElement("h1");
  titleEl.className = "logo";
  titleEl.textContent = "Hollixton";

  let leftNavE = document.createElement("nav");

  let leftList = document.createElement("ul");
  leftList.className = "left__nav-list";

  let leftLiItem = document.createElement("li");
  leftLiItem.className = "nav-list__item";
  leftLiItem.textContent = "Girls";

  let leftLiItem1 = document.createElement("li");
  leftLiItem1.className = "nav-list__item";
  leftLiItem1.textContent = "Guys";

  let leftLiItem2 = document.createElement("li");
  leftLiItem2.className = "nav-list__item";
  leftLiItem2.textContent = "Sale";

  leftDivEl.append(titleEl, leftNavE);
  leftNavE.append(leftList);
  leftList.append(leftLiItem, leftLiItem1, leftLiItem2);

  let rightDivEl = document.createElement("div");
  rightDivEl.className = "header__right";
  let rightNavE = document.createElement("nav");
  let rightList = document.createElement("ul");
  rightList.className = "right__nav-list";
  let rightLiItem = document.createElement("li");
  rightLiItem.className = "nav-list__item";
  rightLiItem.textContent = "🔍";
  let rightLiItem1 = document.createElement("li");
  rightLiItem1.className = "nav-list__item";
  rightLiItem1.textContent = "👤";
  let rightLiItem2 = document.createElement("li");
  rightLiItem2.className = "nav-list__item";
  rightLiItem2.textContent = "🛒";
  rightNavE.append(rightList);
  rightList.append(rightLiItem, rightLiItem1, rightLiItem2);
  rightDivEl.append(rightNavE);
  headerEl.append(leftDivEl, rightDivEl);
  appEl.append(headerEl);
}
render();