<template>
<div id="main-container">
  <ul id="nav">
    <li class="nav-item">
      <router-link :to="{ name: 'Home'}">Home</router-link> 
    </li>
    <li class="nav-item">
      <router-link to="/about">About</router-link> 
    </li>
    <li class="nav-item">
      <router-link to="/notice">Notice</router-link> 
    </li>
    <li class="nav-item">
      <router-link to="/surveylist">Surveylist</router-link>
    </li>
  </ul>

  <div class="container">
   <div >
     <ul class="service-title">
       <li>
         <h1 id="surveasy" @click="this.$router.push('/')">SURVEASY</h1>
       </li>
       <li v-if="!this.$store.state.loginstatus" class="loginbtn">
         <router-link :to="{ name: 'Login'}">
          <button>Login</button>
         </router-link>
       </li>
       <li v-else class="loginbtn">
         <button @click="logout">logout</button>
       </li>
     </ul>
     
     
  </div>
   <router-view/> 
  </div>
  
  
  
</div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  components: {Login},
  data(){
    return{
      
    }
  },
  methods: {
    gotologin(){
      this.$router.push('/login')
    },
    logout(){
      this.$store.commit("togglelogin")
      this.$router.push('/')
    }
    
  },
  
}
</script>

<style>
* {
  /* border: 1px solid black */
  margin: 0;
}

ul {
  margin: 0;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  
  color: #2c3e50;
}

#main-container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

#nav {
  padding: 0;
  width: 150px;
  border-right: 3px solid black;
  margin: 0;
  background: black;
  
  
  
}

.service-title{
  
  width: 100%;
  border-bottom: 3px solid black;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  list-style: none;
  background: black;
  padding-left: 0;

}
.loginbtn {
  margin: auto;
  margin-right: 30px;
  
}

.loginbtn button {
  border-radius: 20px;
	border: 1px solid grey;
	background-color: grey;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

#surveasy {
  color: chartreuse;
  cursor: pointer;
}

.nav-item {
  font-weight: bold;
  
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item a{
  color: white;
  text-decoration: none;
  padding: 10px;
}

.nav-item:first-child {
  padding-top: 120px;
}

#nav a.router-link-exact-active {
  color: green;
}

#nav a.router-link{
  color: azure !important;
}

.container {
  width: 100%;
  
}

a {
  text-decoration-line: none;
}

a:visited{
  color: #2c3e50;
} 
</style>
