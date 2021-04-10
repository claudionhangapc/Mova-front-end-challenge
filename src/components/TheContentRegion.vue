<template>
  <div class="region">
    <div class="region-content">
      <div class="region-content-div-img">
        <img src="@/assets/Bandeira_Brasil.png" alt="bandeira Brasil">
      </div>
      <div class="region-content-div-info">
        <div class="margin-bottom-p">
          <span>Nome: </span>
          <span>Brasil</span>
        </div>
        <div class="margin-bottom-p">
          <span>Capital: </span>
          <span>Brasília</span>
        </div>
        <div class="margin-bottom-p">
          <span>Sub-reião: </span>
          <span>Sub-região</span>
        </div>
        <div class="margin-bottom-p">
          <span>População: </span>
          <span>XXXXXX</span>
        </div>
        <div>
          <span>Linguas: </span>
          <span>Portugues</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style >
.region-content{
  display: flex;
  height: 258px;
  box-sizing: border-box;
}

.region-content-div-img{
width: 443px;
height: 100%;
}
.region-content-div-img img{
width: 100%;
height: 100%;
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
  margin-bottom: 32px;
}
</style>