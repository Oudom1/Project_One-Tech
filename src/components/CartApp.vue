<template>
    <div class="main_cart">
        <p class="Container"><h>Item Select</h></p>
        <div class="Payment_item">
         
          <div class="main_select">
              <select name="types" class="select_item">
                  <option value="" disabled selected>Types</option>
                  <option value="computer">Computer</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="mouse">Mouse</option>
                  <option value="smartphone">Smartphone</option>
              </select>
          </div>
          <div class="Main_btn">
              <div>
                  <input type="text" placeholder="Search..." class="select_categories"> 
              </div>  
              <div>
                  <button class="btn">uuj</button>
              </div>
          </div>
        
        </div>
        <div class="item_main">
            <div class="box">
                <h4><a href="#"></a></h4>
            </div>
            <div class="box">
                <h4><a href="#">Category</a></h4>
            </div>
            <div class="box">
                <h4><a href="#">Item</a></h4>
            </div>
            <div class="box">
                <h4><a href="#">Description</a></h4>
            </div>
            <div class="box">
                <h4><a href="#">Price</a></h4>
            </div>
            <div class="box">
                <h4><a href="#">Selected</a></h4>
            </div>
            <div class="box">
                <h4><a href="#">Type</a></h4>
            </div>
            <div class="box">a</div>
            <div class="box">b</div>
            <div class="box">c</div>
            <div class="box">d</div>
            <div class="box">e</div>
            <div class="box">f</div>
            <div class="box">h</div>
            <div class="box">i</div>
            <div class="box">j</div>
            <div class="box">k</div>
            <div class="box">l</div>
            <div class="box">M</div>
            <div class="box">N</div>
            <div class="box">o</div>
            <div class="box">p</div>
        </div>
        <div class="fill_inform_next">
            <div class="Fill_inform_next">
                  <router-link to="/cart/next">Next</router-link>
            </div>
             
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
  .main_cart{
      margin-top: 40vh;
  }
  .Payment_item{
      Display: grid;
      grid-template-columns: auto auto;
      position: absolute;
      left: 10vw;
  }
  .main_select{
      margin-right: 20vw;
  }
  .select_item{
      width: 20vw;
      height: 6vh;
  }
   .select_categories:hover{
       border-color: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
   }
  .select_categories{
      width: 20vw;
      height: 6vh;
  }
  .Main_btn{
      display: flex;
  }
  .btn{
      color: gray;
      border: 1px solid black;
      width: 3vw;
      height: 6vh;
  }
  .Container{
      display: grid;
      grid-template-columns: auto;
      margin-left: -72vw;
      font-size: 30px;
  }
  .item_main{
      Display: grid;
      grid-template-columns: auto auto auto auto auto auto auto; 
      position: absolute;
      left: 10vw;  
      top: 60vh;
      text-decoration: none;
  }
  .box{
      border: 1px solid black;
      padding-top: -1vh;
      padding-left: 7vw;
      font-size: 20px;
     justify-content: center;
     align-items: center;
      text-align: center;
      text-decoration: none;
  }
  .Fill_inform_next{
      display: flex;
      top: 110vh;
  }
</style>