
/* --------------------------------- js --------------------------------- */
<script>

import axios from 'axios';



export default {
  data() {
    return {

        baseUrl: 'http://127.0.0.1:8000',
        projectSlug: '',
        project: {},
        projectFound: false,
        isLoading: true,
        error: '',
    
    }
  },
  
  

    created(){
        
        this.projectSlug = this.$route.params.slug;

        this.apiCall();
    },
    
    methods: {
        
        apiCall(){
            
            axios.get(this.baseUrl + '/api/projects/' + this.projectSlug).then(res =>{
            
                console.log(res)
            this.project = res.data.response;

            
            this.isLoading = false;

            if(res.data.success) {

                this.project = res.data.response;
                this.projectFound = true;

            } else {

                this.projectFound = false;
                this.error = res.data.error;
            }

            })
        },

    },

    computed: {

        getImage(){

            return this.baseUrl + '/storage/' + this.project.cover_image;
        }
    }
}

</script>


/* ---------------------------------- html ---------------------------------- */
<template>

    <div v-if="isLoading" id="spinner-container" class="container">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

  <div v-else class="container">

    <div v-if="projectFound" id="project">

        <h1 class="pt-3">{{ this.project.title }}</h1>
        <h5>{{ this.project.type?.name }}</h5>
        
        <hr>
        
        <h3>Technologies:</h3>
        <div id="technologies-container" class="d-flex gap-3">
            <div v-for="technology in this.project.technologies" class="tech-logo">
                <img :src="'../../public/img/logos/' + technology.name + '.png'" alt="">
            </div>
        </div>
        
        <hr>
        
        <div id="project-image">
            <img :src="getImage" alt="">
        </div>
        
        <hr>
        
        <h3>Description:</h3>
        
        <p>{{this.project.description}}</p>
        
        <hr>
        
        <span>
            <strong>Execution Date: </strong>
            {{ this.project.execution_date }}
        </span>
        
    </div>

    <div v-else>
        <div class="alert alert-danger" role="alert">
        {{ this.error }}
      </div>
    </div>


  </div>


</template>


/* ----------------------------------- css ---------------------------------- */
<style lang="scss" scoped>

.tech-logo{
    width: 50px;
    height: 50px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

#project-image{
    max-width: 400px;

    img{
        width: 100%;
    }
}

#spinner-container{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 400px;
    padding-bottom: 400px;
}

.alert{
    margin: 50px 0 ;
}

</style>
