<template>
  <div class="nextReleasesContainer">
        <div class="videoContainer">
            <video autoplay muted loop src="../assets/video.mp4"></video>
        </div>
        <div class="contentContainer">
            <h1>Inside Bill's Brain</h1>
            <p>Take a trip inside the mind of Bill Gates as the billionaire opens up about those who influenced him and the audacious goals he's still pursuing.</p>
            <div class="btnn">
              <button class="btn">
                  <v-icon name="play" scale="1" id="iconMain" color="#e5e5e5" />
                  <span>Play</span>
              </button>
              <button class="btn">
                  <v-icon name="info-circle" scale="1" id="iconMain" color="#e5e5e5" />
                  <span>Information</span>
              </button>
            </div>
        </div>
  </div>
</template>

<script>

import Icon from "vue-awesome/components/Icon";


export default {
  components:{
    'v-icon':Icon
  }
}
</script>
<style lang='stylus'>
    .nextReleasesContainer
        width 100%  
        height 500px
        position relative
        @media (max-width: 820px)
          height 210px
    .videoContainer 
        witdh 100%
        height 100%
        overflow hidden
        video
          width 100%
    .contentContainer
        position absolute
        width 30%
        top 30%
        left 4%
        font-family Arial, Helvetica, sans-serif
        h1
          font-size 2rem
          padding-bottom 1rem

        p
          font-size 1rem
          padding-bottom 1rem
        
        @media (max-width: 820px) 
          width 55%
          top 5%
          text-align center
          line-height 1.5rem
          opacity 0.9
          h1 
            font-size 1.6rem
            width 80%
            padding-bottom 0
            margin-top 1rem
          p
            display none
    .btnn
      display flex

    .btn
        width 50%
        background-color rgba(78, 78, 78, 0.562)
        color #e9e9e9
        text-align center
        font-size 1rem
        margin-right 1rem
        &:hover
          background rgb(255, 255, 255)
          color #141414
          transform scale(1.1)
          cursor pointer
        span 
            padding 1rem
        @media (max-width: 820px)
            display flex
            flex-direction column
            margin-top 1rem
            line-height 10px
            align-items center
            height 50px

</style>