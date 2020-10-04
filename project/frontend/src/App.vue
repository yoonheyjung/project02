<template>
  <div id="app">
    
    <div id="leftmenu" >
      <LeftMenu />
    </div>

    <div id="content"> <!-- 안에 내용 cnotent -->
      <img alt="Vue logo" src="./assets/none.png">
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu";


export default {
  name: 'App',
  components: {
    LeftMenu
  }
}
</script>

<style>
#app {
  width: 100%;
  margin: 10px auto;
  padding: 20px;
}
#leftmenu {
  width: 260px;
  padding: 20px;
  margin-bottom: 20px;
  float: left;
  font-size: larger;
}
#content {
  min-width: 80%;
  width : auto;
  max-width: 85%;
  padding: 45px;
  margin-bottom: 20px;
  float: right;
}
</style>
