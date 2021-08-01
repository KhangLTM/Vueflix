<template>
  <div v-if="show" class="preloader">
      <div class='loadImgContain'>
          <img class="loadImg" src="../assets/logo-big.png" >
      </div>
        <spinner class="spinner"/>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
export default {
  components: { Spinner },
  data(){
      return{
          show:true
      }
  },
    mounted(){
        if(this.show==true) this.showToggle()
    },
    methods:{
      showToggle() {
      setTimeout(() => {
        this.show = false;
        this.$router.push("/Main");
      }, 4000);
    }
  }

}



</script>

<style lang='stylus'>
    .preloader
        width 100%
        height 100vh
        display flex 
        flex-direction column
        justify-content center
        align-items center
        @media (max-width 820px)
          .loadImgContain
              width 90%
</style>