let navbar = ()=>{
    return `<div id="navtop">
    <div id="blank"></div>
    <div id="logo"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" alt=""></div>
    <div id="third">
        <div><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="">  <p>search</p> </div>
        <div id="user"><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male4-512.png" alt=""></div>
        <div id="bag"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkqlJUQ75M9LTtaLLpD02FTnEO7RqUxxJu_Qx0jY7fmJZExIRM5vch5sQ_Gvpkp1lIA4&usqp=CAU" alt=""></div>
        <div id="cart" class="cart">
            <h2>Cart</h2>
            <span id="close-cart" class="close">&times;</span>
            <div style="scroll-behavior: smooth;" id="small-container"></div>
            <button style="" class="check-out"><a href="information.html">CHECK OUT</a></button>
            <button style="" class="cart-out"><a href="cart.html">CART</a></button>
           </div>
        </div>
    </div>
</div>
<div id="navbottom">
    <div> <a href="shoes.html">shoes</a></div>
    <div><a href="ha.html">handbags $ accessories</a></div>
    <div><a href="designers.html">designers</a></div>
    <div><a href="women.html">women</a></div>
    <div><a href="men.html">men</a></div>
    <div><a href="sunglasses.html">sunglasses</a></div>
    <div><a href="jw.html">jewelry & watches</a></div>
    <div><a href="under.html">under $ 50</a></div>
    <div><a href="beauty.html">beauty</a></div>
    <div><a href="clearance.html">clearance</a></div>
</div>`
    
}

let append1 = () =>{

   
   // let leftCart = JSON.parse(localStorage.getItem("cart1"))
   
/* <div class="cart-content">
<div class="cart-box">
                   <img src="https://bit.ly/3w7OzLA" class="cart-img">
                   <div class="detail-box">
                      <div class="cart-product-title">BALENCIAGA</div>
                      <div class="cart-price">$25</div>
                      <input type="number" value="1" class="cart-quantity">
                      </div> 
                      <!-- Remove Cart-->
                   <span class="cart-remove"><i class="fa-solid fa-trash"></i></span>
                </div> */
                
                leftCart.map(function(ele) {
   // let div1 = document.createElement("div")
   // let div2 = document.createElement("div")
   // let div3 = document.createElement("div")
   
   // div2.setAttribute("class", "cart-box")
   
   // let image = document.createElement("img")
   // image.src = ele.image_url

   // div3.setAttribute("class","detail-box")

   // let div4 =document.createElement("div")
   // div4.innerText=ele.proName
   // div4.setAttribute("class","cart-product-title")
   
   // let div5 =document.createElement("div")
   // div5.innerText=ele.price
   // div4.setAttribute("class","cart-price")
   
   // let input = document.createElement("input")
   // input.setAttribute("class","cart-quantity")
   
   // div3.append(div4,div5,input)
   
   // div2.append(image,div3)
   // div1.append(div2)
   
   // document.getElementById("cart-content").append(div1)
   
})
}
// let x = document.getElementById("cart-content").innerText=1
// console.log(x);


export {navbar, append1 }


