<template>
  <div class="containers">
    <p>스토리보드 #2</p>
  <button @click="togglelogin">login</button>
  </div>
</template>

<script>
export default {
  
  methods: {
    togglelogin(){
      this.$store.commit("togglelogin")
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>