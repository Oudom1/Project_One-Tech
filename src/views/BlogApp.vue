<template>
      <div class="containeri">
            <div class="sub-containeri">
                  <div class="containeri-category">
                        <div class="sub-containeri-category">
                              <div class="item-categories-product">
                                    <div class="box-menu-text">
                                          <button style="width:2.5vw; height:5vh; border-radius: 50%;" type="button" class="shadow-none btn">
                                                <span class="line"></span>
                                                <span class="line"></span>
                                                <span class="line"></span>
                                          </button>
                                    </div>
                                    <div class="box-categories-text">
                                          <span><h5>CATEGORIES</h5></span>
                                    </div>
                              </div>
                   <div class="techno-container">
                              <div class="item-group-techno">
                                    <div>
                                          Laptop
                                    </div>
                                    <div>
                                          <font-awesome-icon class="icon" icon="fa-angle-right" />
                                          
                                    </div>
                              </div>
                        </div>
                  </div>
                        <div class="sub-containeri-item">
                              hello
                        </div>
                  </div>
            </div>
      </div>
</template>

<style scoped>
.containeri{
      width: 100%;
      height: 100%;
      margin-top:50vh;
      border: 1px solid black;
      position: absolute;
}
.sub-containeri{
      margin-top: 2vw;
      width: 100%;
      height: 90%;
      position: relative;
      padding-left: 10vw;
      border: 1px solid black;
}
.containeri-category{
      display: flex;
      border: 1px solid black;
      width: 80vw;
      height: 100%;
      position: absolute;
}
.sub-containeri-category{
      border: 1px solid black;
      width: 40%;
      height: 100%;
      margin-right: 3vw;
      position: relative;
}
.sub-containeri-item{
      border: 1px solid black;
      width: 100%;
      height: 100%;
      position: relative;
      justify-content: center;
      align-items: center;
}
.item-categories-product{
     display: flex;
}
.box-menu-text{
      width: 4vw;
      background-color: orange;
      justify-content: center;
      align-items: center;
      padding-top: 0.8vh;
      padding-left: 1px;
      
}
.line{
    display: block;
    width: 25px;
    height: 2px;
    background-color: rgb(237, 170, 15);
    border-radius: 4px;
    margin-block: 7px;
    border: none;
    padding-top: 1px;
    margin-top: -0.2px;
    margin-left: -5px;
}
.shadow-none{
      margin-left: 0.6vw;
      border: 1px solid #fff;
      background-color: #fff;
       justify-content: center;
      align-items: center;
     
      
      
}
.box-categories-text{
      padding-top: 1.3vh;
      width: 20vw;
      height: 7vh;
      padding-left: 2vw;
      background-color: black;
      color: white;
}
.techno-container{
background-color: gray;
width: 100%;
height: 50vh;
padding-top: 1vh;
}
.item-group-techno{
      margin-top: 3vh;
      display: flex;
      justify-content: space-between;
      margin-left: 1vw;
      margin-right: 1vw;
      padding-bottom: 1vh;
      border-bottom: 1px solid black;
      
}
</style>>
      
