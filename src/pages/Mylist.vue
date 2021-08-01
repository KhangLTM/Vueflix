<template>
  <div>
      <Header/>
      <div>
          <div class="myListContainer">
                <div class="myListContent" v-for="movie in list" :key=movie.imdbID>
                    <div v-if="idMovieWatched.includes(movie.imdbID)" class='seenMovie'>
                        <img @click="navigateFlim(movie.imdbID)" :src="movie.Poster" >
                    </div>
                    <div v-else class='Movie'>
                        <img  @click="navigateFlim(movie.imdbID)" :src="movie.Poster" >
                    </div>                 
                    <div class="btnList">
                        <button class=" checked"
                            v-if="idMovieWatched.includes(movie.imdbID)"
                            @click="removeWatched(movie)"
                        >
                            <v-icon name="check" scale="1.2" color="#010"/>
                        </button>                        
                        
                        <button class=" checked checkWatched"
                                v-else
                                @click="markAsWatched(movie),markAsWatchedToast()"
                        
                        >
                            <v-icon name="check" scale="1.2" color="#00e500"/>
                        </button>
                        
                        <button class=" removeList"
                            @click="removeData(movie),removeToast()"
                        >
                            <v-icon name="trash" scale="1.2" color="#e50931" />
                        </button>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Icon from "vue-awesome/components/Icon"
import {mapGetters, mapMutations, mapState} from "vuex"
export default {
  
  components: { 'v-icon':Icon, Header },
  
  computed:{
      ...mapState(['list','movieWatched']),
      ...mapGetters(['idMovieWatched'])
},


  methods:{
      ...mapMutations(['markAsWatched','removeWatched','removeData']),

    removeToast() {
        this.$toast.open({
            message: "Remove Successfully",
            type: "error",
            duration: 3000,
            dismissible: true,
            queue: false,
            position: "top-right"
        })
    },
    markAsWatchedToast() {
      this.$toast.open({
        message: " Added to your list",
        type: "success",
        duration: 3000,
        dismissible: true,
        queue: false,
        position: "top-right"
      });
    },  
      
    navigateFlim(idflim){
        this.$router.push({ name: "Detail", params: { id: idflim } });
    },

  }
}

</script>

<style lang='stylus'>
    .myListContainer
        display flex
        flex-wrap wrap
    .myListContent
        padding 2rem
        display flex
        flex-direction columm
        flex-wrap wrap
        justify-content center
    .Movie         
        width 60%
        transition all 0.4s
        cursor pointer
        &:hover
            transform scale(1.05)
        @media (max-width:820px)
            width 90%    
    
    .seenMovie       
        @extends .Movie         
        opacity 0.4

    .btnList
        display flex
        justify-content center
        align-items center
        width 80%
        @media (max-width:820px)
            align-items center
            width 100%
    
    .checked
        width 37%    
        border-radius 5px
        margin-right 5px
        margin-top 1rem
        background-color rgba(42, 45, 47, 0.5)
        cursor pointer
        transition all 0.4s ease
        &:hover
            transform scale(1.1)
            background-color rgba(42, 45, 47, 0.9)
        @media (max-width:820px)
            width 50%
    .removeList
        @extends .checked

</style>