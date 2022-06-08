<template>
    <div class="dropdown" >
        <div style="width: 290px; height: 60px; margin-left: 300px; padding-left: 35px;" class="clc w-60 bg-primary" href="#" data-toggle="dropdown" data-flip="false">
          <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
            <div class="cat_burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="cat_menu_text">categories</div>
          </div>
        </div>
        <ul class="dropdown-menu" style="width: 290px">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-flip="false">Submenu</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Submenu</a></li>
                    <li><a class="dropdown-item" href="#">Submenu0</a></li>
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                            <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                        </ul>
                    </li>
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                            <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style>
.dropdown-menu li:hover > ul.dropdown-menu {
    display: block;
      border: 0px;
}
.dropdown-submenu {
    position:relative;
}
.dropdown-submenu>.dropdown-menu {
    top:0;
    left:100%;
    margin-top:-20px;
    border: 0px;
}

/* rotate caret on hover */
.dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(90deg);
          border: 0px;

}
.cat_menu_title {
  height: 100%;
}
.cat_burger {
  width: 18px;
  height: 16px;
}
.cat_burger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    margin-bottom: 5px;
    
}
.cat_menu_text {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    margin-left: 20px;
}
</style>
