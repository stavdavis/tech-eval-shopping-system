// Shopping System
// +1. Display the array below in list in html with all appropriate information provided (NOTE MUST BE DONE DYNAMICALLY )
// +2. Style each item in list
// 3. Style each list to be responsive as the screen sizes
// +4. Add a button to each item for add to cart
// +5. Add logic to take the item clicked on and add to cart
// +6. If item is in cart switch the button to say remove from cart
// +7. Add logic to take the item out of the cart
// 8. Add area with 3 filter options (Laptops , keyboards & mouses)
// 9. Add logic when filter is clicked to filter just those options ( EX 2 options click show all of those items)
// 10. Style the filter to show a state of selected and not selected.
// 11. Add View Cart Button top right
// 12. When View Cart is click stop showing the list of products and only show the items in the cart
// 13. Add button to back to the previous state and show the list

var cart = []
var item = [{
  'name': 'MacBook Pro',
  'picture': 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKPRO/MACBOOKPRO?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=jBFkr3',
  'price': 2500,
  'category': 'laptop'
}, {
  'name': 'Aleinware',
  'picture': 'http://www.laptopmag.com/images/uploads/2670/g/alienm17xr3_9524_g1.jpg',
  'price': 3150,
  'category': 'laptop'
}, {
  'name': 'Dell',
  'picture': 'http://i.ebayimg.com/00/z/rzYAAOxyZwpSVl7u/$(KGrHqRHJ!4FJR,Zm1BcBSVl7uWVcQ~~_32.JPG',
  'price': 1500,
  'category': 'laptop'
}, {
  'name': 'Acer',
  'picture': 'http://static.acer.com/up/Resource/Acer/Laptops/Aspire_E5/Images/20150112/AspireE-AspireE15-E5-532-E5-573-E5-574-E5-522-E5-552-gray-glare-preview.png',
  'price': 1100,
  'category': 'laptop'
}, {
  'name': 'Corsair',
  'picture': 'http://www.corsair.com/~/media/corsair/product%20photos/keyboards/strafe/large/strafe_na_mx_red_01.png',
  'price': 175,
  'category': 'keyboard'
}, {
  'name': 'Razerzone',
  'picture': 'http://assets.razerzone.com/eeimages/products/76/razer-tron-keyboard-gallery-2.png',
  'price': 150,
  'category': 'keyboard'
}, {
  'name': 'Mac Pad',
  'picture': 'https://d3nevzfk7ii3be.cloudfront.net/igi/YImFsxtyZH5jNLCo.medium',
  'price': 215,
  'category': 'mouse'
}, {
  'name': 'Track Pad',
  'picture': 'http://thenextweb.com/wp-content/blogs.dir/1/files/2012/12/png-1.png',
  'price': 100,
  'category': 'mouse'
}]
console.log(item, 'item')
console.log(cart, 'cart')



function renderProductList() {
  for (i = 0; i < item.length; i++) {
    $('.main-list').append(
      `<li class="product">Product: ${item[i].name}<br>
          <img src="${item[i].picture}" alt="Image of a ${item[i].name}" class="product-image"><br>
          Price: $${item[i].price}<br>
          Category: ${item[i].category}<br>
          <button type='submit' class="add-to-cart-button-${i}">Add to cart ${i}</button>
      </li>`
    )
  }
}

function listenForCartAdd(buttonIndex) {
  //need event delegation here, because the button is not in the originally generated html file
  $('.main-list').on('click', `.add-to-cart-button-${buttonIndex}`, event => {
    event.preventDefault();
    //change the text of the button AND add a class to specify it is in the cart (used by cart function)
    $(`.add-to-cart-button-${buttonIndex}`).text('Remove from cart').attr('class', `item-in-cart-${buttonIndex}`);
    cart.push(item[buttonIndex]);
    $('.current-cart').html(`Current cart: ${cartSum()}<br># of items in cart: ${cart.length}`);
  });
}

function listenForCartRemove(buttonIndex) {
  //need event delegation here, because the button is not in the originally generated html file
  $('.main-list').on('click', `.item-in-cart-${buttonIndex}`, event => {
    event.preventDefault();
    //change the text of the button AND toggle a class to specify it is in the cart (used by cart function)
    $(`.item-in-cart-${buttonIndex}`).html('Add to cart').attr('class', `add-to-cart-button-${buttonIndex}`);
    removeFromCart(item[buttonIndex].price);
    $('.current-cart').html(`Current cart: ${cartSum()}<br># of items in cart: ${cart.length}`);
  });
}

function cartSum() {
  sum = 0;
  for (let k = 0; k < cart.length; k++) {
    sum += cart[k].price;
  }
  return sum;
}

function removeFromCart(inputPrice) {
  cart = cart.filter(function(item) {
    return (item.price != inputPrice);
  })
}

// render the initial list:
renderProductList();
// listen for a click on each button
for (j = 0; j < item.length; j++) { listenForCartAdd(j); }
for (j = 0; j < item.length; j++) { listenForCartRemove(j); }

