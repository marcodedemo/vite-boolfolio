
/* --------------------------------- js --------------------------------- */
<script>
export default {
    name: 'AppHome',

  data() {
    return {

      

    }
  },
}

</script>


/* ---------------------------------- html ---------------------------------- */
<template>

<div class="container">

    <h1 class="py-3">Benvenuto nella homepage</h1>

    <router-link :to="{name:'projects'}">Vai alla pagina dei progetti</router-link>

    
</div>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss" scoped>

</style>
