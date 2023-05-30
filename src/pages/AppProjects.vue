
/* --------------------------------- js --------------------------------- */
<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';


export default {
  data() {
    return {

    projects: [],
      totalPages: 0,
      currentPage:1,

    }
  },
  
  components: {
    ProjectCard,

  },

    created(){

        this.apiCall();
    },

    methods: {

        apiCall(){

        axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage).then(res =>{

            this.projects = res.data.results.data;

            this.totalPages = res.data.results.last_page;

            console.log(res)

        })
        },

        nextPage(){
        if(this.currentPage < this.totalPages){

            this.currentPage++;
            this.apiCall();
        }
        },

        prevPage(){
        if(this.currentPage > 1){

            this.currentPage--;
            this.apiCall();
        }
        },
    },
}

</script>


/* ---------------------------------- html ---------------------------------- */
<template>

  <div class="container">

    <h1 class="py-3">Projects</h1>

    <div v-if="this.projects.length > 0" id="cards-page-container">

      <div id="card-container" class="d-flex flex-wrap gap-4">
        
        <ProjectCard :project="project" v-for="project in projects"></ProjectCard>
        
      </div>
      
      <div id="pagination" class="d-flex justify-content-center gap-5 py-3 fs-2 ">
        
        <div @click="prevPage" class="back"><i class="fa-solid fa-arrow-left"></i></div>
        <div @click="nextPage" class="next"><i class="fa-solid fa-arrow-right"></i></div>
        
      </div>
      
    </div>

    <div v-else class="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

  </div>


</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss" scoped>
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
