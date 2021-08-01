<template>
    <div id="app">
        <Header/>
        <div id="flim">
            <next-release/>
            <movies typeMovie="s=avengers" typeDescription="Popular on Vueflix"/>
            <movies typeMovie="s=harry" typeDescription="Recomedations"/>
            <movies typeMovie="s=fast" typeDescription="Actions"/>
            <movies typeMovie="s=impossible" typeDescription="Adventure"/>
            <movies typeMovie="s=shrek" typeDescription="Cartoon"/>
            <movies typeMovie="s=bean" typeDescription="Comedy"/>
        </div>
        

    </div>
</template>
 <script>
    import Header from "../components/Header.vue"
    import NextRelease from "../components/NextReleases.vue"
    import Movies from "../components/Movies.vue"

export default {
    name:"App",
    components:{
        Header,
        NextRelease,
        Movies
    }
}
</script>

<style lang="stylus" >
    body
        background-color #141414
        height 100vh
    #flim
        position absolute
        top 8%    
</style>