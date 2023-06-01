
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

<div class="card">
      
    <img :src="project.cover_image ? this.imgBaseUrl + 'storage/' + project.cover_image : 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'" class="card-img-top" alt="">
    
    <div class="card-body">

      <h5 class="card-title">{{project.title}}</h5>
      <p class="card-text">{{ project.description }}</p>

      
    </div>

    <div class="button-container d-flex justify-content-between p-3">

      <router-link :to="{name: 'projects.show', params: {slug: project.slug}}" class="btn btn-outline-info">Project Details</router-link>
      <a :href="project.link" class="btn btn-primary">Github Link</a>
      
    </div>

</div>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss">

.card{
  
  width: calc(100% / 4 - (20px * 3 / 4));
  height: 400px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
