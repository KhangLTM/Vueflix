<template>
    <div class='newMovies'>
        <div class="slide">
            <h1>{{typeDescription}}</h1>
            
            <div v-show="showLoading" class="loadingMovie">
                <spinner/>
            </div>
    
            <carousel
                :per-page='5'
                :per-page-custom="[[320,2],[820,5]]"
                :navigate-to='0'
                :mouse-drag='true'
                :paginationEnabled='false'
                :navigationEnabled='true'
                :navigationClickTargetSize='9'
            >
                <slide 
                    v-for="movie in movies"
                    :key="movie.imdbID + removeDuplicate()"
                    class='movieSlides'
            >
                <div>
                    <img :src="movie.Poster" @click="showDetail(movie.imdbID)" class="moviePosterSlide"/>
                </div>

            </slide>
        </carousel>
    </div>    
</div>
</template>

<script>

import {Carousel,Slide} from "vue-carousel"
import Spinner from "./Spinner.vue"
import {Movies} from "../services/apj"
export default {
    data(){
        return{
            movies:[],
            showLoading:true,
            paginationButtons: false
        };
    },
    props:['typeMovie','typeDescription'],
    methods:{
        showDetail(_id) {
        this.$router.push({ name: "Detail", params: { id: _id } });
        },
        removeDuplicate(){
            return String(Math.random())
        }

    },
    components:{
        Carousel,
        Slide,
        Spinner
    },
    async mounted(){
        this.showLoading=true
        try{
            const response= await Movies(this.typeMovie).get();
            this.movies = response.data.Search
        }
        catch(e){
            console.log(e)
        }
        finally{
            this.showLoading=false
        }
    },



}
</script>

<style lang='stylus'>
    .newMovies
        margin-top 2rem
        width 100%
        h1
            font-family Arial, Helvetica, sans-serif
            margin-bottom 1rem
            color #cacaca
            font-size 1.6rem
        @media  (max-width: 820px) 
            margin-top 1rem
            h1 
                font-size 1.3rem
    .slide
        width 90%
        height 100%
        margin auto
        height 90%

    .movieSlides
        margin-top 1.5rem
        padding-left 1rem

    .moviePosterSlide 
        border-radius 15px
        transition 0.5s
        height 300px
        margin-bottom 20px
        width 200px
        &:hover
            transform scale(1.1)
            cursor pointer

    .loadingMovie
        display grid
        place-items center

    .VueCarousel-navigation-button[data-v-453ad8cd]
        color #ccc   
        @media (max-width: 820px)
            display none 
    .moviePosterSlide
        @media (max-width: 820px)
            height 250px
</style>