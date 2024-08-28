let bagItems;
function addToBag(itemID) {
  bagItems.push(itemID);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  bagItemsCount();
}

function bagItemsCount() {
  let itemCount = document.querySelector(".bagItemsCount");
  if (bagItems.length > 0) {
    itemCount.style.visibility = "visible";
    itemCount.innerText = bagItems.length;
  } else {
    itemCount.style.visibility = "hidden";
  }
}

display();
onload();
function onload() {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  display();
  bagItemsCount();
}
function display() {
  let itemsCollection = document.querySelector(".itemsCollection");
  let itemHTML = "";
  if (!itemsCollection) {
    return;
  }

  items.forEach((item) => {
    itemHTML += `<div class="item">
                    <img class="itemImage" src="${item.image}" alt="Item Image Here" />
                    <div class="itemRating">${item.rating.stars}✮|${item.rating.count}</div>
                    <div class="itemCompany">${item.company}</div>
                    <div class="itemName">${item.item_name}</div>
                    <div class="itemPrice">
                        <span class="offerPrice">$${item.current_price}</span>
                        <span class="price">$${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="addItem" onclick="addToBag(${item.id});">Add To Bag</button>
                </div>`;
  });
  itemsCollection.innerHTML = itemHTML;
}
