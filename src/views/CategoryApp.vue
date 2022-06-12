<template>
      <div class="category-container">
            <div class="main-container-category">
                  <div class="text-category-main">
                        <div>
                              <span style="color:#818990"><b><h4>Category</h4></b></span>
                        </div>
                        <div>
                            <div class="container-font-awesome-icon">
                                                       
                                                      <!-- check alert inform -->
                                                                  <!-- Button trigger modal -->
                                                                  <div class="container-btn">
                                                                        <button style="color: black;border: 1px solid black" type="button" class="btn btn-primary btn-color-margin" data-toggle="modal" data-target="#staticBackdrop" >
                                                                              Add New
                                                                        </button>
      	                                                      </div>
                                                                        <!-- Modal -->
                                                                        <div style="margin-left: -16vw" class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                        <div class="modal-dialog">
                                                                        <div  style="width:40vw; height: 60vh; margin-left: 14vw; margin-top: 20vh" class="modal-content">
                                                                              <div class="modal-header-conatiner">
                                                                              
                                                                                    <div class="header-column2" style="display: block">

                                                                                          <div class="modal-header" style="width: 39vw; justify-content: center; text-align: center;">
                                                                                          <h5 class="modal-title" id="staticBackdropLabel">
                                                                                                Add New Category
                                                                                                
                                                                                          </h5>
                                                                                          <button style="position: absolute; top: 5px; padding-left: 33vw" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                          <span aria-hidden="true">&times;</span>
                                                                                          </button>
                                                                                          </div>
                                                      
                                                                                          <div class="modal-body input-category" style="width: 55vw;">
                                                                                                <div style="padding-left: 3.7vw">
                                                                                                    <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="name-product-category" placeholder="Name">  
                                                                                                </div>
                                                                                                <!-- <div style="padding-left: 3.7vw">
                                                                                                     <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="description-product-category" placeholder="Description"> 
                                                                                                </div>
                                                                                               <div style="padding-left: 3.7vw">
                                                                                                   <input style="width: 30vw; height: 5vh; padding-left: 1vw;" type="text" class="text-product-category" placeholder="ImageURL">  
                                                                                               </div> -->
                                                                                               
                                                                                          </div>
                                                                                          <div class="modal-footer b">
      
                                                                                                <div style="padding-left: 24vw; margin-top: 15vh;display: flex">
                                                                                                      <div>
                                                                                                            <button style="height: 5vh; margin-right: 0.5vw; margin-left: 1vw;" type="button" class="btn btn-secondary Add-to-card-item" data-dismiss="modal">Cancel</button>
                                                                                                      </div>
                                                                                                      <div>
                                                                                                            <button style="height: 5vh; margin-right: 0.5vw; margin-left: 1vw;" type="button" class="btn btn-primary Add-to-card-item">Confirm</button> 
                                                                                                      </div>
                                                                                                   

                                                                                                    
                                                                                                    <!-- <button class="Add-to-card-item" style="height: 5vh; margin-right: 0.5vw; margin-left: 1vw;" >Cancel</button> -->
                                                                                                    <!-- <button class="Add-to-card-item" style="height: 5vh; margin-right: 0.5vw; margin-left: 1vw;" >Confirm</button> -->
                                                                                                    
                                                      
                                                                                                </div>
                                                                                          
                                                                                          </div>
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                                    </div>
                                                                              </div>
                                                                             
                                                                        <!-- end model -->
                                                </div>
                        </div>
                  </div>
                  <div class="sub-container-category">

                  </div>
            </div>
      </div>
</template>

<style scoped>
.category-container{
      width: 100%;
      height: 100%;
      position: relative;
      /* border: 1px solid black; */
      margin-top: 3vh;
}
.text-category-main{
      display: flex;
      justify-content: space-between;
}
.container-btn{
      padding-bottom: 1vh;
}
.btn-color-margin{
      background-color: white;
      
      
}
.btn-color-margin:hover{
       background-color: #007bff;
}
.icon-color{
      color: white;
}
.icon-color:hover{
      background-color: #007bff;
}

.modal-header-conatiner{
      display: flex;
}
/* .modal-dialog{
      
} */

.brand-product{
      display: flex;
      justify-content: flex-start;
}
.Availability{
      display: flex;
      justify-content: space-between;
}
.header-column2{
      position: relative;
      /* border: 1px solid black; */
      width: 36vw;
      padding-top: 5vh;
}
.star-icon-product{
      margin-top: 2vh;
}
.modal-body{
      width: 36vw;
      padding-right: 15vw;
}
.modal-footer {
      width: 39vw;
      display: flex;
      justify-content: flex-start;
}
.test {
      margin-top: 20px;
}
.input-item-products{
      width: 4vw;
      height: 5vh;
      justify-content: center;
      text-align: center;
      margin-left: 0.2vw;
}
.Add-to-card-item{
      background-color: #0e8ce4;
      border-color: #0e8ce4;
      color: white;
      font-size: 1rem;
}
.Add-to-card-item:hover{
      background-color: #333;
      border-color: #333;
}
.wishlist-item-product{
      background-color: #fdb913;
      border-color: #fdb913;
}
.wishlist-item-product:hover{
     background-color: #333;
      border-color: #333;
}
.input-category{
      justify-content: center;
      align-items: center;
}
input:focus {
	outline: none;
  	border: 3px solid #007bff;
      border-radius: 4px;
       
}
</style>>
      
