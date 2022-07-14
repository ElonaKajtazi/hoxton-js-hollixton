import "./style.css";
// Creating the storeItem type
type StoreItem = {
  id: number;
  type: string;
  name: string;
  image: string;
  price: number;
  discountedPrice?: number;
  dateEntered: string;
  stock: number;
};
// creating the state type
type State = {
  store: StoreItem[];
  selectedItem: StoreItem | null;
  page: "home" | "girls" | "guys" | "sale";
  modals: "search" | "bag" | "sign-in" | "";
};
// creating state
let state: State = {
  store: [],
  selectedItem: null,
  page: "home",
  modals: "sign-in",
};
// fetching the data from the server
function getStoreItems() {
  fetch("http://localhost:3005/store")
    .then((rsp) => rsp.json())
    .then((store) => {
      state.store = store;
      render();
    });
}
// creating a function to select shopping item
function selectShoppingItem(item: StoreItem) {
  state.selectedItem = item;
}
// creating a function that deselecta a shopping item and shows the home page
function deselectItem() {
  state.selectedItem = null;
}
// rendering header
function renderHeader(appEl: Element) {
  let headerEl = document.createElement("header");
  headerEl.className = "header";
  //Header left
  let leftDivEl = document.createElement("div");
  leftDivEl.className = "header__left";

  let logoEl = document.createElement("h1");
  logoEl.className = "logo";
  logoEl.textContent = "Hollixton";
  logoEl.addEventListener("click", () => {
    deselectItem();
    state.page = "home";
    render();
  });
  let leftNavE = document.createElement("nav");

  let leftList = document.createElement("ul");
  leftList.className = "left__nav-list";

  let leftLiItem = document.createElement("li");
  leftLiItem.className = "nav-list__item";
  leftLiItem.textContent = "Girls";
  leftLiItem.addEventListener("click", function () {
    deselectItem();
    state.page = "girls";
    render();
  });

  let leftLiItem1 = document.createElement("li");
  leftLiItem1.className = "nav-list__item";
  leftLiItem1.textContent = "Guys";
  leftLiItem1.addEventListener("click", function () {
    deselectItem();
    state.page = "guys";
    render();
  });

  let leftLiItem2 = document.createElement("li");
  leftLiItem2.className = "nav-list__item";
  leftLiItem2.textContent = "Sale";
  leftLiItem2.addEventListener("click", function () {
    deselectItem();
    state.page = "sale";
    render();
  });

  leftDivEl.append(logoEl, leftNavE);
  leftNavE.append(leftList);
  leftList.append(leftLiItem, leftLiItem1, leftLiItem2);
  //Header right
  let rightDivEl = document.createElement("div");
  rightDivEl.className = "header__right";

  let rightNavE = document.createElement("nav");

  let rightList = document.createElement("ul");
  rightList.className = "right__nav-list";

  let rightLiItem = document.createElement("li");
  rightLiItem.className = "nav-list__item";
  rightLiItem.textContent = "🔍";
  rightLiItem.addEventListener("click", function () {
    state.modals = "search";
    render();
  });

  let rightLiItem1 = document.createElement("li");
  rightLiItem1.className = "nav-list__item";
  rightLiItem1.textContent = "👤";
  rightLiItem1.addEventListener("click", function () {
    state.modals = "sign-in";
    render();
  });

  let rightLiItem2 = document.createElement("li");
  rightLiItem2.className = "nav-list__item";
  rightLiItem2.textContent = "🛒";

  rightNavE.append(rightList);
  rightList.append(rightLiItem, rightLiItem1, rightLiItem2);
  rightDivEl.append(rightNavE);
  headerEl.append(leftDivEl, rightDivEl);

  appEl.append(headerEl);
}
// rendering the Home page
function renderHomePage(appEl: Element) {
  let mainEl = document.createElement("main");
  mainEl.className = "main";

  let titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.textContent = "Home";

  let shopingItemsList = document.createElement("ul");
  shopingItemsList.className = "shoping-items";

  for (let item of state.store) {
    renderShoppingItems(item, shopingItemsList);
  }
  mainEl.append(titleEl, shopingItemsList);
  appEl.append(mainEl);
}
// rendering girl items section
function renderGirlItemsSection(appEl: Element) {
  let mainEl = document.createElement("main");
  mainEl.className = "main";

  let titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.textContent = "Home";

  let shopingItemsList = document.createElement("ul");
  shopingItemsList.className = "shoping-items";
  let items = state.store.filter((item) => {
    return item.type === "Girls";
  });
  for (let item of items) {
    renderShoppingItems(item, shopingItemsList);
  }
  mainEl.append(titleEl, shopingItemsList);
  appEl.append(mainEl);
}
// rendering guy items section
function rendeGuyItemsSection(appEl: Element) {
  let mainEl = document.createElement("main");
  mainEl.className = "main";

  let titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.textContent = "Home";

  let shopingItemsList = document.createElement("ul");
  shopingItemsList.className = "shoping-items";
  let guisItems = state.store.filter((item) => {
    return item.type === "Guys";
  });
  for (let item of guisItems) {
    renderShoppingItems(item, shopingItemsList);
  }
  mainEl.append(titleEl, shopingItemsList);
  appEl.append(mainEl);
}
// rendering sale items section
function rendeInSaleSection(appEl: Element) {
  let mainEl = document.createElement("main");
  mainEl.className = "main";

  let titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.textContent = "Home";

  let shopingItemsList = document.createElement("ul");
  shopingItemsList.className = "shoping-items";
  let guisItems = state.store.filter((item) => {
    return item.discountedPrice;
  });
  for (let item of guisItems) {
    renderShoppingItems(item, shopingItemsList);
  }
  mainEl.append(titleEl, shopingItemsList);
  appEl.append(mainEl);
}
//  rendering the shopping items that we are going to loop over at all the above functions except the header
function renderShoppingItems(item: StoreItem, shopingItemsList: HTMLElement) {
  let shopingItemEl = document.createElement("li");
  shopingItemEl.className = "shopping-item";
  shopingItemEl.addEventListener("click", () => {
    selectShoppingItem(item);
    render();
  });
  let shopingItemImageEl = document.createElement("img");
  shopingItemImageEl.className = "shoping-item__img";
  shopingItemImageEl.src = item.image;
  shopingItemImageEl.alt = item.name;

  let shopingItemNameEl = document.createElement("h3");
  shopingItemNameEl.className = "item-name";
  shopingItemNameEl.textContent = item.name;
  // <p class="item-price">
  // <span class="previous-item-price">£40</span>
  // <span class="discounted-item-price">£21.99</span>
  // </p>
  let shopingItemPriceEl = document.createElement("p");
  shopingItemPriceEl.className = "item-price";
  if (item.discountedPrice) {
    let shopingItemPriceSpanEl = document.createElement("span");
    shopingItemPriceSpanEl.className = "previous-item-price";
    shopingItemPriceSpanEl.textContent = "£" + item.price;

    let shopingItemPriceSpanEl1 = document.createElement("span");
    shopingItemPriceSpanEl1.className = "discounted-item-price";
    shopingItemPriceSpanEl1.textContent = "£" + item.discountedPrice;
    shopingItemPriceEl.append(shopingItemPriceSpanEl, shopingItemPriceSpanEl1);
  } else {
    let shopingItemPriceSpanEl = document.createElement("span");
    shopingItemPriceSpanEl.className = "item-price";
    shopingItemPriceSpanEl.textContent = "£" + item.price;
    shopingItemPriceEl.append(shopingItemPriceSpanEl);
  }

  shopingItemEl.append(
    shopingItemImageEl,
    shopingItemNameEl,
    shopingItemPriceEl
  );
  shopingItemsList.append(shopingItemEl);
}
// rendering footer
function renderFooter(appEl: Element) {
  let footerEl = document.createElement("footer");
  footerEl.className = "footer";

  let footerLogoEl = document.createElement("h3");
  footerLogoEl.className = "footer__logo";

  footerLogoEl.textContent = "Hollixton";
  let footerUkEl = document.createElement("p");
  footerUkEl.className = "uk";

  let footerUkFlagEl = document.createElement("img");
  footerUkFlagEl.className = "uk-flag";
  footerUkFlagEl.src = "./330425 (1).png";
  footerUkFlagEl.alt = "uk flag";

  let footerUkTextEl = document.createElement("span");
  footerUkTextEl.textContent = "United Kingdom";
  footerUkEl.append(footerUkFlagEl, footerUkTextEl);
  footerEl.append(footerLogoEl, footerUkEl);
  appEl.append(footerEl);
}
// rendering specifick item page
function renderProductDetailsPage(appEl: Element) {
  let productDetailsDiv = document.createElement("div");
  productDetailsDiv.className = "product-details";

  let imageContainerDiv = document.createElement("div");
  imageContainerDiv.className = "image-container";
  let imageEl = document.createElement("img");

  if (state.selectedItem === null) return;

  imageEl.className = "shoping-item-details-img";
  imageEl.src = state.selectedItem.image;
  imageEl.alt = state.selectedItem.name;

  let productDetailsContainerDiv = document.createElement("div");
  productDetailsContainerDiv.className = "product-details-container";

  let productNameH3 = document.createElement("h3");
  productNameH3.className = "product-name";
  productNameH3.textContent = state.selectedItem.name;

  let addToBagButton = document.createElement("button");
  addToBagButton.className = "add-to-bag-button";
  addToBagButton.textContent = "ADD TO BAG";

  productDetailsContainerDiv.append(productNameH3, addToBagButton);
  imageContainerDiv.append(imageEl);
  productDetailsDiv.append(imageContainerDiv, productDetailsContainerDiv);

  appEl.append(productDetailsDiv);
}
function renderSearchModal(appEl: Element) {
  let searchModalWrapper = document.createElement("div");
  searchModalWrapper.className = "search-modal__wrapper";

  let searchModalContainer = document.createElement("div");
  searchModalContainer.className = "search-modal__container";

  let searchModalCloseButton = document.createElement("button");
  searchModalCloseButton.className = "search-modal__close-button";
  searchModalCloseButton.textContent = "x";
  searchModalCloseButton.addEventListener("click", () => {
    state.modals = "";
    render();
  });
  let searchModalTitle = document.createElement("h3");
  searchModalTitle.className = "search-modal__title";
  searchModalTitle.textContent = "Search your favorite items!";

  let searchModalForm = document.createElement("form");

  let searchModalInput = document.createElement("input");
  searchModalInput.className = "search-input";
  searchModalInput.type = "text";
  searchModalInput.placeholder = "Search...";

  searchModalForm.append(searchModalInput);
  searchModalContainer.append(
    searchModalCloseButton,
    searchModalTitle,
    searchModalForm
  );
  searchModalWrapper.append(searchModalContainer);
  appEl.append(searchModalWrapper);
}
function renderSignInModal(appEl: Element) {
  let signInModalWrapper = document.createElement("div");
  signInModalWrapper.className = "sign-in-modal__wrapper";

  let SignInModalContainer = document.createElement("div");
  SignInModalContainer.className = "sign-in-modal__container";

  let signInModalCloseButton = document.createElement("button");
  signInModalCloseButton.className = "sign-in-modal__close-button";
  signInModalCloseButton.textContent = "x";
  signInModalCloseButton.addEventListener("click", () => {
    state.modals = "";
    render();
  });
  let sigInModalTitle = document.createElement("h3");
  sigInModalTitle.className = "sign-in-modal__title";
  sigInModalTitle.textContent = "Sign In";

  let searchModalForm = document.createElement("form");
  searchModalForm.className = "sign-in-modal__form";
  let emailLabel = document.createElement("label");
  emailLabel.className = "email__label";
  emailLabel.textContent = "Email";
  let searchModalInput = document.createElement("input");
  searchModalInput.className = "input";
  searchModalInput.type = "email";
  let passwordLabel = document.createElement("label");
  passwordLabel.className = "password__label";
  passwordLabel.textContent = "Password";
  let searchModalInput1 = document.createElement("input");
  searchModalInput1.className = "input";
  searchModalInput1.type = "password";

  let signInButton = document.createElement("button");
  signInButton.className = "sign-in-button";
  signInButton.textContent = "Sign In";

  searchModalForm.append(emailLabel, passwordLabel, signInButton);
  emailLabel.append(searchModalInput);
  passwordLabel.append(searchModalInput1);
  SignInModalContainer.append(
    signInModalCloseButton,
    sigInModalTitle,
    searchModalForm
  );
  signInModalWrapper.append(SignInModalContainer);
  appEl.append(signInModalWrapper);
}
// rendering the whole app
function render() {
  // finding the container, and clearing it
  let appEl = document.querySelector("#app");
  if (appEl === null) return;
  appEl.textContent = "";

  renderHeader(appEl);
  if (state.selectedItem === null && state.page === "home")
    renderHomePage(appEl);
  else renderProductDetailsPage(appEl);

  // if (state.page === "home") renderHomePage(appEl);
  if (state.selectedItem === null && state.page === "girls")
    renderGirlItemsSection(appEl);
  if (state.selectedItem === null && state.page === "guys")
    rendeGuyItemsSection(appEl);
  if (state.selectedItem === null && state.page === "sale")
    rendeInSaleSection(appEl);

  renderFooter(appEl);
  if (state.modals === "search") renderSearchModal(appEl);
  if (state.modals === "sign-in") renderSignInModal(appEl);
  // let mainEl = renderGirlsSection();
  // let footerEl = renderFooter();
  // let mainEl1 = renderProductDetailsPage();

  // if (state.selectedItem === null) {
  //   appEl.append(headerEl, mainEl, footerEl);
  // } else {
  //   // @ts-ignore
  //   appEl.append(headerEl, mainEl1, footerEl);
  // }
}
render();
getStoreItems();
window.state = state;
window.render = render;
