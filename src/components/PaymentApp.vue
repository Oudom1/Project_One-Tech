<template>
    <div class="body">
        <div class="container">
            <div class="title">Payment Method</div>
            <div class="picture" id="social-media">
             <ul class="ul">
                   <div> <li><img class="pic" src="../assets/PayPal-Logo.png" alt="facebook"></li></div>
                   <div><li><img class="pic" src="../assets/credit_card.png" alt="twitter"></li></div>
                   <div> <li><img class="pic" src="../assets/master_card.png" alt="linkedin"></li></div>
            </ul>
            </div>
            <form action="">
                <div>
                    <div >
                        <span class="Payment_Details">Payment Details</span>
                        <div>
                              <span class="holder_name">Card Holder Name</span> 
                              <input class="fill_inform" type="text" name="name" placeholder="Enter your name" required>
                        </div>
                        <div class="main_card">
                              <span class="Card_Number">Card Number</span> 
                              <div>
                              <input class="code_number" type="text" name="name" placeholder="4-degit" required>  
                              </div>
                              <div>
                              <input class="code_number" type="text" name="name" placeholder="4-degit" required>  
                              </div>
                              <div>
                              <input class="code_number" type="text" name="name" placeholder="4-degit" required>  
                              </div>
                              <div>
                              <input class="code_number" type="text" name="name" placeholder="4-degit" required>  
                              </div>
                        </div>
                    </div> 
                </div>
                <div>
                      <div>
                            <span class="expiry">Expiry Date</span>
                            <div class="Expiry_Date">
                            <div >
                                  <select name="Month" id="slected">
                                        <option value="Month" disabled selected>Month</option>
                                        <option value="Month">January</option>
                                        <option value="Month" >February</option>
                                        <option value="Month" >March</option>
                                        <option value="Month" >April</option>
                                        <option value="Month" >May</option>
                                        <option value="Month" >June</option>
                                        <option value="Month" >July</option>
                                        <option value="Month" >August</option>
                                        <option value="Month" >September</option>
                                        <option value="Month" >October</option>
                                        <option value="Month" >November</option>
                                        <option value="Month" >December</option>
                                  </select>
                            </div>
                            <div class="year"><input type="text" placeholder="Year" required></div>
                            <div>
                                  <div>
                                        <input class="cvv" type="text" required placeholder="CVV">
                                  </div>
                            </div>
                      </div>
                    </div>
                </div>
                <div class="add_more_inform">
                    
                    <span class="information_card">Save credit card and information</span>   
                    <div><input class="checkbox" type="checkbox">
                    
                    </div>
                      
                                
                </div>
                <div class="button">
                    <router-link to="/cart/next/payment"><input style="text-decoration:none" type="submit" value="Agree"></router-link>
                </div>
               
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
 .body{
     display: flex;
     height: 100vh;
     justify-content: center;
     padding: 10px;
     align-items: center;
     background: linear-gradient(135deg, rgb(116, 221, 250) 0%, rgb(224, 116, 222) 100%); 
 } 
 .container{
     max-width: 700px;
     width: 100%;
     background: #fff;
     padding: 25px 30px;
     border-radius: 5px;
 }
 .container .title{
     font-size: 25px;
     font-weight: 500;
     position: relative;
 } 
 .container .title::before{
     content: '';
     position: absolute;
     height: 3px;
     width: 50px;
     left: 0;
     bottom:0;
     background: linear-gradient(135deg, rgb(116, 221, 250) 0%, rgb(224, 116, 222) 100%); 
 } 
 .container form .user-details{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between; 
     margin: 20px 0 12px 0;
 }
form .user-details .input-box{
     margin-bottom: 15px;
     width: calc(100% / 2- 20px);
 }
 .user-details .input-box .user-details{
     display:block;
     font-weight: 500;
     margin-bottom: 5px;
 }
 .user-detail .input-box input{
     height: 45px;
     width: 100%;
     outline: none;
     border-radius: 5px;
     border: 1px solid #ccc;
     padding-left: 15px;
     font-size:16px;
     border-bottom-width: 8px;
     transition: all 0.3s ease;
 }
 .user-details .input-box input:focus,
 .user-details .input-box input:valid{
     border-color: linear-gradient(135deg, rgb(116, 221, 250) 0%, rgb(224, 116, 222) 100%);
 }

form .button{
    height: 45px;
    margin: 45px 0;
}
form .button input{
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    border: none;
    font-size: 18px;
    letter-spacing: 1px;
    background: linear-gradient(135deg, rgb(116, 221, 250) 0%, rgb(224, 116, 222) 100%);
    border-radius: 5px;
}
form .button input:hover{
    background: linear-gradient(135deg, rgb(224, 116, 222) 0%,rgb(116, 221, 250) 100%);
}
@media(max-width: 584px){
    .container{
        max-width: 100%;
    }
    form .user-details .input-box{
        margin-bottom: 15px;
        width: 100%;
    }
    form .gender-details .category{
        width: 100%;
    }
    .container form .user-details{
        max-height: 300px;
        overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar{
        width: 0;
    }
}
.picture{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
}
.pic{
      width: 6vw;
      height: 7vh;
      margin-right: 2vw;
}
.ul{
      display: flex;
}
.code_number{
      width: 3vw;
      height: 3vh;
      margin-right: 20px;
      margin-top: 5vh;
      margin-bottom: 2vh;
}
.main_card{
      display: flex;
      width: 100%;
}
.Card_Number{
      margin-top: 10px;
      margin-right: -50px;
}
.Payment_Details{
      margin-right: 27vw;
      padding-bottom: 10px;
}
.expiry{
    padding-right: 29vw;
}
.Expiry_Date{
    display:flex;
    position: absolute;
    margin-top: 3vh;
}
.year, .cvv{
    width: 3vw;
    height: 2vh;
    
}
.year{
    margin-left: 50px;
    margin-top: -12px;
}
.cvv{
    margin-left: 2vw;
}
.add_more_inform{
    margin-top: 10vh;
}
.checkbox{
    border: 1px solid black;
}




</style>