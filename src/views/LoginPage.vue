<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      const result = await res.json();
      if (!result.success) {
        alert(result.error);
        return;
      }

      this.$router.push({ name: "/" });
    },
  },
};
</script>
<template>
  <main>
    <div class="main">
    <div class="Main_login_register">
      <div class="cont">
        <div class="form sign-in">
          <h2>Sign In</h2>
          <form action="POST" @submit="onSubmit">
          <label>
            <span>Email Address</span>
            <input type="email" name="email" v-model="email">
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" v-model="password">
          </label>
          <button class="submit" type="submit" id="Sign_In" @onclick="onSubmit">Sign In</button>
          <p class="forgot-pass">Forgot Password</p>

          <div class="social-media">
            <ul>
              <!-- <li><img src="../assets/facebook.png" alt="facebook"></li>
              <li><img src="../assets/twitter.png" alt="twitter"></li>
              <li><img src="../assets/linkedin.png" alt="linkedin"></li>
              <li><img src="../assets/instagram.png" alt="instragram"></li> -->
            </ul>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>
<style scoped>
  .Main_login_register,  .Main_login_register::before, .Main_login_register::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .Main_login_register{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgb(182, 34, 208) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
    /* background-color: -webkit-lenear-gradient(left, #7579ff, #b224ef); */
    /* background-color: #b224ef; */
  }
  input, button{
    border: none;
    outline: none;
    background: none;
  }
  .cont{
    overflow: hidden;
    position: relative;
    width: 650px;
    height: 500px;
    margin-top: 15vh;
    background: #fff;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 32px;
  }
  .form{
    position: relative;
    width: 640px;
    height: 100%;
    padding: 50px 30px;
    -webkit-transition: -webkit-transform 1.2s ease-in-out;
    transition: -webkit-transform 1.2s ease-in-out;
    transition: transform 1.2s ease-in-out;
    transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  }
  h2{
    width: 100%;
    font-size: 30px;
    text-align: center;
  }
  label{
    display: block;
    width: 260px;
    margin: 25px auto;
    text-align: center;
  }
  label span{
    font-size: 14px;
    font-weight: 600;
    color: #505f75;
    text-transform: uppercase;
  }
  input{
    display: block;
    width: 100%;
    margin-top: 5px;
    font-size: 16px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(109,93,93, 0.4);
    text-align: center;
  }
  #Sign_In{
    display: block;
    margin: 0 auto;
    width: 260px;
    height: 36px;
    border-radius: 30px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
  .submit{
    margin-top: 40px;
    margin-bottom:30px;
    text-transform: uppercase;
    font-weight: 600;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgb(182, 34, 208) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
  }
  .submit:hover{
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(0,212,255,1) 100%, rgba(9,9,121,1) 50%, rgb(182, 34, 208) 0% );
  }
  .forgot-pass{
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #0c0101;
    cursor: pointer;
  }
  .forgot-pass:hover{
    color: red;
  }
  .socail-media{
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .socail-media ul{
    list-style: none;
  }
  .social-media ul li{
    display: inline-block;
    cursor: pointer;
    margin: 25px 15px;
  }
  .social-media img{
    width: 40px;
    height: 40px;
  }
  .sub-cont{
    overflow: hidden;
    position: absolute;
    left: 640px;
    top: 0;
    width: 900px;
    padding-left: 250px;
    background: #fff;
    -webkit-transition: -webkit-transform 1.2s ease-in-out;
    transition:  -webkit-transform 1.2s ease-in-out;
    transition: transform 1.2s ease-in-out;
  }



</style>