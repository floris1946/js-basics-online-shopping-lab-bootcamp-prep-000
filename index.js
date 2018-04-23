var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*
var cart_item_pair = {};
function addToCart(item) {
  // write your code here
  //cart.item = getRandomInt(101);
	// cart[item] = `itemPrice: ` + getRandomInt(101);
	var itemName = item;
	var itemPrice = getRandomInt(101);
	//var cart_item_pair = { [itemName]: [itemPrice] }
	cart.push({ [itemName]: itemPrice })
	return `${item} has been added to your cart.`
}
*/


addToCart('daikon')
addToCart('gameboy')

//console.log(cart)
console.log(Object.keys(getCart()[0]))
console.log(getCart()[0])
console.log(getCart()[0].itemName)

function viewCart() {
 /*// for (i=0; i<cart.length; i++) {
   // let cart_item_pair = cart[i];
    //console.log(cart_item_pair[key])
    //console.log(cart[i]);
    //console.log(Object.getOwnPropertyNames(cart[i]));
  //for (let item in cart) {
    //console.log(item);
  for (var i = 0; i<cart.length; i++) {
    itemName = Object.keys(cart[i]);*/
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      var single_product = console.log(item);
      var single_product_price = console.log(cart[i][item]);
      items.push(`${single_product} at $${single_product_price}`)
    }
  return `In your cart, you have ${items}`; // use .join method!
  }
  
  
  /*console.log(itemNames)
  for (var j = 0; j < itemNames.length; j++) {
    var itemPrices = Object.keys(itemNames)
  }
  */
}


//viewCart(cart)

//console.log(cart)
//console.log(itemNames)



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


/*

  it("properly structures the cart item as object with a key of `itemName` and the corresponding value { itemName: itemName } format", function() {
    addToCart("daikon");

    let itemName = getCart()[0].itemName;

    expect(itemName).toEqual("daikon");
  });

  it("sets the price (integer between 1 and 100) on the cart object using the key `price`", function() {
    addToCart("eggplant");

    let itemPrice = getCart()[0].itemPrice;

    expect(itemPrice).toBeLessThanOrEqualTo(100)
                     .toBeGreaterThanOrEqualTo(1);
  });

  it("chooses the price at random", function() {
    // Note: this test has a 1-in-10,000 chance of a false negative.
    addToCart("figs");
    addToCart("grapes");
    addToCart("halloumi");

    let pricesArray = getCart().map(cartItem => cartItem.itemPrice);
    let areAnyPricesEqual = pricesArray[0] === pricesArray[1] && pricesArray[1] === pricesArray[2];

    expect(areAnyPricesEqual).toBe(false);
  });

  it("returns a message indicating that the item has been added", function() {
    expect(addToCart("ice cream")).toEqual("ice cream has been added to your cart.");

    expect(addToCart("juice")).toEqual("juice has been added to your cart.");
  });
});

describe("viewCart()", function() {
  it("prints 'Your shopping cart is empty.' if the cart is empty", function() {
    expect(viewCart()).toEqual("Your shopping cart is empty.")
  });

  it("correctly prints a one-item cart", function() {
    addToCart("lemons");
    expect(viewCart()).toEqual(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
  });

  it("correctly prints a two-item cart", function() {
    addToCart("mango");
    addToCart("nuts");

    expect(viewCart()).toEqual(
      `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    );
  });

  it("correctly prints a three-or-more-item cart", function() {
    addToCart("orange");
    addToCart("pear");
    addToCart("quince");

    ;

    expect(viewCart()).toEqual(
      `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
    );
  });
});

describe("total()", function() {
  it("adds up the price of all items in the cart", function() {
    addToCart("sorghum");
    addToCart("tarragon");

    const sorghumCost = getCart()[0].itemPrice;
    const tarragonCost = getCart()[1].itemPrice;

    let totalCost = sorghumCost + tarragonCost;

    expect(total()).toBe(totalCost);

    addToCart("urchin");

    const urchinCost = getCart()[2].itemPrice;

    totalCost += urchinCost;

    expect(total()).toBe(totalCost);
  });
});

describe("removeFromCart()", function() {
  it("removes the specified item from the cart", function() {
    addToCart("vanilla");
    addToCart("watermelon");
    addToCart("yams");

    removeFromCart("watermelon");

    const firstItemName = getCart()[0].itemName;
    const secondItemName = getCart()[1].itemName;

    expect(firstItemName).toEqual("vanilla");
    expect(secondItemName).toEqual("yams");

    removeFromCart("yams");

    expect(getCart().length).toEqual(1);
  });

  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    // Repeat item name from previous test to prevent hard-coding.
    expect(removeFromCart("yams")).toEqual("That item is not in your cart.");
  });
});

describe("placeOrder()", function() {
  it("doesn't place the order if a credit card number is not provided", function() {
    
    expect(placeOrder()).toEqual("Sorry, we don't have a credit card on file for you.");
  });

  it("places an order when a credit card number is provided", function() {
    addToCart("zucchini");

    const cartTotal = total();
    const cardNumber = Math.floor(Math.random() * 100000000);

    

    expect(placeOrder(cardNumber)).toEqual(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  });

  it("empties the cart", function() {
    addToCart("apples");

    placeOrder(12345678);

    expect(getCart()).toEqual([]);
  });
});
*/