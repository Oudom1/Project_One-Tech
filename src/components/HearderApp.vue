<template>
  <div>
    <div class="container_hearder">
      <div class="box1">
        <a href="phone">+855 123456789</a>
      </div>
      <div class="box2">
        <a href="email">Address@gmail.com</a>
      </div>
      <div class="box3">
        <a href="Login">Log In</a>
      </div>
      <div>
        <span>|</span>
      </div>
      <div class="box4">
        <a href="register">Register</a>
      </div>
    </div>
    <div class="container_logo">
      <div class="logo">
        <h1>OneTech</h1>
      </div>
      <div class="hearder_search_for_content">
        <div class="category_dropdown">
          <input
            type="text"
            class="list_product"
            placeholder="Search for product..."
          />
        </div>
        <span class="dropdown_list">|</span>
        <div class="dropdown_list">
          <span>Categories</span>
        </div>
        <div class="hearder_search_button">
          <button style="background: blue; border: 1px solid blue">
            <img
              width="30px"
              height="30px"
              type="submit"
              value="submit"
              src="data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPkAAAAvE8AEEC+ioG0bxvxJtzsg5n/+GbSN5Dj4yWz5CuETRw4agsNgAAqFAAAQiEHhBwDgxkAIsAgAEBcaQBQGIgjEQtz4AERQeFAYiEHAhxAXIEaybdqaZ9t+37bNyT+pc857IUT0X4HbNkph2zE8A2Bw+qJPRx1SPFN//9T9hO/8mtWgsdbLyBfeFwlYf3EnuEDPzwwRq1oJ85QED90F+DafQst7AD9JMed7gO8k8r4BvFlOoesNwKnLFE6cAzT9L8Vu+5wNLnDsYzV078NDQl7rXjdX6B+qP5NIB6rq37k6jr9o/+H783ZVZB5pAxfqaLOW6nA7scXg6xUA"
              alt="search"
            />
          </button>
        </div>
      </div>
      <div class="wishlist">
        <div class="wishlist_Icon">
          <img
            src="data:image/webp;base64,UklGRnIBAABXRUJQVlA4TGYBAAAvIoAHEFejIG0DJv5l73iIQJi2bYOzk3ab2rZtGHhL5R2OqxAIQJkHLkSgtKoAoQQMpYTWkz5YwEhIEVpjxOopqqKCSgvPNzA20JoVECPZNm2tb9t8tvVt27Yx+WdweTKI6P8EyNpavXrn92lrWPaDmw+f/2/nlWY5z//ieNIuqeUAx595hzO4ivW1dY1vw+eQ+t9hZ6qnvT9xDWc2F/wGZN95xV/lg5se2Yf+uJRU469XLo+AU7ns/WNWjTAp18ecyfUENNW4k8dRebxl/o6gF8/T3H/RaaiDb6g3VAfQZKgBXhgw1MfrHmuG5jkc4cPQO2N6ZN/ILs9SN2wYWIE+SQFY920JorKGYc2nBUjJPgxrvixCUs4RWPVhHtJyG4cVT3OQk/s4rHiYh6y8xmHZ1Txk5D0Bcy5qkJOfSZh1qEFO/qZh1qYGefmdgVlJM1CU/3koqAhlmSzAKZRltgCUZLr8VpFn"
            alt=""
          />
        </div>
        <div class="wishlist_content">
          <a href="">Wishlist</a>
          <div class="wish_count">115</div>
        </div>
      </div>
      <div class="cart">
        <div class="position">
          <img
            class="cart_icon"
            src="data:image/webp;base64,UklGRkgBAABXRUJQVlA4TDsBAAAvGoAIED8jEEjy136ICIZt20aOVZJ7j4CgWCA3HACUgQgAmlE0uQRolIk0yKUooxUY01VM0g9AcmkmySMYKFAywg/bzJYACLatHVvub9tm5p9t9/bnfru685/Dh2cIEf2fABgM7n6Qn3shCNbH1JzOmSuTlxmHI31OVs04Z1yD5ir/XCY2eA/dOzZMNBnQ8/BNz5fNZrNDFrO6BU6z2WzWD9h+KNyyI0QqpX7ZVLov/FVKkWEk+A6gRxhkH8Ark8jzAUCfbj0nhwCuTgOo8wIA6dVzkwCsAFa4D2D70KJnOWhAe4frED/jgtwtS3KKKbkWI2LWGZ1ifg4gHueXXI5PclVeyy3zSG6Lm3InXJK7YUXumVm5b8bkJnTJ8R/yHZbk5vm/6LVarAYtBnBMcjwy2k0aQO1xSuPtqA4A"
            alt=""
          />
          <span class="cart_count">10</span>
        </div>
        <div class="cart_text">
          <router-link to="/cart">Cart</router-link>
          <div class="cart_price">$85</div>
        </div>
      </div>
    </div>
    <div class="container_main">
        <div class="Home">
        <ul class="Home_page">
            <li><a class="Home_content" href="#">home</a></li>
            <li><a class="Home_content" href="#">Super Deals</a></li>
            <li><a class="Home_content" href="#">Fetured Brands</a></li>
            <li><a class="Home_content" href="#">Page</a></li>
            <li><a class="Home_content" href="#">Blog</a></li>
            <li><a class="Home_content" href="#">Contact</a></li>
        
        </ul>
        </div>
        <div class="menu_main">
          <div>
                <!-- <span class="burger_menu">Categories</span> -->
            <button type="button" class="shadow-none">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
          </div>
          <div class="menu-bar">
            <ul>
              <li class="active"><a href="#">Categories</a>
                  <div class="sub-menu-1">
                    <ul>
                      <li class="hover-me"><a href="#">Menu-item</a>
                        <div class="sub-menu-2">
                            <ul>
                              <li><a href="#">Computer</a></li>
                              <li><a href="#">Iphone</a></li>
                              <li><a href="#">Keyboard</a></li>
                              <li><a href="#">Mouse</a></li>
                            </ul>
                        </div>
                      </li>
                      <li class="hover-me"><a href="#">Menu-item</a>
                         <div class="sub-menu-2">
                            <ul>
                              <li><a href="#">Computer</a></li>
                              <li><a href="#">Iphone</a></li>
                              <li><a href="#">Keyboard</a></li>
                              <li><a href="#">Mouse</a></li>
                            </ul>
                        </div>
                      </li>
                      <li><a href="#">Menu-item</a></li>
                      <li><a href="#">Menu-item</a></li>
                    </ul>
                  </div>
              </li>
            </ul>
          </div>
        
        </div>
        
      
    
    </div>
  </div>
