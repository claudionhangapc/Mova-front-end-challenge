<template>
  <div class="region">
    <div class="region-content">
      <div class="region-content-div-img">
        <img v-bind:src="country.flag" :alt="country.flag">
      </div>
      <div class="region-content-div-info">
        <div class="margin-bottom-p">
          <span>Nome: </span>
          <span>{{country.name}}</span>
        </div>
        <div class="margin-bottom-p">
          <span>Capital: </span>
          <span>{{country.capital}}</span>
        </div>
        <div class="margin-bottom-p">
          <span>Região: </span>
          <span>
            <router-link :to="{name:'showregion',params:{id:country.region}}">
             {{country.region}}
            </router-link>
          </span>
        </div>
        <div class="margin-bottom-p">
          <span>Sub-reião: </span>
          <span>{{country.subregion}}</span>
        </div>
        <div class="margin-bottom-p">
          <span>População: </span>
          <span>{{country.population}}</span>
        </div>
        <div>
          <span>Linguas: </span>
          <span>Portugues </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default{
  computed:{
    ...mapState(["country"])
  }
}
</script>

<style >
.region-content{
  display: flex;
  box-sizing: border-box;
}

.region-content-div-img{
  width: 443px;
 
}
.region-content-div-img img{
  width: 443px;
  height: 258px;
}
.region-content-div-info{
  margin-left: 24px;
  box-sizing: border-box;
  padding: 8px 0;
  display: flexbox;
}
.region-content-div-info > div {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #454545;
}
.margin-bottom-p{
  margin-bottom: 20px;
}

@media(max-width: 576px){
  .region-page{
    width: 316px;
    margin: 0 auto;
  }
  .region-content{
    flex-direction: column;
  }
  .region-content-div-img{
    width: 316px;
    margin-bottom: 22px;
  }
  .region-content-div-img img{
    width: 316px;
    height: 181px;
  }
  .region-content-div-info{
    margin-left: 0px;
    }
    
  /*.region-content{
  height: auto;
  flex-direction: column;

  }
  .region-content-div-img{
    height: auto;
  }
  .region-content-div-img img{
    width: 316px;
    height: 181px;
  }*/

}
</style>

