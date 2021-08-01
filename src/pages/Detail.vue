<template>
  <div>
      <Header/>
      <div class="detailContain">
            <div class="top">
                <div id="starIcon">
                    <v-icon name="star" scale="1.2" color="#e50931" />
                    <v-icon name="star" scale="1.2" color="#e50931" />
                    <v-icon name="star" scale="1.2" color="#e50931" />
                    <v-icon name="star" scale="1.2" color="#e50931" />
                    <v-icon name="star" scale="1.2" color="#e50931" />
                </div>
                <div id="trailerIcon">
                    <p>Trailer of the flim</p>
                    <v-icon name="ticket-alt" scale="1.8" color="#e5e5e5" />
                </div>
                
            </div>
            
            <div id="videoContainer">
                <youtube :video-id="this.trailerID" ref="youtube"></youtube>
                
            </div>        
            <div v-show="showLoading" class="loadingSpinner">
                         <spinner />
                </div>
        <div class="detailDescriptions">
                
            <div class="movieTitle">
                    <h1>{{movie.Title}}</h1>
            </div>
                    
            
           
            <div class="movieSynopsis">
                <p>{{ movie.Plot }}</p>
            </div>
           
            <button class="myList" @click="addToMyList(movie),showToast()" >
                    <v-icon name="list-ul" scale="1.2" color="#e5e5e5" id="playIcon" />
                    Add to your list
                    
             </button>            

            </div>
            
            <div class="descriptions">
                <p>
                        Duration<br>
                        <span>{{ movie.Runtime }}</span>
                </p>
                <p>
                        Genre<br>
                        <span>{{ movie.Genre }}</span>
                </p>
                
                <p>
                         Director<br>
                        <span>{{ movie.Director }}</span>
                </p>
                <p>
                        Actors<br>
                        <span>{{ movie.Actors }}</span>
                </p>
                <p>
                        Prizes<br>
                        <span>{{ movie.Awards }}</span>
                </p>
                <p>
                        Production<br>
                        <span>{{ movie.Production }}</span>
                </p>
            </div>
           
            </div>
      
      </div>
  
  
</template>

<script>
import {mapMutations} from "vuex"
import Header from "../components/Header.vue"
import {Movies} from "../services/apj"
import {Trailer} from "../services/trailer"
import spinner from "../components/Spinner.vue"
import Icon from "vue-awesome/components/Icon";


export default {
  data(){
      return{
          movie:[],
          showLoading:true,
          trailerID:""
      }
  },
  
  components: { Header,spinner,'v-icon':Icon },



  async mounted(){
   try{
    const response = await Movies(`i=${this.$route.params.id}`).get();
    this.movie=response.data
    const responseTrailer=await Trailer(`${this.movie.Title} Trailer`).get();
    this.trailerID = responseTrailer.data.items[0].id.videoId;
   }
    catch(e){
        console.log(e)
    }
    finally{
        this.showLoading=false
        
    }
  
  },

    methods:{
        ...mapMutations(['addToMyList']),
        
        
        showToast(){
            this.$toast.open({
            message: "Success Add To Your List",
            type: "success",
            duration: 3000,
            dismissible: true,
            queue: false,
            position: "top-right"
        })
        }        
    }
}
   
   
</script>

<style lang='stylus'>
    .detailContain
        display flex
        flex-direction column
        justify-content center
        align-items center

    .detailDescriptions
        display flex
        justify-content center
        flex-wrap wrap
        width 60%
        .movieSynopsis
            text-align center
            font-family Arial, Helvetica, sans-serif
            color #ccc
        @media (max-width 820px)
            width 100%
            .movieTitle
                font-size 0.8rem
            .movieSynopsis
                font-size 0.8rem
    .top
        display flex
        justify-content space-between
        width 42%
        #trailerIcon
            display flex
            p
                margin-right 0.8rem
        @media (max-width: 820px)
            width 100%
            justify-content space-between
            font-size 1rem
            padding 1rem
    
    
    .myList
        background-color red
        width 35%
        border-radius 10px
        margin-top 1rem    
        cursor pointer
        font-size 1rem
        color #fff
        word-spacing 0.1rem
        transition all 0.4s         
        &:hover
            font-size 1.1 rem
            transform scale(1.1)
        @media (max-width: 820px)
            border-radius 5px
            width 60%
    .descriptions
        width 70%
        min-height 500px
        display flex
        justify-content space-between
        flex-wrap wrap
        p
            width 30%
            text-align center
            font-size 1.5rem
            span
                font-size 1rem
                font-family Arial, Helvetica, sans-serif
                color #ccc
        @media (min-width 821px)
            align-items center
        @media (max-width 820px)
            width 100%
            justify-content space-around
            margin-top 1.3rem
            p 
                font-size 1.2rem
                span
                    font-size 0.8rem
            min-height 350px
    #videoContainer
        @media (max-width 820px)
            width 100%
            display grid
            place-items center
            iframe
                width 95%

</style>