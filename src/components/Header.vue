<template>
  <div class="container">
      <div id="header">
            <img class="header__logo" @click="navigateMain" src="../assets/logo-small.png" >
            <nav>
                <ul>    
      
                    <li class="items" @click="navigateMain" >HOME</li>
      
                    <li class="items">SERIES</li>
      
                    <li class="items">FLIMS</li>
      
                    <li class="items">NEWEST FLIM</li>
      
                    <li class="items" @click="navigateList" >MY LIST</li>
      
      
                </ul>
            </nav>
            <div class="textForm">
                <input class="search" type="text" placeholder="Títulos, gente e gêneros">
            </div>
      
            <div class="icons">
                

                <v-icon name="bell" scale="1.3" color="#e5e5e5" />
      
                <v-icon name="user-circle" scale="1.5" color="#e5e5e5" />
                
                <v-icon @click="clickToggle" class="moblieIcon" v-if="!toggle" name="align-justify" scale="1.5" color="#e5e5e5" />
                
                <v-icon @click="clickToggle"  class="moblieIcon" v-else name="times" scale="1.8" color="#e5e5e5" />
            </div>
      
      </div>
        <transition name="dropdown">
            <div v-show="toggle" id='dropDownContainer'>
                <ul class="dropdown">
                    <li @click="navigateMain">
                        <a>HOME</a>
                    </li>
                    <li>
                        <a>FLIMS</a>
                    </li>
                    <li>
                        <a>SERIES</a>
                    </li>
            
                    <li>
                        <a>NEWST FLIM</a>
                    </li>
            
                    <li @click="navigateList">
                        <a>MY LIST</a>
                    </li>
                </ul>
            
            </div>
        </transition>
  </div>
</template>

<script>

import Icon from "vue-awesome/components/Icon"


export default {
    components:{
        "v-icon":Icon
    },
    data(){
        return{
            inputSearch:"",
            toggle:false
        }
    },
    methods:{
        navigateMain(){
            this.$router.push({name:"Main"})
        },   
            
        navigateList(){    
            this.$router.push({name:"MyList"})
        },
        clickToggle(){
            this.toggle=!this.toggle
        }
    }
}
</script>

<style lang="stylus">
    .container 
        position relative
    #header
        width 100%
        height 10%
        background-color #141414
        display flex
        align-items center    
        z-index 1   
        opacity 0.9 
    .header__logo
        margin-left 2rem    
        cursor pointer
        @media (max-width: 820px)
            margin-left 1rem
            
        
    nav
        width 70vw
        color white
        display flex

     ul   
        width 100%
        margin 0
        margin-left 4rem
        display flex    
        align-items center
        
        li
            display block
            color #fff 
            padding 1rem
            font-size 0.9rem
            cursor pointer
            @media (max-width: 820px)
                display none
    
    #dropDownContainer
        display none
        @media (max-width:820px)
            display flex
            width 100%
            height 100vh 
            position absolute
            background-color rgba(9, 13, 10, 0.9)
            z-index 999
            .dropdown
                display flex
                flex-direction column
                align-items center
                margin-top 5rem
                li
                    font-size 1.5rem
                    display block
    .textForm
        width 20%
        .search
            width 0px
            font-size 0.8rem
            border none
            border-bottom 2px solid #ccc
            color #e5e5e5
            background-color #141414;
            background-image url("../assets/search.png")
            background-repeat no-repeat
            background-position 10px 10px        
            padding: 12px 7px 12px 40px;
            cursor pointer
            transition width 0.4s ease
            &:focus
                width 80% 
        @media (max-width: 820px)
            display none
     
    .icons
        width 10%
        display flex
        justify-content space-around 
        align-items center
        cursor pointer
        .moblieIcon
            display none
        @media (max-width: 820px)
            width 90%
            .moblieIcon
                display block
                transition all 0.3 ease             
    .dropdown-enter,
    .dropdown-leave-to {
        transform: scaleY(0.7);
        opacity: 0;
    }
 
    .dropdown-enter-to,
    .dropdown-leave {
        opacity: 1;
        transform: scaleY(1);
        }   
 
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all 0.4s ease-out;
        transform-origin: top center;
        }   

</style>