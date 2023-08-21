
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-1.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
import menu1 from "./assets/images/menu1.jpg"
import menu2 from "./assets/images/menu2.jpg"
import menu3 from "./assets/images/menu3.jpg"
import menu4 from "./assets/images/menu4.jpg"
import menu5 from "./assets/images/menu5.jpg"
import favourite2 from "./assets/images/favourite2.jpg"
import favourite3 from "./assets/images/favourite3.jpg"
const menu = [
  {
    img: menu1,
    desc: "Meatless Monday",
    price:"15.99"
  },
  {
    img: menu2,
    desc: "Taco Tuesday",
    price:"12.99"
  },
  {
    img: menu3,
    desc: "Wellness Wednesday",
    price:"13.99"
  },
  {
    img: menu4,
    desc: "Thirsty Thursday",
    price:"17.99"
  },
  {
    img: menu5,
    desc: "Fit Friday",
    price:"13.45"
  },

];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,
    desc: "The Crafty Burger",
    price:"5.99"
  },
  {
    img: favourite2,
    desc: "The Artisan Coffee",
    price:"5"
  },
  {
    img: favourite3,
    desc: "The Creative Salad",
    price:"6.99"
  },
];
const review = [
  {
    img: reviewImage1,
    desc: "I had a wonderful experience at Vega, the best vegetarian restaurant in New York. The food was amazing, especially the pesto artichoke pizza and the garlic knots. The staff was friendly and attentive, and the atmosphere was cozy and relaxing. I highly recommend Vega to anyone who loves delicious and healthy food.",
    person:"Anna, New York"
  },
  {
    img: reviewImage2,
    desc: "Vega is my favorite place to go for lunch with my colleagues. The menu is always fresh and varied, and the portions are generous and satisfying. The service is fast and efficient, and the prices are reasonable. I love the Thai-style dishes, they are so flavorful and spicy. Vega is a great choice for anyone who wants to enjoy a quality meal in a pleasant environment.",
    person:"David, New York"
  },
  {
    img: reviewImage3,
    desc: "If you are looking for a great vegetarian restaurant in New York, look no further than Vega. The food is fantastic, the service is excellent, and the ambiance is charming. I have been to Vega several times, and I always leave happy and impressed. The mushroom spinach quiche is my favorite dish, it is so creamy and rich. Vega is a must-try for anyone who appreciates good food.",
    person:" Lisa, New York"
  },
];
const blog = [
  {
    img: blogImage1,
    title: "How To Eat Healthy And Delicious Meals At Vega - The Best Fitness Restaurant In New York",
    desc:"In this blog post, you can introduce your fitness restaurant, explain what makes it unique and different from other restaurants, and share some of the benefits of eating healthy and delicious meals at Vega. "
  },
  {
    img: blogImage2,
    title: "How To Eat Healthy And Delicious Meals At Vega - The Best Fitness Restaurant In New York",
    desc:"In this blog post, you can introduce your fitness restaurant, explain what makes it unique and different from other restaurants, and share some of the benefits of eating healthy and delicious meals at Vega."
  },
  {
    img: blogImage3,
    title: "7 Reasons Why You Should Join Our Vega Fitness Club And Enjoy Exclusive Benefits And Rewards",
    desc:"In this blog post, you can promote your fitness club membership program and highlight some of the benefits and rewards that your members can enjoy. For example, you can mention that your members can get discounts on their orders, free delivery service, "
  },
];
export { menu, cart, product, review, blog };