</template>
<script>

export default {
};
</script>

<style>
.container_hearder {
  display: flex;
  box-sizing: border-box;
  border: 1px solid gray;
  padding: 20px;
  margin-top: -8vh;
}
.box1 {
  margin-left: 15vh;
  margin-right: 20vh;
}
.box2 {
  margin-right: 100vh;
}
.box3 {
  margin-right: 5px;
}
.box4 {
  margin-left: 5px;
}
.container_logo {
  margin-top: 7vh;
  margin-right: 143vh;
  font-size: 1.2rem;
  display: flex;
  margin-left: 18vh;
}
.logo {
  font-weight: bold;
  color: rgb(17, 171, 210);
  display: flex;
  margin-right: 10vh;
}
.hearder_search_for_content {
  display: flex;
  border: 1px solid black;
  margin: 3vh;
  margin-right: 20vh;
}
.category_dropdown {
  padding: 2vh;
}
.list_product {
  border: 1px solid white;
}
.dropdown_list {
  padding: 2vh;
  display: inline-block;
  cursor: pointer;
}
.hearder_search_button {
  border: 1px solid blue;
  background: blue;
  padding: 2vh;
}

.wishlist {
  padding-top: 6vh;
  display: flex;
  margin-right: 10vh;
}
.wishlist_content {
  display: block;
  margin-left: 1vh;
}
.position {
  position: absoulte;
}
.cart {
  padding-top: 5.6vh;
  display: flex;
}
.cart_icon {
  position: absolute;
}
.cart_count {
  position: absolute;
  margin-top: 1.5vh;
  width: 23px;
  height: 23px;
  background-color: #0e8ce4;
  border-radius: 50%;
  text-align: center;
  margin-left: 1.5vh;
  color: white;
}
.cart_text {
  margin-left: 7vh;
}
.container_main {
  border: 1px solid black;
  width: 100%;
  height: 8vh;
  position: absolute;
}
.Cat_menu_title {
  border: 1px solid black;
  height: 7.7vh;
  width: 40vh;
  position: relative;
  margin-left: 18vh;
  padding-top: 2px;
  display: plex;
}
.Cat_menu_title button {
  position: absolute;
  left: 5%;
  bottom: 13%;
  width: 40px;
  height:40px
  
}

.line {
  display: block;
  width: 25px;
  height: 2px;
  background-color: rgb(154, 150, 150);
  border-radius: 4px;
  margin-block: 7px;
    
}
/* .burger_menu {
  position: absolute;
  top: 10%;
  font-size: 30px;
  right: 10%;
  width: 20px;
} */
.btn{
    width: 25vh;
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    margin-bottom: 30%;


}

.main_menu{
    display: flex;
}
ul{
    list-style: none;
}
.Home_page{
  display: flex;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto ;
  padding: 10px;
  width: 100vw;
  justify-content: center;
  padding-left: 20%;

}
.Home_content{
  display: flex;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  margin-left: 30px;

  
}
.Home{
    position: absolute;
    padding-bottom: 20px;
    
}

.menu_main{
  display: flex;
  position: absolute;
  left: 9vw;
  top: 1.4vh;

}

.menu-bar ul li{
  width: 120px;
  margin: 15px;
  padding: 15px;
}
.menu-bar ul li a{
  text-decoration: none;
  color: black;
  list-style: none;
}
.active, .menu-bar ul li:hover{
  background: gray;
  border-radius: 3px;
}
.sub-menu-1{
  display: none;
}
.menu-bar ul li:hover .sub-menu-1{
  display: block;
  position: absolute;
  background: rgb(0,0,0,0.12);
  margin-top: 15px;
  margin-left: -15px;
}
.menu-bar ul li:hover .sub-menu-1 ul{
  display:block;
  margin: 10px;
}
.menu-bar ul li:hover .sub-menu-1 ul li{
  width: 150px;
  padding: 10px;
  border-bottom: 1px dotted #fff;
  background: transparent;
  border-radius: 0;
  text-align: left;
}
.menu-bar ul li:hover .sub-menu-1 ul li:last-child{
  border-bottom: none;
}
.menu-bar ul li:hover .sub-menu-1 ul li a:hover{
  color: red;
}
.sub-menu-2{
  display: none;
}
.hover-me:hover .sub-menu-2{
  position: absolute;
  display: block;
  margin-top: 1.5vh;
  margin-left: 10.5vw;
  background: rgb(154, 150, 150)
}


</style>
