
/* --------------------------------- js --------------------------------- */
<script>
import axios from 'axios';

import ProjectCard from './components/ProjectCard.vue';

export default {
  data() {
    return {

      projects: [],

    }
  },

  components : {
    ProjectCard,
  },



  created(){

    this.apiCall();
  },

  methods: {

    apiCall(){

      axios.get('http://127.0.0.1:8000/api/projects').then(res =>{

        this.projects = res.data.results;

        console.log(this.projects)

      })
    },
  },

}



</script>


/* ---------------------------------- html ---------------------------------- */
<template>

<div class="container">

  <h1 class="py-3">Projects</h1>
  
  <div id="card-container" class="d-flex flex-wrap gap-4">
    
    <ProjectCard :project="project" v-for="project in projects"></ProjectCard>
    
  </div>
  
</div>

</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss">

</style>
