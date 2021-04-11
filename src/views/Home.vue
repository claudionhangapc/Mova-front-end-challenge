<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-header">
        <!--Select one-->
        <div class="margin-bottom-first-div">
          <p>Filtrar Por</p>
          <select name="" id="">
            <option value=""  selected >Escolha uma opção</option>
            <option value="">Região</option>
            <option value="">Capital</option>
            <option value="">Língua</option>
            <option value="">País</option>
            <option value="">Código de ligação</option>
          </select>
        </div>
        <!--Select one fim -->

        <!--Select two-->
        <div class="margin-bottom-first-div">
          <p>Regiao</p>
          <input  list="info-select" placeholder="Escolha uma opção" type="text">
          <datalist id="info-select">
            <option value="teste 1"/>
            <option value="teste 2"/>
            <option value="teste 3"/>
          </datalist>
        </div>
        <!--Select two fim -->

        <!-- btn pesquisar -->
        <div class="div-btn-pesquisar">
          <button class="btn-pesquisar">PESQUISAR</button>
        </div>
        <!-- btn pesquisar fim -->
      </div>
      <div class="home-container-content">
        <div v-for="pais in new_info.result" :key="pais.alpha2Code">
          <img :src="pais.flag" :alt="pais.name">
        </div>
        <div>
          <img src="@/assets/Bandeira_Alemanha.png" alt="bandeira Alemanha">
        </div>
        <div>
          <img src="@/assets/Bandeira_Japao.png" alt="bandeira Japão">
        </div>
      </div>
    </div>
    <div>
      {{new_info.result[0].name}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
   return{
     new_info:{
       select_option_one:"",
       select_option_two:"",
       result:{}
     }
   } 
  },
  methods:{
    getInfotmation(){
      fetch(`https://restcountries.eu/rest/v2/`)
      .then(response => response.json())
      .then(response =>{
        this.new_info.result = response;
      })
    }
  },
  created(){
    this.getInfotmation();
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
  justify-content: space-between;
}

.home-container-content>div{
  width: 316px;
  height:181px;
}
.home-container-content>div img{
  width: 100%;
  height: 100%;
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