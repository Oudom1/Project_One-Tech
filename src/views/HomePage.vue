<script>
import "@/assets/css/header.css";
import "@/assets/css/animation_photo.css";
import "../assets/css/product.css"
</script>
<template>
  <main>
    <div class="super_container">
      <header class="header">
        <div class="top_bar">
          <div class="container">
            <div class="row">
              <div class="top_bar_items">
                <div class="top_bar_contact_item">
                  <div class="top_bar_icon">
                    <img
                      src="data:image/webp;base64,UklGRqYAAABXRUJQVlA4TJoAAAAvCsAEEO8REQ7bSFLk5FUNHPP9x9DItCRxR4C/7LRP8Bb+NECFkIaYQSFlIKvCdSTbpnXtZ9u2nX9k5+8FsNbeEf2fgPr1sN+JKC7Nd2xlNZE8w9dzOtueRAh9nqvlUlFEUTmtLPNi4xmc9b9xDTaWlnn+mAx10NOhjh+3Xls6064IbnOLDH4Rydk39ZkbFXwmn8b9yHUf5L0F"
                      alt=""
                    />
                  </div>
                  +855 87 660 243
                </div>
                <div class="top_bar_contact_item">
                  <div class="top_bar_icon">
                    <img
                      src="data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvE0ADEJ8SEQzbto2cO8lOv4uPVhECzEzKPnS4680W7DLah+HPOFVKE4AIhAY00mxAjGTbtDXPtm3btvmx88/mIoWI/k9AZb7d6dxMa5LH4tBspiyP/yI66/+3ceS1NGixHu/BwQUWf2G1hIxge/BAVUpKDSmAbXVwAtFnCzD1riHAqoRXHoHwr7jQkvzJF47ndPYvpeSBpmTAbYe0dMG2OmPcf/2o+t4nM+tJ7DVEc/8TH4qUwKgRciKte2cy0zzp3NoA"
                      alt=""
                    />
                  </div>
                  <a href="mailto:fastsales@gmail.com" style="color: #7f7f7f">fastsales@gmail.com</a>
                </div>
                <div class="top_bar_content">
                  <div class="top_bar_user">
                    <div class="user_icon"></div>
                    <img
                      src="https://preview.colorlib.com/theme/onetech/images/user.svg"
                      width="15px"
                      height="16px"
                      alt=""
                      style="margin-top: 20px"
                    />
                    <div>
                      <a href="/register" style="color: #7f7f7f;">Register</a>
                    </div>
                    <div>|</div>
                    <div>
                      <a href="/login" style="color: #7f7f7f">Sign in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header_main">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-sm-3 col-3 order-1 p-0">
                <div class="logo_container">
                  <div class="logo">
                    <a href="/">OneTech</a>
                  </div>
                </div>
              </div>
              <div class=" col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div class="header_search">
                  <div class="header_search_content">
                    <div class="header_search_from_container">
                      <form action="#" class="header_search_form clearfix">
                        <input
                          type="search"
                          required
                          class="header_search_input"
                          placeholder="Search for products..."
                        />
                        <div class="custom_dropdown">
                          <div class="custom_dropdown_list">
                            <select name=""  class="custom_dropdown_placeholder form-control" >
                              <option value="">All Categories</option>
                              <option value="">Laptop</option>
                              <option value="">Desktop</option>
                              <option value="">Smart Phone</option>
                              <option value="">Keyboard</option>
                              <option value="">Camera</option>
                            </select>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="header_button_search trans_300"
                          value="Submit"
                        >
                          <img
                            src="data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPkAAAAvE8AEEC+ioG0bxvxJtzsg5n/+GbSN5Dj4yWz5CuETRw4agsNgAAqFAAAQiEHhBwDgxkAIsAgAEBcaQBQGIgjEQtz4AERQeFAYiEHAhxAXIEaybdqaZ9t+37bNyT+pc857IUT0X4HbNkph2zE8A2Bw+qJPRx1SPFN//9T9hO/8mtWgsdbLyBfeFwlYf3EnuEDPzwwRq1oJ85QED90F+DafQst7AD9JMed7gO8k8r4BvFlOoesNwKnLFE6cAzT9L8Vu+5wNLnDsYzV078NDQl7rXjdX6B+qP5NIB6rq37k6jr9o/+H783ZVZB5pAxfqaLOW6nA7scXg6xUA"
                            alt=""
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div class="wishlist_cart d-flex flex-row align-items-center">
                  <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div class="wishlist_icon">
                      <img
                        src="data:image/webp;base64,UklGRnIBAABXRUJQVlA4TGYBAAAvIoAHEFejIG0DJv5l73iIQJi2bYOzk3ab2rZtGHhL5R2OqxAIQJkHLkSgtKoAoQQMpYTWkz5YwEhIEVpjxOopqqKCSgvPNzA20JoVECPZNm2tb9t8tvVt27Yx+WdweTKI6P8EyNpavXrn92lrWPaDmw+f/2/nlWY5z//ieNIuqeUAx595hzO4ivW1dY1vw+eQ+t9hZ6qnvT9xDWc2F/wGZN95xV/lg5se2Yf+uJRU469XLo+AU7ns/WNWjTAp18ecyfUENNW4k8dRebxl/o6gF8/T3H/RaaiDb6g3VAfQZKgBXhgw1MfrHmuG5jkc4cPQO2N6ZN/ILs9SN2wYWIE+SQFY920JorKGYc2nBUjJPgxrvixCUs4RWPVhHtJyG4cVT3OQk/s4rHiYh6y8xmHZ1Txk5D0Bcy5qkJOfSZh1qEFO/qZh1qYGefmdgVlJM1CU/3koqAhlmSzAKZRltgCUZLr8VpFn"
                        alt=""
                      />
                    </div>
                    <div class="wishlist_content">
                      <div class="wishlist_text">
                        <a href="/" style="color: #7f7f7f">Wishlist</a>
                      </div>
                      <div class="wishlist_count">115</div>
                    </div>
                  </div>
                  <div class="cart">                
                    <div
                      class="cart_container d-flex flex-row  align-items-center justify-content-end">
                      <div class="cart_icon">
                        <img
                          src="data:image/webp;base64,UklGRkgBAABXRUJQVlA4TDsBAAAvGoAIED8jEEjy136ICIZt20aOVZJ7j4CgWCA3HACUgQgAmlE0uQRolIk0yKUooxUY01VM0g9AcmkmySMYKFAywg/bzJYACLatHVvub9tm5p9t9/bnfru685/Dh2cIEf2fABgM7n6Qn3shCNbH1JzOmSuTlxmHI31OVs04Z1yD5ir/XCY2eA/dOzZMNBnQ8/BNz5fNZrNDFrO6BU6z2WzWD9h+KNyyI0QqpX7ZVLov/FVKkWEk+A6gRxhkH8Ark8jzAUCfbj0nhwCuTgOo8wIA6dVzkwCsAFa4D2D70KJnOWhAe4frED/jgtwtS3KKKbkWI2LWGZ1ifg4gHueXXI5PclVeyy3zSG6Lm3InXJK7YUXumVm5b8bkJnTJ8R/yHZbk5vm/6LVarAYtBnBMcjwy2k0aQO1xSuPtqA4A"
                          alt=""
                        />
                        <div class="cart_count"><span>100</span></div>
                      </div>
                      <div class="cart_content">
                        <div class="cart_text"><a href="#" style="color: #7f7f7f">Cart</a></div>
                        <div class="cart_price">$85</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="main_nav">
          <div class="container">
            <div class="row">
              <div class="cols">
                <div class="main_nav_content d-flex flex-row">
                  <div class="cat_menu_container">
                     <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                       <div class="cat_burger">
                         <span></span>
                         <span></span>
                         <span></span>
                       </div>
                       <div class="cat_menu_text">categories</div>
                     </div>
                  </div>
                  <div class="main_nav_menu ml-auto">
                    <ul style="display: flex; justify-content: space-around;">
                       <li style="width: 100px;height: 60px; padding-top: 18px;padding-left: 25px; font-size: 18px;">Home</li>
                       <li style="width: 120px;height: 60px; padding-top: 18px;padding-left: 22px;font-size: 18px;"> <router-link to="/hotdeal">Hot Deal</router-link> </li>
                       <li style="width: 100px;height: 60px; padding-top: 18px;padding-left: 15px;font-size: 18px;"><router-link to="/product">Product</router-link></li>
                       <li style="width: 100px;height: 60px; padding-top: 18px;padding-left: 30px;font-size: 18px;"><router-link to="/blog">Blog</router-link></li>
                       <li style="width: 100px;height: 60px; padding-top: 18px;padding-left: 15px;font-size: 18px;">Contact</li>
                    </ul>
                  </div>
                  <div class="menu_trigger_container ml-auto"></div>  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="page_menu w-100 mt-1">
            <div class="container h-100">
                <div class="row">
                  <div class="d-flex flex-row">
                    <div style="width: 290px; box-shadow: 5px 10px 18px #888888; border-bottom:1px solid #a3a3a3;">
                      <div class="ml-2">
                       <ul class="p-0 m-0 ">
                         <li style="height: 2.5rem;padding-top: 10px;"> Categories
                            <font-awesome-icon class="icon" icon="fa-angle-right" />
                           <ul class="submanu">
                             <li>Sub-Menu</li>
                             <li><router-link to="#" style="color: #7f7f7f;">Item</router-link></li>
                             <li>
                               IPhone
                               <font-awesome-icon class="icon" icon="fa-angle-right" />
                               <ul class="submanu1 ">
                                 <li>12 pro</li>
                                 <li>12 max</li>
                               </ul>
                             </li>
                           </ul>
                         </li>
                         <li class="page_menus">Laptops
                            <ul class="submanu">
                              <li>ASUS</li>
                              <li>DELL</li>
                              <li>MSI
                                <ul class="submanu1">
                                  <li>12</li> 
                                  <li>15</li> 
                                </ul>
                              </li>
                              <li class="page_menus">Desktop</li>
                            </ul>
                         </li>
                         <li class="page_menus">Audio Device</li>
                         <li class="page_menus">Hardware</li>
                         <li class="page_menus">Projector</li>
                         <li class="page_menus">Smart Phone</li>
                         <li class="page_menus">Cameras</li>
                         <li class="page_menus">PC</li>
                         <li class="page_menus">Keyboard</li>
                         <li class="page_menus">Mouse</li>
                       </ul>
                      </div>
                    </div>
                    <div class="animation-photo">
                      <a href="#"> <img src="https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/Gold%20One%20Artwork-01-915x420.jpg" alt=""></a>
                     </div>
                  </div>
                </div>
            </div>
      </div>
    </div>
    <div class="container h-100">
       <div class="row">
          <div class="sidebarProduct">
              <div style="margin-left: 10px; background-color: gray;height: 60px; color: aliceblue;padding: 20px ;">SPECIAL</div>
              <div style="padding-top: 15px;" >
                <a href="#" class="d-flex justify-content-start">
                  <img style="margin-left: 10px" src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                  <div style="margin-left: 10px" >
                    <h6>Name</h6>
                    <h2>340$</h2>
                  </div>
                </a>
              </div>
              <div style="padding-top: 15px;" >
                <a href="#" class="d-flex justify-content-start">
                  <img style="margin-left: 10px" src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                  <div style="margin-left: 10px" >
                    <h6>Name</h6>
                    <h2>340$</h2>
                  </div>
                </a>
              </div>
              <div style="padding-top: 15px;" >
                <a href="#" class="d-flex justify-content-start">
                  <img style="margin-left: 10px" src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                  <div style="margin-left: 10px" >
                    <h6>Name</h6>
                    <h2>340$</h2>
                  </div>
                </a>
              </div>
              <div style="padding-top: 15px;" >
                <a href="#" class="d-flex justify-content-start">
                  <img style="margin-left: 10px" src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                  <div style="margin-left: 10px" >
                    <h6>Name</h6>
                    <h2>340$</h2>
                  </div>
                </a>
              </div>
              <div style="padding-top: 15px;" >
                <a href="#" class="d-flex justify-content-start">
                  <img style="margin-left: 10px" src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                  <div style="margin-left: 10px" >
                    <h6>Name</h6>
                    <h2>340$</h2>
                  </div>
                </a>
              </div>
          </div>
          <div class="containerProduct">
              <div style="margin-left: 10px; background-color: gray;height: 60px; color: aliceblue;padding: 20px ;">LAPTOPS</div>
                <div style="margin-left: 20px; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start;">
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                  <div style="padding: 50px;border: 1px solid gray; width: 200px;">
                    <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/white-4-80x80.jpg" alt="">
                    <h6>Name</h6>
                    <h4>400$</h4>
                    <button>Buy</button>
                  </div>
                </div>
          </div>
       </div>
       <!-- //fouter information of contact product -->
       <div class="newsletter">
         <div class="container2">
                <div>
                  <img src="https://preview.colorlib.com/theme/onetech/images/xsend.png.pagespeed.ic.xzFAnQbH8t.webp" alt="">
                </div>
                <div class="latter-tittle">
                  <h6 class="tittle">Sign up for Newslatter</h6>
                  <div class="paragrap">
                    <p>...and received %20 coupon for first shopping </p>
                  </div>
                </div>
                <div>
                  <form action="#" class="newsletter_form">
                        <input type="email" class="newsletter_input" required="" placeholder="Enter your email address">
                        <button class="newsletter_button">Subscribe</button>
                  </form>
                </div>
                <div class="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
         </div>
       </div>
       <div class="footer">
         <div class="item-contact">
           <div class="footer_column footer_contact">
              <div class="logo_container">
              <div class="logo logo-oneTech"><a href="#">OneTech</a></div>
              </div>
              <div class="contain-address">
                  <div class="footer_title got-guestion"> <h6> Got Question? Call Us 24/7</h6></div>
                  <div class="footer_phone">+38 068 005 3570</div>
                  <div class="footer_contact_text">
                    <p>17 Princess Road, London</p>
                    <p>Grester London NW18JR, UK</p>
                  </div>
              </div>
              <div class="footer_social">
              <ul>
              <li><a href="#"></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
              <li><a href="#"><i class="fab fa-google"></i></a></li>
              <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
              </ul>
              </div>
              </div>
         </div>
         <div class="footer_column find-it-fast">
            <div class="footer_title">Find it Fast</div>
              <ul class="footer_list">
                <li><a href="#">Computers &amp; Laptops</a></li>
                <li><a href="#">Cameras &amp; Photos</a></li>
                <li><a href="#">Hardware</a></li>
                <li><a href="#">Smartphones &amp; Tablets</a></li>
                <li><a href="#">TV &amp; Audio</a></li>
                </ul>
                <div class="footer_subtitle">Gadgets</div>
                <ul class="footer_list">
                <li><a href="#">Car Electronics</a></li>
              </ul>
            </div> 
            <div class="col-lg-2">
                <div class="footer_column video-games contain-link-consoles">
                    <ul class="footer_list footer_list_2">
                      <li><a href="#">Video Games &amp; Consoles</a></li>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Cameras &amp; Photos</a></li>
                      <li><a href="#">Hardware</a></li>
                      <li><a href="#">Computers &amp; Laptops</a></li>
                    </ul>
                </div>
              </div>    
             <div class="footer_column contain-inform-contact">
                <div class="footer_title">Customer Care</div>
                <ul class="footer_list">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Order Tracking</a></li>
                  <li><a href="#">Wish List</a></li>
                  <li><a href="#">Customer Services</a></li>
                  <li><a href="#">Returns / Exchange</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Product Support</a></li>
                </ul>
              </div>
         </div>
          <div class="copyright-cotainer">
            <div class="main-container-copyright">
            <div class="copyright">
                <p>Copyright @2022 All right reserve | The template make with <a href=""></a>by <a href="">OneTech</a></p>
              </div>
              <div>
                <img class="link-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png" alt="">
                <img class="link-logo" src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png" alt="">
                <img class="link-logo" src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" alt="">
                <img class="link-logo" src="https://preview.colorlib.com/theme/onetech/images/xlogos_4.png.pagespeed.ic.3NlS-r1FuI.webp" alt="">
              </div>
            </div>
          </div>
     </div>
  </main>
