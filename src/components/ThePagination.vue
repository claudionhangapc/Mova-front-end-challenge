<template>
  <div class="pagination">
    <div class="pagination-content">
      <ul>
        <li  class="btn-paginacao-seta">
          <router-link to="/">
            <img src="@/assets/paginacao_go_back.svg" alt="paginação voltar">
          </router-link>
        </li>
        <li class="btn-paginacao">
          <router-link to="/">
            1
          </router-link>
        </li>
        <li class="btn-paginacao">
          <router-link to="/" > 
            2
          </router-link>
        </li>
        <li class="btn-paginacao">
          <router-link to="/" >
            3
          </router-link>
        </li>
        <li class="btn-paginacao">
          <router-link to="/" >
            4
          </router-link>
        </li>
        <li class="btn-paginacao">
          <router-link to="/" >
            5
          </router-link>
        </li>
        <li class="btn-paginacao-seta">
          <router-link to="/" >
            <img src="@/assets/paginacao_move_on.svg" alt="paginação voltar">
          </router-link>
        </li>
      </ul>
     
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default{
  computed:{
    ...mapState(["pagination"]),
    }
}
</script>

<style >
  .pagination{
    padding-bottom: 53px;
    padding-top:80px;
  }
  .pagination-content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination-content ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  }
  .btn-paginacao{
    height: 34px;
    width: 34px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    margin-right: 4px;
    margin-left: 4px;
  }
  .btn-paginacao a{
    display: flex;
    padding:7px 12px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
  }

  .btn-paginacao-seta{
    background: #FFFFFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    margin-right: 12px;
    margin-left: 12px;
  }
  
  .btn-paginacao-seta a{
    display: flex;
    height: 28px;
    width: 28px; 
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    box-sizing: border-box;
  }

  .btn-paginacao-seta a img{
    width: 12px;
    height: 7px;
  }
 
  /*
  *
  */
  @media(max-width: 576px){
     .pagination{
      padding-top:28px;
      }
  }

</style>