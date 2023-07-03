
/* --------------------------------- js --------------------------------- */
<script>


export default {
  name: 'AppHome',

  data() {
    return {

    }
  },

  mounted() {
    AOS.init();
  }
}
</script>


/* ---------------------------------- html ---------------------------------- */
<template>

<div class="container">


  <router-link :to="{name:'projects.index'}">Vai alla pagina dei progetti</router-link>

    
</div>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss" scoped>

</style>