</template>

<style>
.super_container {
  width: 100%;
  overflow: hidden;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: #fff;
  color: #000;
}
.header {
  position: relative;
  width: 100%;
  z-index: 10;
}
.top_bar {
  width: 100%;
  height: 45px;
  background-color: #fafafa;
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  z-index: 2;
}
.container {
  width: 1500px;
  padding-right: 15px;
  padding-left: 15px;
  /* margin-left: 180px;
  margin-right: 180px; */
  height: 170px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
/* newslatter */
.newsletter{
    width: 100%;
    background: #fafafa;
    padding-bottom: 60px;
    margin-top: 2vh;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
    /* border: 1px solid gray; */
    height: 20vh;
    justify-content: center;
    text-align: center;
    text-align: center;
    opacity: 20px;
    padding-top: 0.5vh;
}
.container2{
  /* border: 1px solid black; */
  width: 100%;
  height: 8vh;
  margin-top: 6vh;
  display: flex;
}
.footer{
   width: 100%;
    background: #fafafa;
    padding-bottom: 60px;
    margin-top: 2vh;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
    /* border: 1px solid black; */
    height: 20vh;
    height: 40vh;
    display: flex;
}
.find-it-fast{
  margin-left: 15vw;
}
.latter-tittle{
  margin-left: 2vw;
}
.tittle{
  margin-left: -10vw;
  margin-top: 1vh;
}
.newsletter_form{
  margin-left: 1vw;
  display: block;
  margin-top: 1vh;
  width: 100%;
  height: 100%;
}
.newsletter_input{
  width: 25vw;
  height: 6vh;
  padding-left: 2vw;
  border-color: gray;
  border-right: none;
  
}
.newsletter_button{
  width: 10vw;
  height: 6vh;
  border-radius: 0px 8px 8px 0px;
  border-color: #0e8ce4;
  background-color: #0e8ce4;
  color: white;
}
.newsletter_unsubscribe_link{
  display: block;
  position: relative;
  margin-left: 2vw;
  margin-top: 2vh;
}

.copyright-cotainer{
  margin-top: 2vh;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: space-between
}
.main-container-copyright{
  padding-top: 2vh;
  display: flex;
  justify-content: space-between;
}
.link-logo{
  width: 1.5vw;
  height: 2vh;
  margin-left: 1vw;
}
.video-games{
  margin-right: 6vw;
}
.footer_title{
  margin-left: 2.5vw;
  margin-top: 6vh;
  margin-bottom:3vh;
}
.got-guestion{
  margin-left: -0.1vw;
}
.logo-oneTech{
  margin-top: -4vh;
}
.contain-address{
  margin-top: -12vh;
  
}
.footer_subtitle{
  margin-left: 2.5vw;
}
.contain-link-consoles{
  width: 15vw;
  height: 10vh;
  margin-top:12vh;
}
.contain-inform-contact{
  margin-left: 6vw;
}
</style>
