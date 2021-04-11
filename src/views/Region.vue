<template>
  <div class="region-page">
    <div class="region-page-container">
       <TheContentRegion/>
    </div>
    <div class="region-page-container neighbour-countries-text">
      <p>Países vizinhos</p>
    </div>
    <div class="neighbour-countries region-page-container">
      <div v-for="pais in neighbor_country" :key="pais.alpha2Code">
        <img :src="pais.flag" alt="bandeira Brasil">
      </div>
    </div>
  </div>
</template>

<script>

import TheContentRegion from "@/components/TheContentRegion.vue"
import {mapActions, mapState} from "vuex";
export default {
  name: 'Home',
  props:["id"],
  data(){
    return{
     
    }
  },
  components:{
    TheContentRegion,
  },
  computed:{
    ...mapState(["country"]),
    ...mapState(["neighbor_country"])
   
  },
  methods:{
    ...mapActions(["getCountryByName"]),
    ...mapActions(["getListOfNeighBorCountry"]),
    getCountry(id){
      this.getCountryByName(id);
      this.getListOfNeighBorCountry(id);
    },  
  },
  created(){
   this.getCountry(this.id);
  },
  beforeRouteUpdate(to,from,next){
    this.getCountry(`${to.params.id}`);
    next();
  }
}
</script>

<style>
.region-page{
  padding-top: 96px ;
}
.region-page-container{
  max-width: 1128px;
  margin: 0 auto;
}
.neighbour-countries{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.neighbour-countries > div{
  width: 316px;
  height: 181px;
  margin-bottom: 20px;
  
}
.neighbour-countries-text{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-top: 114px;
  margin-bottom: 48px;
}
.neighbour-countries img{
  width: 316;
  height: 181px;
}

@media(max-width: 576px){
 .region-page{
  padding-top: 22px ;
}
.neighbour-countries{
  flex-direction: column;
}
.region-page-container{
  width: 316px;
}
.neighbour-countries-text{
  margin-top: 46px;
  margin-bottom: 24px;
  }
  .neighbour-countries>div{
    margin-bottom: 20px;
  }
}
</style>