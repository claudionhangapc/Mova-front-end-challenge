<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-header">
        <!--Select one-->
        <div class="margin-bottom-first-div">
          <p>Filtrar Por</p>
          <select name="" id="" v-model="new_info.select_option_one">
            <option value="alpha" selected >Escolha uma opção</option>
            <option value="region">Região</option>
            <option value="capital">Capital</option>
            <option value="lang">Língua</option>
            <option value="alpha">País</option>
            <option value="callingcode">Código de ligação</option>
          </select>
        </div>
        <!--Select one fim -->

        <!--Select two-->
        <div class="margin-bottom-first-div">
          <p>{{labelSelectTwo}}</p>
          <input  list="info-select" placeholder="Escolha uma opção" type="text" v-model="new_info.select_option_two">
          <datalist id="info-select">
            
          </datalist>
        </div>
        <!--Select two fim -->

        <!-- btn pesquisar -->
        <div class="div-btn-pesquisar">
          <button class="btn-pesquisar" v-on:click="pesquisar">PESQUISAR</button>
        </div>
        <!-- btn pesquisar fim -->
      </div>
      <div class="home-container-content">
        <div v-for="pais in new_info.result" :key="pais.alpha2Code" >
          <router-link :to="{name:'region',params:{id:pais.alpha2Code}}">
            <img :src="pais.flag" :alt="pais.name" >
          </router-link>
        </div>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>

import {helpers} from '@/helpers.js'
export default {
  name: 'Home',
  props:["id"],
  data(){
   return{
     new_info:{
       select_option_one:"",
       select_option_two:"",
       result:{}
     },
   
   } 
  },
  methods:{
    getAllCountry(){
      fetch(`https://restcountries.eu/rest/v2/`)
      .then(response => response.json())
      .then(response =>{
        console.log(response.length);
        this.new_info.result = response;
      })
    },
    getCountryByCapitalCity(){
       fetch(`https://restcountries.eu/rest/v2/${this.new_info.select_option_one}/${this.new_info.select_option_two}`)
      .then(response => response.json())
      .then(response =>{
        this.new_info.result = response;
      })
    },
    getCountryByLang(){
      fetch(`https://restcountries.eu/rest/v2/${this.new_info.select_option_one}/${this.new_info.select_option_two}`)
      .then(response => response.json())
      .then(response =>{
        this.new_info.result = response;
      })
    },
    getCountryByName(){
      let array_conutry = [];
      fetch(`https://restcountries.eu/rest/v2/${this.new_info.select_option_one}/${this.new_info.select_option_two}`)
      .then(response => response.json())
      .then(response =>{
         array_conutry[0] = response;
        this.new_info.result =  array_conutry;
        
      })
    },
    getCountryByCallingCode(){
      fetch(`https://restcountries.eu/rest/v2/${this.new_info.select_option_one}/${this.new_info.select_option_two}`)
      .then(response => response.json())
      .then(response =>{
        this.new_info.result = response;
      })
    },
    getCountryByRegion(){
      this.new_info.select_option_one="region";
      this.new_info.select_option_two = this.id;
      fetch(`https://restcountries.eu/rest/v2/${this.new_info.select_option_one}/${this.new_info.select_option_two}`)
      .then(response => response.json())
      .then(response =>{
        this.new_info.result = response;
      })
    },
     starFromRegion(id){
       if(id===undefined){
         this.getAllCountry();
       }else{
        this.getCountryByRegion();
       }     
      },
    pesquisar(){
      //this.getCountryByCapitalCity();
      //this.getCountryByLang();
      //
      //this.getCountryByName();
      this.getCountryByCallingCode();
    }
  },
  created(){
    this.starFromRegion(this.id);
  },
  computed:{
    labelSelectTwo(){ 
      return helpers.getTextFromSelected(this.new_info.select_option_one);
    }
  }
}
</script>

<style>
.home{
  padding-top: 118px;
}

.home-container{
  max-width:1128px;
  margin: 0 auto;
}
.home-container-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.home-container-header>div{
  /*background: chartreuse;*/
  width: 316px;
  /*margin-bottom: 20px;*/
}

.home-container-header>div p{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #6D2080;
  margin-bottom: 3px;
}

.home-container-header>div select{
  width: 100%;
  border: 1px solid #A8A8A8;
  box-sizing: border-box;
  transform: rotate(0deg);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  border:none;
  border-bottom: 1px solid #A8A8A8;
   padding-bottom: 3px;
}

.home-container-header>div input{
  width: 100%;
  border: 1px solid #A8A8A8;
  box-sizing: border-box;
  transform: rotate(0deg);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #8D8D8D;
  border:none;
  border-bottom: 1px solid #A8A8A8;
  padding-bottom: 3px;
}


.btn-pesquisar{
  background: #6D2080;
  border:none;
  border-radius: 10px;
  Width:156px;
  Height:36px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
button:focus, input:focus, select:focus { outline: none; }

.home-container-content{
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home-container-content>div{
  width: 316px;
  height:181px;
  margin-bottom: 20px;

}

.home-container-content>div img{
  width: 316px;
  height:181px;
}

/*
* media query
*/
@media(max-width: 576px){
  .home{
    padding-top:48px;
  }
  .home-container{
    max-width: 316px;
  }
  .home-container-header{
    flex-direction: column;
  }
  .home-container-content{
    flex-direction: column;
    margin-top:22px;
  }
  .home-container-content>div{
    margin-bottom: 20px;
  }
  .margin-bottom-first-div{
    margin-bottom: 22px;
  }
  .div-btn-pesquisar{
    text-align: right;
  }
}

</style>