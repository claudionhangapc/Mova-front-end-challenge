<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="@/assets/logo_principal.svg" alt="logo mova principal">
      </router-link>
      <router-link to="/" class="btn">
        <img src="@/assets/seta_voltar.svg" alt="seta para voltar">
        <span>Voltar</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default{

}
</script>

<style >
  header{
    padding-top: 19px ;
    padding-bottom: 19px;
    padding-left: 46px;
    padding-right: 67px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  header nav{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  }
  header nav a.btn{
    text-decoration: none;
    box-sizing: border-box;
    width: 134px;
    height: 36px;
    border: 1px solid #6D2080;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  header nav a.btn span{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #6D2080;
  }
   header nav a.btn img{
    width: 19px;
    height: 12px;
    margin-left: 16px;
    margin-right: 21px;
  }
</style>
