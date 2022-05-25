<template>
    <div class="body">
        <div class="container">
            <div class="title">Fill Inform</div>
            <form action="">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details" id="detail_F">Full Name</span>
                        <input class="fill_inform" type="text" name="name" placeholder="Enter your name" required>
                    </div>
                    <div class="input-box">
                        <span class="details" id="detail_U">Username</span>
                        <input class="fill_inform" type="text" name="username" placeholder="Enter your username" required>
                    </div>
                    <div class="input-box">
                        <span class="details" id="detail_E">Email</span>
                        <input class="fill_inform" type="email" name="email" placeholder="Enter your email" required>
                    </div>
                    <div class="input-box">
                        <span class="details" id="detail_P">Phone Number</span>
                        <input class="fill_inform" type="text" name="phoneNumber" placeholder="Enter your number" required>
                    </div>
                    <div class="input-box">
                        <span class="details" id="detail_D">Password</span>
                        <input class="fill_inform" type="password" name="password" placeholder="Enter your password" required>
                    </div>
                    <div class="input-box">
                        <span class="details" id="detail_C">Confirm Password</span>
                        <input class="fill_inform" type="password" placeholder="Enter your password" required>
                    </div>
                </div>
                <div class="gender-details">
                    <input type="radio" name="gender" id="dot-1" >
                    <input type="radio" name="gender" id="dot-2" >
                    <input type="radio" name="gender" id="dot-3" >
                   <span class="gender-title">Gender</span>
                        <div class="category">
                            <label for="dot-1">
                                <span class="dot one"></span>
                                <span class="gender">Male</span>
                            </label>
                            <label for="dot-2">
                                <span class="dot two"></span>
                                <span class="gender">Female</span>
                            </label>
                            <label for="dot-3">
                                <span class="dot three"></span>
                                <span class="gender">Prefer not to say</span>
                            </label>
                        </div>
                </div>
                 <div>
                    <span class="title">Address</span>
                    <div class="select_city">
                        <select name="city/province" id="select">
                            <option value="city/province" disabled selected >City/Crovince</option>
                            <option value="phnom penh">phnom penh</option>
                            <option value="kompong Speu">kompong Speu</option>
                            <option value="preshsihanok">preshsihanok</option>
                            <option value="takeo">takeo</option>
                            <option value="kompot">kompot</option>
                            <option value="koh kong">koh kong</option>
                            <option value="prey veng">prey veng</option>
                            <option value="kompong thom">kompong thom</option>
                            <option value="ratanakiri">ratanakit</option>
                            <option value="modolkiri">modolkiri</option>
                            <option value="korce">korce</option>
                            <option value="steng streng">steng streng</option>
                        </select>
                    </div>
                    <div class="add_more_inform">
                        <span>Flat/House N./building/Company/Apartement</span>
                        <div class="Messenges">
                            <input class="fill_inform" type="text" name="phoneNumber" placeholder="Messenge..." required>   
                        </div>
                    </div>
                   <div>
                       <input type="file" value="add image">
                   </div>
                </div>
                <div class="button">
                    <router-link to="/cart/next/payment"><input style="text-decoration:none" type="submit" value="payment"></router-link>
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
 form .gender-details .gender-title{
     font-size: 20px;
     font-weight: 500;
 }
form .gender-details .category{
     display: flex;
     width: 84%;
     justify-content: space-between;
     margin: 14px 0;
 }
.gender-details .category label{
    display: flex;
    align-items: center;
 }
.gender-details .category .dot{
    background: rgb(157, 153, 153);
    border-radius: 50%;
    height: 18px;
    width: 18px;
    margin-right: 10px;
    border: 5px solid transparent;
    transition: all 0.3s ease;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three{
    border-color: rgb(169, 168, 168);
    background: rgb(230, 76, 194);
}
form input[type="radio"]{
    display: none;
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
.title{
    margin-right: 27vw;
}
.fill_inform{
    padding-right:5vw;
    color: rgb(209, 203, 203);
}
.gender-title{
    margin-right: 37vw;
}
.Messenges{
    padding-top: 10px;
}
.add_more_inform{
    padding: 10px;
    margin-right: 15.7vw;
    padding-bottom: 30px;
}
.select_city{
    margin-right: 30vw;
    padding-top: 10px;
}
#detail_F, #detail_U, #detail_D, #detail_C{
    margin-left: -12vw;
}
#detail_E{
    margin-left: -13.5vw;
}
#detail_P{
     margin-left: -10.5vw;
}
#detail_C{
     margin-left: -9.5vw;
}

</style>