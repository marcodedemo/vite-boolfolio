
/* --------------------------------- js --------------------------------- */
<script>
export default {
  data() {
    return {

      

    }
  },
}

</script>


/* ---------------------------------- html ---------------------------------- */
<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: home}">Boolfolio</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" aria-current="page" :to="{name: home}">Home</router-link>
        <a class="nav-link" href="#">Features</a>
      </div>
    </div>
  </div>
</nav>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss" scoped>

</style>
