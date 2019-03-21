'use strict';
var like_counter = 0;
var market_items = [];
var item1_image = document.getElementById('item1_img');
var item2_image = document.getElementById('item2_img');
var item3_image = document.getElementById('item3_img');
var item1_div = document.getElementById('item1');
var item2_div = document.getElementById('item2');
var item3_div = document.getElementById('item3');
var item1_tag = document.getElementById('item1_tag');
var item2_tag = document.getElementById('item2_tag');
var item3_tag = document.getElementById('item3_tag');
var item1;
var item2;
var item3;
var new_item1 = 0;
var new_item2 = 0;
var new_item3 = 0;
var clicked_list = [];

// =======================================
// Constructor
// =======================================

var Catalog_item = function(image_url, name, alt, item_info) {
    this.image_url = image_url;
    this.name = name;
    this.alt = alt;
    this.item_info = item_info;
    this.clicks = 0;
    this.times_displayed = 0;
    market_items.push(this);
};

// Instantiate Catalog_item objects
new Catalog_item('./img/bag.jpg', 'R2D2 Roller Bag', 'BEE-DOOP-boop-BEEP!', 'This bag beeps as it rolls behind you.');
new Catalog_item('./img/banana.jpg', 'Banana Slicer', 'Slippery on the floor', 'Perfect bananna slices for your cereal.');
new Catalog_item('./img/bathroom.jpg', 'Bathroom tablet stand', 'Dry you hands first', 'Hands free browsing in the bathroom.');
new Catalog_item('./img/boots.jpg', 'Sandle Wellies', 'Your toes will thank you', 'Best wet water boots around!');
new Catalog_item('./img/breakfast.jpg', 'All-in-One Cooker', 'Cook fast, eat faster', 'Ideal for the person on the go.');
new Catalog_item('./img/bubblegum.jpg', 'Meatball Shaped Bubblegum', 'Burp!  Yumm!', 'Nuff said!');
new Catalog_item('./img/chair.jpg', 'Reverse chair', 'Back pain guaranteed', 'For the person who cannot stay awake in class.');
new Catalog_item('./img/cthulhu.jpg', 'Cthulhu', 'Death by Monster god', 'Cthulhu must have a sacrifice!!!');
new Catalog_item('./img/dog-duck.jpg', 'Half dog - half duck!', 'Quark!  Quark!', 'Feathers or fur, still just as cute.');
new Catalog_item('./img/dragon.jpg', 'Dragon meat', 'Death by vengeful dragon', 'RAAAAAAAAAARRRRRHHH!  Smaug will feast on your bones....');
new Catalog_item('./img/pen.jpg', 'Upencils caps', 'Possible side efect: Ink poisoning', 'Handy for taking notes while eating.');
new Catalog_item('./img/pet-sweep.jpg', 'Pet foot sweepers', 'Put Fido to work!', 'Make your pet clean up all the mess they make.');
new Catalog_item('./img/scissors.jpg', 'Pizza scissors', 'Snip & chomp', 'Cut and serve your favorite meal in style.');
new Catalog_item('./img/shark.jpg', 'Fluffy Land Shark', 'Not a dream, you are being eaten', 'Comfortable and warm, not a bad way to go...');
new Catalog_item('./img/sweep.png', 'Baby Sweeper', 'Start them cleaning their room early!', 'Babies are messy, get a head start on cleaning up after them.');
new Catalog_item('./img/tauntaun.jpg', 'Tauntaun sleeping bag', 'Intestinal fortitude extra', 'Warm and cozy!  And you thought they smelled bad on the outside.');
new Catalog_item('./img/unicorn.jpg', 'Canned Unicorn', 'Crunchy bits are not horn - promise!', 'A rare and tasty delicacy!');
new Catalog_item('./img/usb.gif', 'Tentacle Drive', 'Collecting your data in multiple ways', 'Tickle your data free of any database.');
new Catalog_item('./img/water-can.jpg', 'Reverse water can', 'Wash your hands while you garden', 'Yes, the designer of this was stoned.');
new Catalog_item('./img/wine-glass.jpg', 'Drink-n-sniff glass', 'Best with red wine', 'Slosh and smell you favorite vintages with this exclusive gem.');

// ===================================
// functions
// ===================================

function handle_click_on_item1(event){
  console.log('clicked on #1: ' + item1);
  console.log('clicked on item: ' + market_items[item1].name);
  like_counter++;
  market_items[item1].clicks++;
  more_items();
}

