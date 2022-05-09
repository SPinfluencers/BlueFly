// import { abovefotter } from "../components/abovefotter.js";
// document.getElementById("above_fotter").innerHTML = abovefotter();

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


var products = JSON.parse(localStorage.getItem("product"))
var cart = JSON.parse(localStorage.getItem("cart1"))||[];

var box1 = document.createElement("div");
var image = document.createElement("img");
image.src = products.image_url;
box1.append(image);
var box2 = document.createElement("div");
var Proname = document.createElement("h1");
Proname.innerText = products.proName;
var detail = document.createElement("h3");
detail.innerText = products.detail
detail.style.color="grey"
var pri = document.createElement("h3");
pri.innerText = "$" + " "+ products.price;
var strpri = document.createElement("h3");
strpri.setAttribute("id","strikeprice")
strpri.innerText = products.strike;
strpri.style.color="grey"
var offer = document.createElement("h3");
offer.innerText = products.offer;
offer.style.color="lightgreen"
var dis = document.createElement("p");
dis.innerText = "FREE SHIPPING ON ORDERS OVER $99"
dis.style.fontSize="16"
var btn = document.createElement("button");

btn.innerText = "ADD TO CART";
btn.setAttribute("class","btn");
btn.addEventListener("click",function(){
    addToCart(products)
})
box2.append(Proname,detail,pri,strpri,offer,dis,btn);

document.getElementById("products").append(box1,box2);

let addToCart = (x)=>{
    // console.log(products)
    // window.location.href="cart.html";
    cart.push(x)
    localStorage.setItem("cart1",JSON.stringify(cart));
    // console.log(cart);
    alert("Item Added To Cart")
}


var like_pro = [{imageUrl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1467633_large.jpg?v=1636498337",
                name:"GUCCI GUCCI SANDALS WOMEN PATENT LEATHER BLACK",
                price: "$" + 997.00},
                {imageUrl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160253051_RLLZ_2_large.jpg?v=1651156470",
                name:"BOTTEGA VENETA BOTTEGA VENETA PADDED CASSETTE LEATHER SHOULDER BAG",
                price: "$" + 3079.99},
                {imageUrl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/WR1409_large.jpg?v=1651391227",
                name:"DIORDIOR PILOT SUNGLASSES MONSIEUR 1 XWY1I GOLD/BLACK/HAVANA 63MM",
                price: "$" + 495.00},
                {imageUrl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010547627_RLLZ_2_large.jpg?v=1651036108",
                name:"KENZO KENZO FELPA LOGO HOODIE",
                price: "$" + 218.99},
                {imageUrl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/75210-75212_b_ORG_zpsfd4prp8u_large.jpg?v=1650449297",
                name:"ROMEO GIGLI ROMEO GIGLI C885/35S NERO BLACK LEATHER ADJUSTABLE MENS BELT",
                price: "$" + 19.99}]



like_pro.map(({imageUrl,name,price})=>{
    var box = document.createElement("div");
    var image = document.createElement("img");
    image.src = imageUrl;
    var dis = document.createElement("p");
    dis.innerText = name;
    var rate = document.createElement("p");
    rate.innerText = price;
    box.append(image,dis,rate);
    document.getElementById("like_pro").append(box);

})

