<template>
    <div class="login">
        <input type="text" v-model="username">
        <input type="password" v-model="pwd">
        <button @click="login">login</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            pwd: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch("actionLogin", {
        username: this.username,
        password: this.pwd,
        success: loginData => {

          // for (const key in loginData) {
          //    localStorage.setItem(key, loginData[key])
          // }
          this.$router.push("/");
          
        },
        fail: res => {
        }
      });
        }
    }
}
</script>