function handle_click_on_item2(event){
  console.log('clicked on #2: ' + item2);
  console.log('clicked on item: ' + market_items[item2].name);
  like_counter++;
  market_items[item2].clicks++;
  more_items();
}

function handle_click_on_item3(event){
  console.log('clicked on #3: ' + item3);
  console.log('clicked on item: ' + market_items[item3].name);
  like_counter++;
  market_items[item3].clicks++;
  more_items();
}

function more_items() {
  localStorage.setItem('like_counter_in_ls', like_counter);
  var stringy_object = JSON.stringify(market_items);
  localStorage.setItem('market_items_array_in_ls', stringy_object);
  var i = 0;
  var j = 0;
// bad technique to repeat code 3 times, but I'm too tired to loop it
  while (i === 0) {
    new_item1 = Math.floor(Math.random() * market_items.length);
  while (j < clicked_list.length) {
  if (clicked_list[j] === new_item1) {
        new_item1 = Math.floor(Math.random() * market_items.length);
        j = clicked_list.length;
        i = 0;
      } else { j++ }
    }
    clicked_list.push(new_item1);
    i = 1;
    item1 = new_item1;
  }

  i = 0;
  while (i === 0) {
    new_item2 = Math.floor(Math.random() * market_items.length);
  while (j < clicked_list.length) {
  if (clicked_list[j] === new_item2) {
        new_item2 = Math.floor(Math.random() * market_items.length);
        j = clicked_list.length;
        i = 0;
      } else { j++ }
    }
    clicked_list.push(new_item2);
    i = 1;
    item2 = new_item2;
  }

  i = 0;
  while (i === 0) {
    new_item3 = Math.floor(Math.random() * market_items.length);
  while (j < clicked_list.length) {
  if (clicked_list[j] === new_item3) {
        new_item3 = Math.floor(Math.random() * market_items.length);
        j = clicked_list.length;
        i = 0;
      } else { j++ }
    }
    clicked_list.push(new_item3);
    i = 1;
    item3 = new_item3;
  }
// update item image, text, and alt on page
console.log("item1: " + item1);
console.log("item2: " + item2);
console.log("item3: " + item3);
  item1_image.src = market_items[item1].image_url;
  item2_image.src = market_items[item2].image_url;
  item3_image.src = market_items[item3].image_url;
  item1_image.alt = market_items[item1].alt;
  item2_image.alt = market_items[item2].alt;
  item3_image.alt = market_items[item3].alt;
  item1_tag.innerHTML = market_items[item1].item_info;
  item2_tag.innerHTML = market_items[item2].item_info;
  item3_tag.innerHTML = market_items[item3].item_info;
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
    item1_image.alt = "";
    item2_image.alt = "";
    item3_image.alt = "";
    item1_tag.innerHTML = "Thank you for your answers!";
    item2_tag.innerHTML = "You will receive a 50% off coupon for CodeFellows 501.";
    item3_tag.innerHTML = "Or a free lunch from Nicholas.";
    make_chart();
  }
}

function make_chart(){
  var selects_array = [];
  var survey_likes =[]; 
  for(var i = 0; i < market_items.length; i++){
    var item_name = market_items[i].name;
    selects_array.push(item_name);
  }
  for(var i = 0; i < market_items.length; i++){
    var item_clicks = market_items[i].clicks;
    survey_likes.push(item_clicks);
  }
  var ctx = document.getElementById('chart').getContext('2d');
  var data_chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: selects_array,
      datasets: [{
        label: 'Survey Likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: survey_likes
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// ===================================
// Initialize page & run code
// ===================================

var likes_in_ls = localStorage.getItem('like_counter_in_ls');
var market_items_in_ls = localStorage.getItem(market_items_array_in_ls);
var market_items = JSON.parse(market_items_in_ls);
if (likes_in_ls === 0) { 
  new_item1 = Math.floor(Math.random() * market_items.length);
  clicked_list.push(new_item1);
  new_item2 = Math.floor(Math.random() * market_items.length);
  clicked_list.push(new_item2);
  new_item3 = Math.floor(Math.random() * market_items.length);
  clicked_list.push(new_item3);
} else {
  like_counter = likes_in_ls;
  // add get clicklist from ls here
}
more_items();
item1_div.addEventListener('click', handle_click_on_item1);
item2_div.addEventListener('click', handle_click_on_item2);
item3_div.addEventListener('click', handle_click_on_item3);
