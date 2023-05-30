
/* --------------------------------- js --------------------------------- */
<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {

      

    }
  },

  components : {
    AppHeader,
    AppFooter,
  },

}



</script>


/* ---------------------------------- html ---------------------------------- */
<template>

<AppHeader></AppHeader>

<router-view></router-view>

<AppFooter></AppFooter>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss">



</style>
