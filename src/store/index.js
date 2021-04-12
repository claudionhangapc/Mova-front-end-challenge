import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country:{
    },
    neighbor_country:[],
    pagination:{
      
    }
  },
  mutations: {
    UPDATE_COUNTRY(state,payload){
      state.country = payload;
    },
    UPDATE_NEIGHBOR_COUNTRY(state,payload){
      state.neighbor_country = payload;
    },
    
  },
  actions: {
    async getCountryByName(context, payload){
      const dadosResponse = await fetch(`https://restcountries.eu/rest/v2/alpha/${payload}`);

      const dadosJason = await dadosResponse.json();
      context.commit("UPDATE_COUNTRY",dadosJason);
      context.commit("UPDATE_PAGINATION",dadosJason);
      
    },
    async getListOfNeighBorCountry(context, payload){
      let array_country=[];
      const dadosResponse = await fetch(`https://restcountries.eu/rest/v2/alpha/${payload}`);


      const dadosJason = await dadosResponse.json();
      let elementArray = dadosJason.borders;

      if(elementArray==""){
        elementArray =[];
      }
      elementArray.forEach(element => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${element}`)
        .then(response => response.json())
        .then(response =>{
          array_country.push(response);
        })
      });
      context.commit("UPDATE_NEIGHBOR_COUNTRY",array_country);
    },
    
  },
  modules: {
  }
})
