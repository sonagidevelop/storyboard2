<template>
<div class="containers">

  <h1>notice</h1>
  <p>스토리보드 #7</p>
  <div v-for="notice in noticelist" :key="notice.id">
    <NoticeItem :notice="notice"/>
    
  </div>
</div>
</template>

<script>
import NoticeItem from '../components/NoticeItem.vue'

export default {
  components: {NoticeItem},
  data(){
    return {
      noticelist:[
        {title: 'notice1', author:'notice1writer', id:1},
        {title: 'notice2', author:'notice2writer', id:2},
        {title: 'notice3', author:'notice3writer', id:3},
        {title: 'notice4', author:'notice4writer', id:4}

    ]
    }
    
  }

}
</script>

<style>

</style>