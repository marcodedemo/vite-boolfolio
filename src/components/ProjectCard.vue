
/* --------------------------------- js --------------------------------- */
<script>


export default {
  data() {
    return {

      imgBaseUrl: 'http://127.0.0.1:8000/',

      

    }
  },

  props:{
    project: Object,
  },


}



</script>


/* ---------------------------------- html ---------------------------------- */
<template>

<div class="card" style="width: 18rem;">
      
    <img :src="project.cover_image ? this.imgBaseUrl + 'storage/' + project.cover_image : 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'" class="card-img-top" alt="">
    
    <div class="card-body">
        <h5 class="card-title">{{project.title}}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a :href="project.link" class="btn btn-primary">Github Link</a>
    </div>

</div>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss">

</style>
