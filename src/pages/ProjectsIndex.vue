
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
      types: [],
      selectedTypeId: '',
      isLoading: true,
      projectFound: false,
      error: '',


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

        axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage + '&type_id=' + this.selectedTypeId).then(res =>{
          console.log(res)

          this.isLoading = false;

          console.log(res.data.success)

          if(res.data.success){

            this.totalPages = res.data.results.last_page;
  
            this.types = res.data.types;

            this.projectFound = true;

            if(this.selectedTypeId == ''){

              this.projects = res.data.results.data;
  
            }else{

              this.projects = res.data.results;
  

            }


          }else{

            this.projectFound = false;
            this.error = res.data.error;
            
          }

          
          


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

        changePage(page){
          this.currentPage = page;
          this.apiCall();
        }
    },
}

</script>


/* ---------------------------------- html ---------------------------------- */
<template>

  <div class="container">

    <h1 class="py-3">Projects</h1>

    <form class="py-3">

      <select class="form-select" name="type_id" id="type_id" v-model="selectedTypeId" @change="apiCall()">
        <option value="">Tutte le categorie</option>
        <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>
      </select>

    </form>

    <div v-if="!this.isLoading" id="cards-page-container">

      <div v-if="projectFound" id="cards-container">

        <div id="single-card-container" class="d-flex flex-wrap">
          
          <ProjectCard :project="project" v-for="project in projects"></ProjectCard>
          
        </div>
        
        <div v-if="this.totalPages > 1" id="pagination-container" class=" container d-flex justify-content-center gap-5 py-3 fs-2 pt-5">
          
          <ul class="pagination py-3 pt-5">
            <li @click="this.prevPage()" :class="this.currentPage == 1 ? 'disabled' : ''" class="page-item"><a class="page-link">Previous</a></li>
            
            <li @click="this.changePage(page)" v-for="page in this.totalPages" :class="this.currentPage == page ? 'active' : ''" class="page-item"><a class="page-link" href="#">{{ page }}</a></li>
            
            <li @click="this.nextPage()" :class="this.currentPage == this.totalPages ? 'disabled' : ''" class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        
        </div>

      </div>


      <div v-else class="alert alert-danger" role="alert">
        {{ this.error }}
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

  #single-card-container{
    gap: 20px;
  }
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
