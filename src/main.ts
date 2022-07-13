import "./style.css";

// type Store = {
//   id: number;
//   type: string;
//   name: string;
//   image: string;
//   price: number;
//   discountedPrice?: number;
//   dateEntered: string;
//   stock: number;
// };
// type State = {
//   store: Store[];
// };

// let state: State = {
//   store: [
//     {
//       id: 1,
//       type: "Guys",
//       name: "Crewneck T-Shirt 3-Pack",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
//       price: 40,
//       discountedPrice: 21.99,
//       dateEntered: "2021/08/10",
//       stock: 10,
//     },
//     {
//       id: 2,
//       type: "Girls",
//       name: "Smocked Tiered Mini Dress",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_359-1220-1911-805_prod1",
//       price: 29,
//       dateEntered: "2021/07/10",
//       stock: 5,
//     },
//     {
//       id: 3,
//       type: "Girls",
//       name: "Gilly Hicks Cozy Joggers",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_346-1252-0485-116_prod1",
//       price: 27,
//       dateEntered: "2021/05/06",
//       stock: 15,
//     },
//     {
//       id: 4,
//       type: "Guys",
//       name: "Gilly Hicks Go Energize 2-in-1 Running Short",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_346-1614-0521-900_prod1",
//       price: 29,
//       dateEntered: "2021/07/10",
//       stock: 20,
//     },
//     {
//       id: 5,
//       type: "Guys",
//       name: "Gilly Hicks Woven Boxer",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_309-1408-0413-136_prod1",
//       price: 12,
//       dateEntered: "2021/07/10",
//       stock: 2,
//     },
//     {
//       id: 6,
//       type: "Guys",
//       name: "Gilly Hicks Smiley Socks 2-Pack",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_354-1020-0010-900_prod1",
//       price: 14,
//       dateEntered: "2021/06/11",
//       stock: 1,
//     },
//     {
//       id: 7,
//       type: "Guys",
//       name: "Stretch Poplin Slim Fit shirt",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_325-1072-0609-214_prod1",
//       price: 29,
//       discountedPrice: 20.3,
//       dateEntered: "2020/02/10",
//       stock: 13,
//     },
//     {
//       id: 8,
//       type: "Guys",
//       name: "Must-Have Crewneck T-Shirt 5-Pack",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_324-1072-0132-108_prod1",
//       price: 55,
//       discountedPrice: 34.99,
//       dateEntered: "2021/08/10",
//       stock: 12,
//     },
//     {
//       id: 9,
//       type: "Guys",
//       name: "Print Logo Graphic Tee",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_323-1957-2978-908_prod1",
//       price: 25,
//       discountedPrice: 11.99,
//       dateEntered: "2021/04/10",
//       stock: 17,
//     },
//     {
//       id: 10,
//       type: "Girls",
//       name: "Ultra High-Rise Dad Sweatpants",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_347-1074-0669-100_prod1",
//       price: 35,
//       discountedPrice: 14.99,
//       dateEntered: "2021/08/01",
//       stock: 6,
//     },
//     {
//       id: 11,
//       type: "Girls",
//       name: "Crop Oversized Hoodie",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_352-3541-0604-100_prod1",
//       price: 35,
//       discountedPrice: 12.99,
//       dateEntered: "2021/08/01",
//       stock: 8,
//     },
//     {
//       id: 12,
//       type: "Girls",
//       name: "Gilly Hicks Socks 2-Pack",
//       image:
//         "https://img.hollisterco.com/is/image/anf/KIC_354-1013-0002-100_prod1",
//       price: 14,
//       discountedPrice: 5.99,
//       dateEntered: "2021/07/10",
//       stock: 10,
//     },
//   ],
// };
// function renderHeader() {
//   let headerEl = document.createElement("header");
//   headerEl.className = "header";
//   //Header left
//   let leftDivEl = document.createElement("div");
//   leftDivEl.className = "header__left";

//   let logoEl = document.createElement("h1");
//   logoEl.className = "logo";
//   logoEl.textContent = "Hollixton";

//   let leftNavE = document.createElement("nav");

//   let leftList = document.createElement("ul");
//   leftList.className = "left__nav-list";

//   let leftLiItem = document.createElement("li");
//   leftLiItem.className = "nav-list__item";
//   leftLiItem.textContent = "Girls";

//   let leftLiItem1 = document.createElement("li");
//   leftLiItem1.className = "nav-list__item";
//   leftLiItem1.textContent = "Guys";

//   let leftLiItem2 = document.createElement("li");
//   leftLiItem2.className = "nav-list__item";
//   leftLiItem2.textContent = "Sale";

