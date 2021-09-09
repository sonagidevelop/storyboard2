<template>
  <div >
    
    <router-link :to="{ name: 'NoticeDetail'}">
      <p>{{notice.title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'notice'
  ]

}
</script>

<style>

</style>