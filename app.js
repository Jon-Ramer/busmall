'use strict';
/*
counter for number of clicks
where are the images stored= variable with path to image
  ie: var cruisin = './images/cruisin-goat.jpg'
  Constructor function for goats
  Refactored to: array of goat objects
    - [{GOAT}, {GOAT}]
    - goat object:
    {image_url: 'cruisin.jpg,
    clicks: 0,
    name: 'cruisin around'
  }
-listen for an event('click')
  while(votes < 10)
  randomly select an image (two images)
    -random number generator- to pick the goat
    - change the DOM
  - increment the amount of clicks on the clicked goat
    - Store the index of the last goat we put on the page
Stretch: start with random goats
*/

/*
var likeCounter = 0;
var allGoats = [];
var leftImage = document.getElementById('left_goat_img');
var rightImage = document.getElementById('right_goat_img');
var leftGoatThatIsOnThePage;
var rightGoatThatIsOnThePage;

var GoatImage = function(url, name){
    this.imageUrl = url;
    this.name = name;
    this.clicks = 0;
    allGoats.push(this);
}
*/

var like_counter = 0;
var market_items = [];
var item1_image = document.getElementById('item1_img');
var item2_image = document.getElementById('item2_img');
var item3_image = document.getElementById('item3_img');

// =======================================
// Constructor
// =======================================

var Catalog_item = function(image_url, name, item_info) {
    this.image_url = image_url;
    this.name = name;
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
new Catalog_item('./img/sweater-goat.jpg', 'Cthulhu');
// new Catalog_item('./img/')

// ===================================
// Initialize the Page
// ===================================

var leftGoatDiv = document.getElementById('left_goat');
var rightGoatDiv = document.getElementById('right_goat');

//    randomly select an image(two images)
//    - random number generator - to pick the goat
//    - change the DOM
//    - Store the index of the last goat we put on the page

function handleClickOnLeftGoat(event){
  console.log('clicked on left goat');
  //increment total clicks
  likeCounter++;
  // increment left goat's clicks
  leftGoatThatIsOnThePage.clicks++;

  // pick a new 2 goats,
  var leftGoatIndex = Math.floor(Math.random() * allGoats.length);
  var rightGoatIndex =Math.floor( Math.random() * allGoats.length );

  leftGoatThatIsOnThePage = allGoats[leftGoatIndex];
  rightGoatThatIsOnThePage = allGoats[rightGoatIndex];

  // and put them on the page
  leftImage.src = leftGoatThatIsOnThePage.imageUrl;
  rightImage.src = rightGoatThatIsOnThePage.imageUrl;

  // stop after 25 clicks
  if(like_counter > 25){
    // stop listening for clicks
    leftGoatDiv.removeEventListener('click', handleClickOnLeftGoat);
    rightGoatDiv.removeEventListener('click', handleClickOnRightGoat);
  }
}

function handleClickOnRightGoat(event) {
    // increment total clicks
    like_counter++;
    // increment right goat's clicks
    rightGoatThatIsOnThePage.clicks++;

//   pick a new 2 goats,
//   var leftGoatIndex = Math.floor(Math.random() * allGoats.length);
//   var rightGoatIndex = Math.floor(Math.random() * allGoats.length);

    var item1_index = Math.floor(Math.random() * allGoats.length);
    var item2_index = Math.floor(Math.random() * allGoats.length);
    var item3_index = Math.floor(Math.random() * allGoats.length);

  leftGoatThatIsOnThePage = allGoats[leftGoatIndex];
  rightGoatThatIsOnThePage = allGoats[rightGoatIndex];

  // and put them on the page
  leftImage.src = leftGoatThatIsOnThePage.imageUrl;
  rightImage.src = rightGoatThatIsOnThePage.imageUrl;

  // stop after 10 clicks
  if (likeCounter > 9) {
    // stop listening for clicks on the left and right goat
    leftGoatDiv.removeEventListener('click', handleClickOnLeftGoat);
    rightGoatDiv.removeEventListener('click', handleClickOnRightGoat);
  }
}

leftGoatDiv.addEventListener('click', handleClickOnLeftGoat);
rightGoatDiv.addEventListener('click', handleClickOnRightGoat);

// When I first load the page, I need to know which goat is left and right, sso they can track their clicks in the javascript
leftGoatThatIsOnThePage = allGoats[6];
rightGoatThatIsOnThePage = allGoats[0];