//   leftDivEl.append(logoEl, leftNavE);
//   leftNavE.append(leftList);
//   leftList.append(leftLiItem, leftLiItem1, leftLiItem2);
//   //Header right
//   let rightDivEl = document.createElement("div");
//   rightDivEl.className = "header__right";

//   let rightNavE = document.createElement("nav");

//   let rightList = document.createElement("ul");
//   rightList.className = "right__nav-list";

//   let rightLiItem = document.createElement("li");
//   rightLiItem.className = "nav-list__item";
//   rightLiItem.textContent = "🔍";

//   let rightLiItem1 = document.createElement("li");
//   rightLiItem1.className = "nav-list__item";
//   rightLiItem1.textContent = "👤";

//   let rightLiItem2 = document.createElement("li");
//   rightLiItem2.className = "nav-list__item";
//   rightLiItem2.textContent = "🛒";

//   rightNavE.append(rightList);
//   rightList.append(rightLiItem, rightLiItem1, rightLiItem2);
//   rightDivEl.append(rightNavE);
//   headerEl.append(leftDivEl, rightDivEl);
//   return headerEl;
// }
// function renderMain() {
//   let mainEl = document.createElement("main");
//   mainEl.className = "main";

//   let titleEl = document.createElement("h2");
//   titleEl.className = "title";
//   titleEl.textContent = "Home";

//   let shopingItemsList = document.createElement("ul");
//   shopingItemsList.className = "shoping-items";

//   for (let item of state.store) {
//     renderShoppingItems(item, shopingItemsList);
//   }
//   mainEl.append(titleEl, shopingItemsList);
//   return mainEl;
// }
// function renderShoppingItems(item: Store, shopingItemsList: HTMLElement) {
//   let shopingItemEl = document.createElement("li");
//   shopingItemEl.className = "shopping-item";

//   let shopingItemImageEl = document.createElement("img");
//   shopingItemImageEl.className = "shoping-item__img";
//   shopingItemImageEl.src = item.image;
//   shopingItemImageEl.alt = item.name;

//   let shopingItemNameEl = document.createElement("h3");
//   shopingItemNameEl.className = "item-name";
//   shopingItemNameEl.textContent = item.name;
//   // <p class="item-price">
//   // <span class="previous-item-price">£40</span>
//   // <span class="discounted-item-price">£21.99</span>
//   // </p>
//   let shopingItemPriceEl = document.createElement("p");
//   shopingItemPriceEl.className = "item-price";
//   if (item.discountedPrice) {
//     let shopingItemPriceSpanEl = document.createElement("span");
//     shopingItemPriceSpanEl.className = "previous-item-price";
//     shopingItemPriceSpanEl.textContent = "£" + item.price;

//     let shopingItemPriceSpanEl1 = document.createElement("span");
//     shopingItemPriceSpanEl1.className = "discounted-item-price";
//     shopingItemPriceSpanEl1.textContent = "£" + item.discountedPrice;
//     shopingItemPriceEl.append(shopingItemPriceSpanEl, shopingItemPriceSpanEl1);
//   } else {
//     let shopingItemPriceSpanEl = document.createElement("span");
//     shopingItemPriceSpanEl.className = "item-price";
//     shopingItemPriceSpanEl.textContent = "£" + item.price;
//     shopingItemPriceEl.append(shopingItemPriceSpanEl);
//   }

//   shopingItemEl.append(
//     shopingItemImageEl,
//     shopingItemNameEl,
//     shopingItemPriceEl
//   );
//   shopingItemsList.append(shopingItemEl);
// }
// function renderFooter() {
//   let footerEl = document.createElement("footer");
//   footerEl.className = "footer";

//   let footerLogoEl = document.createElement("h3");
//   footerLogoEl.className = "footer__logo";

//   footerLogoEl.textContent = "Hollixton";
//   let footerUkEl = document.createElement("p");
//   footerUkEl.className = "uk";

//   let footerUkFlagEl = document.createElement("img");
//   footerUkFlagEl.className = "uk-flag";
//   footerUkFlagEl.src = "./330425 (1).png";
//   footerUkFlagEl.alt = "uk flag";

//   let footerUkTextEl = document.createElement("span");
//   footerUkTextEl.textContent = "United Kingdom";
//   footerUkEl.append(footerUkFlagEl, footerUkTextEl);
//   footerEl.append(footerLogoEl, footerUkEl);

//   return footerEl;
// }
// function render() {
//   // finding the container, and clearing it
//   let appEl = document.querySelector("#app");
//   if (appEl === null) return;
//   appEl.textContent = "";

//   let headerEl = renderHeader();

//   let mainEl = renderMain();

//   let footerEl = renderFooter();

//   appEl.append(headerEl, mainEl, footerEl);
// }
// render();
