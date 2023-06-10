
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

  <div class="card" :style="{ backgroundImage: `url(${imgBaseUrl}storage/${project.cover_image})` }">

    <div class="card-content">

      <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
          
        <h5 class="card-title">{{project.title}}</h5>
        <p class="card-text">{{ project.description }}</p>
          
          
        
        <div class="button-container d-flex justify-content-center align-items-center p-3">
          
          <router-link :to="{name: 'projects.show', params: {slug: project.slug}}" class="btn btn-outline-info">Visualizza Dettagli</router-link>
          <a :href="project.link" class="btn btn-primary">Link Github</a>
          
        </div>
        
      </div>
    </div>
  </div>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss">

.card{

  position: relative;
  
  width: calc(100% / 3 - (20px * 2 / 3));
  height: 300px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border: 1px solid rgb(0, 0, 0);

  overflow: hidden;


  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: all .5s;
  }

  &:hover::after{
    opacity: 1;
  }

  &:hover .card-content{
    top: 10px;

  
  }

  &:hover .card-title{
    padding-bottom: 10px;
  }

  .card-content{
    position: absolute;
    top: 100%;
    left: 0;

    padding: 10px;

    z-index: 1;

    width: 100%;

    transition: all .5s ease;

    .card-body{
      gap: 10px;
      
      .card-title{
        color: white;
      }
      
      .card-text{

        color: white;
      }

      .button-container{
        gap: 10px;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .button-container{
    flex-direction: column;
  }  
}

@media screen and (max-width: 992px) {
  .card{
  width: calc(100% / 2 - (20px * 1 / 2));

  }
}

@media screen and (max-width: 768px) {
  .card{
  width: calc(100% - 20px);
  margin: 0 auto;

  }
}


</style>
