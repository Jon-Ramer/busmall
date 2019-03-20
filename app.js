'use strict';
var like_counter = 0;
var market_items = [];
var item1_image = document.getElementById('item1_img');
var item2_image = document.getElementById('item2_img');
var item3_image = document.getElementById('item3_img');
var item1 = 7;
var item2 = 9;
var item3 = 13;
var clicked_list = [];

// =======================================
// Constructor
// =======================================

var Catalog_item = function(image_url, name, alt, item_info) {
    this.image_url = image_url;
    this.name = name;
//    this.alt = alt;
    this.item_info = item_info;
    this.clicks = 0;
    this.times_displayed = 0;
    market_items.push(this);
};

// Instantiate Catalog_item objects
new Catalog_item('./img/bag.jpg', 'R2D2 Roller Bag');
new Catalog_item('./img/banana.jpg', 'Banana Slicer');
new Catalog_item('./img/bathroom.jpg', 'Bathroom tablet stand');
new Catalog_item('./img/boots.jpg', 'Sandle Wellies');
new Catalog_item('./img/breakfast.jpg', 'All-in-One Cooker');
new Catalog_item('./img/bubblegum.jpg', 'Meatball Shaped Bubblegum');
new Catalog_item('./img/chair.jpg', 'Reverse chair');
new Catalog_item('./img/cthulhu.jpg', 'Cthulhu');
new Catalog_item('./img/dog-duck.jpg', 'Half dog - half duck!');
new Catalog_item('./img/dragon.jpg', 'Dragon meat');
new Catalog_item('./img/pen.jpg', 'Upencils caps');
new Catalog_item('./img/pet-sweep.jpg', 'Pet foot sweepers');
new Catalog_item('./img/scissors.jpg', 'Pizza scissors');
new Catalog_item('./img/shark.jpg', 'Fluffy Land Shark');
new Catalog_item('./img/sweep.png', 'Baby Sweeper');
new Catalog_item('./img/tauntaun.jpg', 'Tauntaun sleeping bag');
new Catalog_item('./img/unicorn.jpg', 'Canned Unicorn');
new Catalog_item('./img/usb.gif', 'Tentacle Drive');
new Catalog_item('./img/water-can.jpg', 'Reverse water can');
new Catalog_item('./img/wine-glass.jpg', 'Drink-n-sniff glass');

// ===================================
// Initialize the Page
// ===================================

var item1_div = document.getElementById('item1');
var item2_div = document.getElementById('item2');
var item3_div = document.getElementById('item3');
var wrap_up_div = document.getElementById('wrap-up');

function handle_click_on_item1(event){
  console.log('clicked on #1: ' + item1);
  console.log('clicked on item: ' + market_items[item1].name);
    // increment total clicks
    like_counter++;
    // increment item1 clicks
    market_items[item1].clicks++;
    // pick 3 new items
    more_items();
}

function handle_click_on_item2(event){
  console.log('clicked on #2: ' + item2);
  console.log('clicked on item: ' + market_items[item2].name);
  // increment total clicks
  like_counter++;
  // increment item1 clicks
  market_items[item2].clicks++;
  // pick 3 new items
  more_items();
}

function handle_click_on_item3(event){
  console.log('clicked on #3: ' + item3);
  console.log('clicked on item: ' + market_items[item3].name);
  // increment total clicks
  like_counter++;
  // increment item1 clicks
  market_items[item3].clicks++;
  // pick 3 new items
  more_items();
}

function more_items() {
  var i = 0;
  while (i = 0) {
    var new_item = Math.floor(Math.random() * market_items.length);
    for (var j = 0; j < clicked_list.length; j++) {
      if (clicked_list[j] === new_item) {
        new_item = Math.floor(Math.random() * market_items.length);
        j = clicked_list.length;
        i = 0;
      }
    }
    clicked_list.push(new_item);
    i = 1;
  }

  var new_item1 = Math.floor(Math.random() * market_items.length);
  var new_item2 = Math.floor(Math.random() * market_items.length);
  var new_item3 = Math.floor(Math.random() * market_items.length);
  // put items on page
  item1 = new_item1;
  item2 = new_item2;
  item3 = new_item3;
  item1_image.src = market_items[item1].image_url;
  item2_image.src = market_items[item2].image_url;
  item3_image.src = market_items[item3].image_url;
  // stop listening for clicks after 25 clicks
  if (like_counter > 24) {
    item1_div.removeEventListener('click', handle_click_on_item1);
    item2_div.removeEventListener('click', handle_click_on_item2);
    item3_div.removeEventListener('click', handle_click_on_item3);

  // AFTER 25 CLICKS

    console.log("total clicks: " + like_counter);
    for (var i=0; i < market_items.length; i++) {
      console.log("item clicks: " + i + " : " + market_items[i].clicks);
    }
    item1_image.src = "";
    item2_image.src = "";
    item3_image.src = "";
  }
}

item1_div.addEventListener('click', handle_click_on_item1);
item2_div.addEventListener('click', handle_click_on_item2);
item3_div.addEventListener('click', handle_click_on_item3);