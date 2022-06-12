<template>
      <div>
            <form action="" class="sub-cotegory-container">
                  <div class="main-sub-cotegory-container">
                        <div class="name-sub-category">
                              <input type="text" placeholder="Name">
                        </div>
                        <div class="selecte-sub-category">
                              <span style="margin-right: 2vw; ">Choose a Category</span>
                              <select name="" id="">
                                    <option value="" disabled selected>Categories</option>
                                    <option value="Labtop">Labtop</option>
                                    <option value="Desktop">Desktop</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Watch">Watch</option>
                                    <option value="Motherboard">Motherboard</option>
                                    <option value="Keyboard">Keyboard</option>
                              </select>
                        </div>
                        <div>
                              <button>Add new</button>
                        </div>
                  </div>
                  <div class="sub-main-sub-category-container">

                  </div>
            </form>
      </div>
</template>
<style scoped>
.sub-cotegory-container{
      /* border: 1px solid black; */
      position: absolute;
      width: 90%;
      height: 100%;
}
.main-sub-cotegory-container{
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
input{
      border-radius: 4px;
      padding-left: 1vw;
      position: relative;
}
input:focus {
	outline: none;
  	border: 3px solid #007bff;
      border-radius: 4px;      
}
.name-sub-category{
      margin-right: 15vw;
}
.selecte-sub-category{
       margin-right: 15vw;
}
select{
      width: 10vw;
      height: 5vh;
      border-radius: 4px;
}
select:focus{
     outline: none;
  	border: 3px solid #007bff;
      border-radius: 4px;   
}
button{
      width: 8vw;
      height: 5vh;
      border-radius: 4px;
      border: 3px solid #007bff;
      background-color: #007bff;
      color: white;
}
button:hover{
      background-color: #ced1d4;
}
</style>