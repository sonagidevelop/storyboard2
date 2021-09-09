<template>
<div class="containers">
  <p>스토리보드 #4</p>
  <p>설문업로드페이지(결제 생략)</p>
  
  <button @click="uploadcomplete">완료</button>
</div>
</template>

<script>
export default {
  methods: {
    uploadcomplete(){
      this.$store.commit("toggleservice")
      this.$router.push('/')
    }
  }
}
</script>

<style>
.containers{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

</style>