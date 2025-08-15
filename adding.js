const product = [
    {
      id: 0,
      image: 'images/paneerTikka.jpeg',
      title: 'Paneer Tikka',
      price: 230,
    },
    {
      id: 1,
      image: 'images/tacos.jpeg',
      title: 'Tacos',
      price: 170,
    },
    {
      id: 2,
      image: 'images/pizza.jpeg',
      title: 'Pizza',
      price: 130,
    },
    {
      id: 3,
      image: 'images/sandwich2.jpeg',
      title: 'Sandwitch',
      price: 50,
    },
    {
        id: 4,
        image: 'images/burger2.jpeg',
        title: 'Burger',
        price: 70,
      },
      {
        id: 5,
        image: 'images/salad2.jpeg',
        title: 'Salad',
        price: 80,
      },
      {
        id: 6,
        image: 'images/sushi.jpeg',
        title: 'Sushi',
        price: 200,
      },
      {
        id: 7,
        image: 'images/combo2.jpeg',
        title: 'Combo2',
        price: 200,
      },
      {
        id: 8,
        image: 'images/icecream.jpeg',
        title: 'ICE CREAM',
        price: 100,
      },
      {
        id: 9,
        image: 'images/combo3.jpeg',
        title: 'Combo3',
        price: 145,
      },
      {
        id: 10,
        image: 'images/combo1.jpeg',
        title: 'Combo1',
        price: 145,
      },
      {
        id: 10,
        image: 'images/tomatoSoup.jpeg',
        title: 'Tomato Soup',
        price: 80,
      }
  ];
  const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>₹${price}.00</h2>` +
          "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
      </div>`
    )
  }).join('')
  
  var cart = [];
  
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = " ₹" + 0 + ".00";
    }
    else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "₹" + total + ".00";
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>₹ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
        );
      }).join('');
    }
  }