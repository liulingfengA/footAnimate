<template>
  <div id="body">
    <div id="nav">
        <router-view/>
    </div>
  </div>
</template>

<style lang="less">
  .body{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow：hidden
    .nav{
      height: 100%;
      overflow: auto;
    }
  }
</style>
