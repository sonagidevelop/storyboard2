<template>
<div class="containers">
  <p>스토리보드 #9</p>
  <h1>surveylist</h1>
  <div v-for="survey in surveylist" :key="survey.id">
    
    <router-link :to="{ name: 'SurveyDetail'}">{{survey.title}}</router-link>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      surveylist:[
        {title: 'survey1', author:'survey1writer', id:1},
        {title: 'survey2', author:'survey2writer', id:2},
        {title: 'survey3', author:'survey3writer', id:3},
        {title: 'survey4', author:'survey4writer', id:4}

    ]
    }
    
  }
}
</script>

<style>

</style>