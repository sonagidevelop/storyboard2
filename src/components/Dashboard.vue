<template>
<div class="dashboard">
  
  <div v-if="!this.$store.state.loginstatus">
    <LN />
  </div>
  <div v-if="this.$store.state.loginstatus && !this.$store.state.usingservice">
    <LOSX />
  </div>
  <div v-if="this.$store.state.loginstatus && this.$store.state.usingservice">
    <LOSO />
  </div>

  
</div>
</template>

<script>
import LN from './Dashboards/LN.vue'
import LOSO from './Dashboards/LOSO.vue'
import LOSX from './Dashboards/LOSX.vue'
export default {
  components: {LN, LOSO, LOSX},
  data() {
    return{

    }
  }

}
</script>

<style>
.dashboard  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  
  
}
</style>