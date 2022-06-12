<template>
      <div>
            <div class="productadmin-container">
                  <div class="main-productadmin-container">
                        <div class="sub-productadmin-container"> 
                              <span style="font-size: 1.3rem; color: gray"><b>Product</b></span>
                        </div>
                        <div>
                               <div class="container-font-awesome-icon">
                                                       
                                                      <!-- check alert inform -->
                                                                  <!-- Button trigger modal -->
                                                                  <div class="container-btn">
                                                                        <button style="color: black;border: 1px solid #007bff; margin-left: 60vw;" type="button" class="btn btn-primary btn-color-margin" data-toggle="modal" data-target="#staticBackdrop" >
                                                                              Add New
                                                                        </button>
      	                                                      </div>
                                                                        <!-- Modal -->
                                                                        <div style="margin-left: -16vw" class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                        <div class="modal-dialog">
                                                                        <div  style="width:40vw; height: 75vh; margin-left: 14vw; margin-top: 20vh" class="modal-content">
                                                                              <div class="modal-header-conatiner">
                                                                              
                                                                                    <div class="header-column2" style="display: block">

                                                                                          <div class="modal-header" style="width: 39vw; justify-content: center; text-align: center;">
                                                                                          <h5 class="modal-title" id="staticBackdropLabel">
                                                                                                Add New Product 
                                                                                          </h5>
                                                                                          <button style="position: absolute; top: 5px; padding-left: 33vw" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                          <span aria-hidden="true">&times;</span>
                                                                                          </button>
                                                                                          </div>
                                                      
                                                                                          <div class="modal-body input-category" style="width: 55vw;">
                                                                                                <div style="padding-left: 3.7vw">
                                                                                                    <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="name-product-category" placeholder="Title">  
                                                                                                </div>
                                                                                                 <div style="padding-left: 3.7vw">
                                                                                                     <!-- <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="description-product-category" placeholder="Category">  -->
                                                                                                     <select style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" name="" id="">
                                                                                                           <option value="" disabled selected>Categories</option>
                                                                                                           <option value="Labtop">Labtop</option>
                                                                                                     </select>
                                                                                                </div>
                                                                                                 <div style="padding-left: 3.7vw">
                                                                                                     <!-- <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="description-product-category" placeholder="Category">  -->
                                                                                                     <select style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" name="" id="">
                                                                                                           <option value="" disabled selected>Sub-Categories</option>
                                                                                                           <option value="Labtop">Labtop</option>
                                                                                                     </select>
                                                                                                </div>
                                                                                                <div style="padding-left: 3.7vw">
                                                                                                     <!-- <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="description-product-category" placeholder="Category">  -->
                                                                                                     <select style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" name="" id="">
                                                                                                           <option value="" disabled selected>Brand-Name</option>
                                                                                                           <option value="Labtop">Labtop</option>
                                                                                                     </select>
                                                                                                </div>
                                                                                                <div style="padding-left: 3.7vw">
                                                                                                    <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="name-product-category" placeholder="Price">  
                                                                                                </div>
                                                                                                <div style="padding-left: 3.7vw">
                                                                                                    <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="name-product-category" placeholder="Description">  
                                                                                                </div>
                                                                                                <div style="padding-left: 2.7vw">
                                                                                                    <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="file" class="name-product-category" value="add image" accept="image/png, image/jpeg">  
                                                                                                </div>

                                                                                                <!-- <div style="padding-left: 3.7vw">
                                                                                                     <input style="width: 30vw; height: 5vh; padding-left: 1vw;margin-bottom: 2vh;" type="text" class="description-product-category" placeholder="Description"> 
                                                                                                </div>
                                                                                               <div style="padding-left: 3.7vw">
                                                                                                   <input style="width: 30vw; height: 5vh; padding-left: 1vw;" type="text" class="text-product-category" placeholder="ImageURL">  
                                                                                               </div> -->
                                                                                               
                                                                                          </div>
                                                                                          <div class="modal-footer b">
      
                                                                                                <div style="padding-left: 24vw; margin-top: 3vh;display: flex">
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
            </div>
      </div>
</template>
<style scoped>
.productadmin-container{
           /* border: 1px solid black; */
      position: absolute;
      width: 90%;
      height: 100%; 
}
.main-productadmin-container{
      margin-top: 2vh;
      width: 100%;
      height: 6vh;
      /* border: 1px solid black; */
      /* background-color: gray; */
      display: grid;
      grid-template-columns: auto auto auto;
      justify-content: center;
      align-items: center;

    background: #fafafa;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%); 
}
</style>